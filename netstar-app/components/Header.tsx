// Component : Header

import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  // Header Component Changes while Scrolling
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`${isScrolled && "bg-[#111111]"}`}>
      {/* Left Navigation */}
      <nav className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/netstar.png"
          alt="NetStar Logo"
          width={87}
          height={27.1}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">ホーム</li>
          <li className="headerLink">テレビショー</li>
          <li className="headerLink">動画</li>
          <li className="headerLink">新しい＆人気</li>
          <li className="headerLink">私のリスト</li>
        </ul>
      </nav>

      {/* Right Navigation */}
      <nav className="flex items-center space-x-4 text-sm font-light">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 hidden sm:inline"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
