import type { Metadata } from "next";
import "./globals.scss";
import { ThemeProvider } from "../context/ThemeContext";

// this is like the signpost outside your house for google to read
export const metadata: Metadata = {
  title: "mfgeeked | AI/ML Engineer",
  description: "Portfolio of Olajide Muhammed",
};

// this is the main structure of the house
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* we wrap the whole house (children) inside our magic wire! */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}