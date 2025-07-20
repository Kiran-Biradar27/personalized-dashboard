import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Personalized Dashboard",
  description: "Your smart content hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
