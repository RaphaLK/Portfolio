import "./globals.css";
import { geistSans, geistMono, spaceGrotesk } from "./fonts";
import Backdrop from "@/components/site/Backdrop";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CommandPalette from "@/components/site/CommandPalette";

const SITE_URL = "https://raphaelkusuma.me";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Raphael Kusuma — Software Engineer",
    template: "%s | Raphael Kusuma",
  },
  description:
    "M.S. Computer Science and Engineering @ Santa Clara University. Portfolio of work in systems programming, compilers, and full-stack applications.",
  keywords: [
    "Raphael Kusuma",
    "Software Engineer",
    "Systems Programming",
    "C++",
    "Rust",
    "React",
    "Full Stack Developer",
    "Santa Clara University",
    "Computer Science",
  ],
  authors: [{ name: "Raphael Kusuma" }],
  creator: "Raphael Kusuma",
  publisher: "Raphael Kusuma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Raphael Kusuma — Software Engineer",
    description:
      "M.S. Computer Science and Engineering @ Santa Clara University.",
    siteName: "Raphael Kusuma",
    images: [
      {
        url: "/Assets/MyPhoto.jpg",
        width: 1200,
        height: 630,
        alt: "Raphael Kusuma — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphael Kusuma — Software Engineer",
    description:
      "M.S. Computer Science and Engineering @ Santa Clara University.",
    images: ["/Assets/MyPhoto.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <Backdrop />
        <CommandPalette />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
