import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ThemeProvider from "../components/ThemeProvider";
import { SITE_NAME, SITE_TAGLINE } from "../config";
import { display, mono, sans } from "../lib/fonts";
import "./globals.css";

export const metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "RedSheel is the only agency built exclusively for Reddit and X marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${sans.className} ${sans.variable} ${display.variable} ${mono.variable} bg-[#f5efe4] text-zinc-950 antialiased dark:bg-[#17120f] dark:text-zinc-50`}
      >
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
