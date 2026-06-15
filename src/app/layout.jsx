import "./globals.css";
import "../components/Nav.css";
import "../components/Hero.css";
import "../components/Stats.css";
import "../components/Services.css";
import "../components/Process.css";
import "../components/Platforms.css";
import "../components/Results.css";
import "../components/Pricing.css";
import "../components/Contact.css";
import "../components/Footer.css";

export const metadata = {
  title: "RedSheel - Reddit & X Marketing Agency",
  description:
    "RedSheel is the only agency built exclusively for Reddit and X marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
