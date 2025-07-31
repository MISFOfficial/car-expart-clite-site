import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigations/Navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navigation></Navigation>
        <div className="max-w-[1280px] mx-auto">
          {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
