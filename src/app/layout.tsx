import type { Metadata } from "next";
import "./globals.css";

import { AppProvider } from '@toolpad/core';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { geistMono, geistSans } from "./fonts";
import { navigation } from "./navigation";
import { branding } from "./branding";

export const metadata: Metadata = {
  title: "Mausritter Tools",
  description: "Some helpful tools for the Mausritter TTRPG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider navigation={navigation} branding={branding}>
            {children}
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
