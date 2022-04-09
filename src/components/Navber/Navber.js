import React, { useState } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navber = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", link: "/Home" },
    { id: 2, name: "Products", link: "/Products" },
    { id: 3, name: "Review", link: "/Review" },
    { id: 4, name: "DashBoard", link: "/DashBoard" },
    { id: 6, name: "Search", link: "/Search" },
    { id: 5, name: "Login", link: "/Login" },
  ];

  return (
    <nav className="bg-black h-full">
      <div
        onClick={() => setOpen(!open)}
        className="h-8 w-8 md:hidden text-white"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex md:h-12 items-center md:bg-black justify-center font-bold absolute md:static duration-1000 ease-in ${open ? 'top-8' : 'top-[-120px]' }
        `}
      >
        {routes.map((route) => (
          <HeaderLink key={route.id} route={route}></HeaderLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
