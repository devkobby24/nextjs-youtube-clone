import { Outfit } from "next/font/google";
import "./globals.css";

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
      <body
       className={`${outfit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
