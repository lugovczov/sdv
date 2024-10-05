import "@styles/index.scss";

import { Open_Sans } from "next/font/google";
import { ClientProviders } from "@shared/providers";
import { ReactElement } from "react";
import { Viewport } from "next";

const openSans = Open_Sans({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export async function generateMetadata() {
  return {
    title: "Dating Landing",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
