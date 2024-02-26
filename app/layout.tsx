import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar/NavBar";
import { EdgeStoreProvider } from "@/lib/edgestore";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Jobby",
  description: "Job listing portal",
  keywords: "job, listing, portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <EdgeStoreProvider>
          <NavBar />
          {children}
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
