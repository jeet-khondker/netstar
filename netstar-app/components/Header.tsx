// Component : Header

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  // Header Component Changes while Scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { logout } = useAuth();

  return (
    <header className={`${isScrolled && "bg-[#111111]"}`}>
      {/* Left Navigation */}
      <nav className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <Image
            src="/netstar.png"
            alt="NetStar Logo"
            width={87}
            height={27.1}
            className="cursor-pointer object-contain"
          />
        </Link>
      </nav>

      {/* Right Navigation */}
      <nav className="flex items-center space-x-4 text-sm font-light">
        {user?.email}
        &emsp;
        <svg
          onClick={logout}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
