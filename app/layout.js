import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../swift-shop/navbar/navbar";
import Hero from "../swift-shop/Home/hero";
import ReduxProvider from '../store/reduxprovider';
import Footer from '../swift-shop/component/footer/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          <Hero />
          {children}
          <Footer/>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
