import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Sannidhya Ray | Portfolio",
  description: "ECE + Physics | ML | Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
