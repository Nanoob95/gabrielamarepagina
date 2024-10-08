import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav.";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Alquileres temporarios | Esquel",
  description: "Alquileres temporarios en Esquel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
