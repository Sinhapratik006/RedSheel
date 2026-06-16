"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableSystem={false}
      storageKey="redsheel-theme"
      themes={["light", "dark"]}
    >
      {children}
    </NextThemeProvider>
  );
}
