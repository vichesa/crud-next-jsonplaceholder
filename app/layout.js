import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My CRUD",
  description: "CRUD with Next Js and JSONPlaceholder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <div className="text-center place-items-center h-screen grid py-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
