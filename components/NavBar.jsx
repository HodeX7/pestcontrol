"use client";
import Image from "next/image";
import { SearchNormal1, ShoppingBag } from "iconsax-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setServices] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServices(!showServices);
  };

  // Define the navigation items
  const ITEMS = [
    { title: "ABOUT", url: "/about" },
    { title: "CONTACT", url: "/contact" },
    {
      title: "SERVICES",
      subItems: [
        { title: "Cockroaches", url: "/cockroaches" },
        { title: "Termites", url: "/termites" },
      ],
    },
  ];

  return (
    <nav
      className="z-10 w-full flex items-center justify-between py-4 px-4 md:px-10 rounded-b-[2rem] shadow-3xl fixed top-0"
      style={{
        backgroundColor: "rgb(0 0 0 / 30%)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="logo flex items-center justify-center">
        <Image
          src={"/next.svg"}
          alt="White BG Fitzire Logo"
          width={24}
          height={24}
        />
        <h1 className="font-bold tracking-[6px] ml-2 md:ml-4 text-lg">
          FITZIRE
        </h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar Items */}
      <div className="hidden md:flex md:items-center md:justify-center md:space-x-6">
        {ITEMS.map((item, idx) => (
          <div key={idx} className="relative">
            {item.title === "SERVICES" ? (
              <div
                onMouseEnter={() => toggleServices(true)}
                onMouseLeave={() => toggleServices(false)}
              >
                <a className="font-bold cursor-pointer" href={item.url}>
                  {item.title}
                </a>
                {showServices && (
                  <div className="absolute w-56 top-full left-0 bg-black p-2">
                    {item.subItems.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        className="block font-bold text-center py-2"
                        href={subItem.url}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a className="font-bold" href={item.url}>
                {item.title}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Search and Shopping Bag Icons */}
      <div className="hidden md:flex md:items-center md:justify-center md:space-x-4">
        <SearchNormal1 />
        <ShoppingBag />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full bg-background border-t border-primaryLight py-4 px-4">
          {ITEMS.map((item, idx) => (
            <div key={idx} className="relative">
              <a
                className="block font-bold text-center py-2 cursor-pointer"
                onClick={() => {
                  if (item.title === "SERVICES") {
                    toggleServices(!showServices);
                  }
                }}
                href={item.url}
              >
                {item.title}
              </a>
              {item.title === "SERVICES" && showServices && (
                <div className="absolute w-4/5  top-full left-0 bg-black p-2">
                  {item.subItems.map((subItem, subIdx) => (
                    <a
                      key={subIdx}
                      className="block font-bold cursor-pointer text-center py-2"
                      href={subItem.url}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
