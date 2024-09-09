import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import GlobalLayout from "@/components/GlobalLayout";



const Switzer = localFont({
  src: [
    {
      path: "/fonts/Switzer-Light.woff2",
      weight: "300",
    },
    {
      path: "/fonts/Switzer-Medium.woff2",
      weight: "500",
    },
    {
      path: "/fonts/Switzer-Bold.woff2",
      weight: "800",
    },
    {
      path: "/fonts/Switzer-Regular.woff2",
      weight: "400",
    },
    {
      path: "/fonts/Switzer-Thin.woff2",
      weight: "100",
    },
    
  ],
  variable: "--font-Switzer",
});
const Span = localFont({
  src: [
    {
      path: "/fonts/Span-Regular.otf",
      weight: "400",
    },
    
    
  ],
  variable: "--font-Span",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Span.variable} ${Switzer.variable} bg-white`}>
        <AntdRegistry>
        <GlobalLayout>
          {children}
        </GlobalLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
