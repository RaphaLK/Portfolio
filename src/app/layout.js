import localFont from "next/font/local";
import "./globals.css";
import TransitionWrapper from "../components/TransitionWrapper.js";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
});

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  );
}