import "./globals.css";

export const metadata = {
  title: "Flight Mode Studio — AI Content for Small Businesses",
  description: "Affordable, high-quality short-form video content for small businesses and growing brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
