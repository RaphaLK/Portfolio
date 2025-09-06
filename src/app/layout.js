import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from './Components/Navbar';
import TransitionWrapper from "@/components/TransitionWrapper";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: "Raphael Kusuma - Aspiring Systems Software Engineer",
    template: "%s | Raphael Kusuma"
  },
  description: "M.S. Computer Science student at SCU specializing in systems programming, C++, Rust, and full-stack development. Portfolio showcasing projects in OS development, compilers, and web applications.",
  keywords: ["Raphael Kusuma", "Software Engineer", "Systems Programming", "C++", "Rust", "React", "Full Stack Developer", "Santa Clara University", "Computer Science"],
  authors: [{ name: "Raphael Kusuma" }],
  creator: "Raphael Kusuma",
  publisher: "Raphael Kusuma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raphaelkusuma.vercel.app/', 
    title: 'Raphael Kusuma - Software Engineer & Systems Developer',
    description: 'M.S. Computer Science student specializing in systems programming, C++, Rust, and full-stack development.',
    siteName: 'Raphael Kusuma Portfolio',
    images: [{
      url: 'https://raphaelkusuma.vercel.app/Assets/MyPhoto.jpg', 
      width: 1200,
      height: 630,
      alt: 'Raphael Kusuma - Software Engineer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raphael Kusuma - Software Engineer & Systems Developer',
    description: 'M.S. Computer Science student specializing in systems programming, C++, Rust, and full-stack development.',
    images: ['https://your-domain.com/Assets/MyPhoto.jpg'], 
  },
  verification: {
    // google: 'your-google-site-verification-code',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={"mt-15"}>
          {children}
        </div>
      </body>
    </html>
  );
}