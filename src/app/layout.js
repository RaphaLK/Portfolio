import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from './Components/Navbar';
import TransitionWrapper from "../components/TransitionWrapper.js";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: "Raph's Website",
  description: "Welcome to website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <TransitionWrapper>
          {children}
        </TransitionWrapper>
      </body>
    </html>
  );
}