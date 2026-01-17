import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "@/components/ui/toaster"; // استيراد حاوية التنبيهات

export const metadata: Metadata = {
  title: "PiTrust Oracle | Secure Escrow",
  description: "Secure escrow service for Pi Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider>
          {children}
          {/* هذا المكون هو الذي سيظهر رسائل النجاح والنزاعات بشكل أنيق */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}