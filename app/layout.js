import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lato, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

const oswald = Oswald({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const lato = Lato({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  weight: "700",
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Morku Manaye | Jr. Software Engineer",
  description:
    "Morku Manaye is a passionate Jr. Software Engineer dedicated to crafting immersive UI experiences with React and Next.js. Known for clean code and elegant interfaces.",
  keywords:
    "Morku Manaye, Jr. Software Engineer, React Developer, Next.js Developer, Web Developer, UI Developer, Web Development, JavaScript, HTML, CSS",
  author: "Morku Manaye",
  robots: "index, follow",
  canonical: "https://vercel.app",
  openGraph: {
    ...openGraphImage,
    title: "Morku Manaye | Jr. Software Engineer",
    type: "website",
    url: "https://em.vercel.app/",
    description:
      "Morku Manaye is a passionate Jr. Software Engineer who excels in creating engaging UI experiences with a focus on React and Next.js. Explore his portfolio to see his work.",
    site_name: "Morku Manaye Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Morku Manaye | Jr. Software Engineer",
    description:
      "Discover the work of Morku Manaye, a dedicated Jr. Software Engineer specializing in React and Next.js, known for clean code and beautiful UI designs.",
    image: "https://emonsinimg/ogImage.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="!scroll-smooth">
      <body
        className={cn(
          "bg-background font-lato antialiased ",
          lato.variable,
          oswald.variable,
          playfair.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
