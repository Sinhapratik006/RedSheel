import { Fraunces, JetBrains_Mono } from "next/font/google";

export const fraunces = Fraunces({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
