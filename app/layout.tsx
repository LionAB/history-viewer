import type { Metadata } from "next";
//import { Space_Grotesk as FontSans} from "next/font/google";
import { Inter as FontSans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "../components/ThemeProvider";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";
//const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "HistoriMap",
  description: "HistoriMap ,rendre la découverte de l'Histoire plus ludique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body   className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ><NavBar/>
          <main className=" flex-grow bg-grid-black/[0.04] antialiased dark:bg-grid-white/[0.04] flex min-h-[80vh] flex-col items-center  p-15">
            {children}
          </main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
