// Conversion tracking for Google Ads, plus the Calendly booking pop-up.
//
// Fill in the two "send_to" values from Google Ads (Goals → Conversions →
// the conversion action → Tag setup → Event snippet). Until they are set,
// the Calendly pop-up still works and nothing is sent to Google.
(function () {
  var CONFIG = {
    callBooked: "",    // e.g. "AW-123456789/AbCdEfGhIj"
    planPurchased: "", // e.g. "AW-123456789/KlMnOpQrSt"
  };

  // Plan prices in rand, matching app/api/checkout/route.ts.
  var PLAN_VALUES = { starter: 3000, growth: 6000, scale: 10000 };

  var tagId = (CONFIG.callBooked || CONFIG.planPurchased).split("/")[0];

  // Google tag
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  if (tagId) {
    var g = document.createElement("script");
    g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(tagId);
    document.head.appendChild(g);
    gtag("js", new Date());
    gtag("config", tagId);
  }

  function track(sendTo, extra) {
    if (!sendTo) return;
    var params = { send_to: sendTo };
    for (var k in extra || {}) params[k] = extra[k];
    window.gtag("event", "conversion", params);
  }

  // Remember a value once per browser, so refreshing a page doesn't count twice.
  function firstTime(key) {
    try {
      if (localStorage.getItem(key)) return false;
      localStorage.setItem(key, "1");
    } catch (e) { /* storage blocked: count it anyway */ }
    return true;
  }

  // Purchases: the payment success page carries ?plan=…&ref=… from checkout.
  if (location.pathname.indexOf("/payment/success") === 0) {
    var q = new URLSearchParams(location.search);
    var plan = q.get("plan");
    var ref = q.get("ref");
    if (PLAN_VALUES[plan] && ref && firstTime("fms_purchase_" + ref)) {
      track(CONFIG.planPurchased, {
        value: PLAN_VALUES[plan],
        currency: "ZAR",
        transaction_id: ref,
      });
    }
  }

  // Calendly: open booking links in a pop-up on this site, so a completed
  // booking can be counted. Falls back to the normal link if Calendly's
  // script can't load.
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(css);
  var cal = document.createElement("script");
  cal.async = true;
  cal.src = "https://assets.calendly.com/assets/external/widget.js";
  document.head.appendChild(cal);

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href*="calendly.com/"]');
    if (!a || !window.Calendly || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    window.Calendly.initPopupWidget({ url: a.href });
  });

  window.addEventListener("message", function (e) {
    if (e.origin !== "https://calendly.com") return;
    var data = e.data || {};
    if (data.event !== "calendly.event_scheduled") return;
    var uri = (data.payload && data.payload.invitee && data.payload.invitee.uri) || String(Date.now());
    if (firstTime("fms_booking_" + uri)) track(CONFIG.callBooked);
  });
})();
