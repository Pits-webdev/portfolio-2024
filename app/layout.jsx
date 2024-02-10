import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
export const metadata = {
  title: "Pits | Webdev",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='de'>
      <body>
        <SmoothScroll>
          <div className='_app'>
            <Nav />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
