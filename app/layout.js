import { Outfit } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "YouTube Clone",
  description: "A YouTube clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={`${outfit.className}`}>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
