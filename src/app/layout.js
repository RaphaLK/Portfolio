import "./globals.css";
import TransitionWrapper from "../components/TransitionWrapper.js";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  );
}