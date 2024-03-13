import {
  Inter,
  Libre_Baskerville,
  Libre_Caslon_Display,
} from "next/font/google";
import "./globals.css";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const liber = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Chase & Quinn - Commercial Lawyers",
  description:
    "Chase & Quinn are your trusted commercial lawyers specializing in business law, contract disputes, and intellectual property protection. With years of experience serving clients in the business community, our legal team is committed to providing top-notch legal advice and representation. Whether you're a startup looking for guidance on how to protect your intellectual property, or an established enterprise facing contractual issues, Chase & Quinn are here to navigate the complexities of commercial law for you. Discover how our expertise can support your business's legal needs today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={liber.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
