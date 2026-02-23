import type { Metadata } from "next";
import "./globals.scss";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: "mfgeeked | AI/ML Engineer",
  description: "AI/ML Engineer with experience building and evaluating machine learning models, fine-tuning language models, and developing AI agent workflows.",
  openGraph: {
    title: "mfgeeked | AI/ML Engineer",
    description: "AI/ML Engineer specializing in supervised learning, prompt engineering, and scalable machine learning solutions.",
    url: "https://your-vercel-domain.vercel.app", 
    siteName: "mfgeeked Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "mfgeeked Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mfgeeked | AI/ML Engineer",
    description: "AI/ML Engineer specializing in LLM fine-tuning and agent workflows.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}