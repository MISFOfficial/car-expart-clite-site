import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigations/Navigation";
import "./globals.css";
import QueryProvider from "./components/Hooks/QueryProvider";

// const queryClint = new QueryClient()
export const metadata = {
  title: 'Car Expart',
};


export default function RootLayout({ children }) {

  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className="">
        <Navigation></Navigation>
        <QueryProvider>
          <div className="max-w-[1280px] mx-auto py-5 md:py-10">
            {children}
          </div>
        </QueryProvider>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
