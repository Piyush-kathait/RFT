import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body className={`${sourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
