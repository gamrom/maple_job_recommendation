import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { Providers } from "./nextUIProviders";
import RecoilRootProvider from "./recoilRootProvider";

// Font files can be colocated inside of `pages`
const mapleFont = localFont({
  src: [
    {
      path: "./fonts/MaplestoryOTFLight.otf",
      weight: "400",
      style: "light",
    },
    {
      path: "./fonts/MaplestoryOTFBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

//meta
export const metadata: Metadata = {
  title: "메이플 직업 추천",
  description: "메이플스토리 직업 추천 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <RecoilRootProvider>
        <Providers>
          <body className={`container mx-auto px-4 ${mapleFont.className}`}>
            {children}
          </body>
        </Providers>
      </RecoilRootProvider>
    </html>
  );
}
