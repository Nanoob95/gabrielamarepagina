'use client'
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 360); // Ajusta este valor según sea necesario
    };

    handleResize(); // Verifica el tamaño de la pantalla al cargar
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-blue-900 bg-opacity-100" : "bg-transparent"
      } flex items-center justify-between z-30 fixed top-0 w-full text-white px-5 transition-all duration-200 ${
        isSmallScreen ? "h-16" : "h-14" 
      }`}
    >
      <Link href={"/"}>
        <FaHome
          className={`hover:bg-blue-600 transition-all duration-200 w-10 h-10 lg:w-14 lg:h-14 p-2 lg:p-3 rounded-full`}
        />
      </Link>
      <div className="h-full flex">
        <ul className="flex items-center h-full justify-center gap-5 lg:gap-40 text-xs lg:text-base font-medium tracking-wider">
          <Link href={"/casa-del-alto"}>
            <li className="h-full hover:bg-blue-600 hover:bg-opacity-50 p-2 lg:p-3 cursor-pointer"> 
              <p className="h-full">CASA DEL ALTO</p>
            </li>
          </Link>
          <Link href={"/casa-conesa"}>
            <li className="h-full hover:bg-blue-600 hover:bg-opacity-50  p-2 lg:p-3 cursor-pointer">
              <p className="h-full">CASA CONESA</p>
            </li>                  
          </Link>
        </ul>
      </div>
      <Link href={"#contacto"}>
        <MdEmail
          className={`hover:bg-blue-600 transition-all duration-200 w-10 h-10 lg:w-14 lg:h-14 p-2 lg:p-3 rounded-full`}
        />
      </Link>
    </nav>
  );
}