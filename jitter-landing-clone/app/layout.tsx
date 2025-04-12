import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jitter Landing Clone ·  A fast and simple motion design tool on the web",
  description: "Jitter is a collaborative motion design tool that lets you create professional animations in minutes, no matter your experience with motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
