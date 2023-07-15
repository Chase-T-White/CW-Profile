import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./Components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chase White",
  description: "Professional Portfolio for developer Chase White",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
