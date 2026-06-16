import { Geist } from "next/font/google";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ThemeProvider from "../components/ThemeProvider";
import { SITE_NAME, SITE_TAGLINE } from "../config";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "RedSheel is the only agency built exclusively for Reddit and X marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geist.variable} bg-[#f7f7f5] font-sans text-zinc-950 antialiased dark:bg-[#080808] dark:text-zinc-50`}
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
