import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Projects", path: "/projects" },
  { id: 5, name: "Contact", path: "/contact" },
];
const Links = navigationData.map((route) => (
  <Link route={route} key={route.id}></Link>
));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 ">
      <span className="flex gap-4" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden absolute ${
            open ? "top-10" : "-top-48"
          } duration-1000 z-10 bg-white p-4 rounded-lg shadow-lg text-black`}
        >
          {Links}
        </ul>

        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex gap-4 hidden">{Links}</ul>
      <button className="btn">Sign In</button>
    </nav>

    // <nav>
    //   <ul className="flex gap-4 justify-center">
    //     {navigationData.map((route) => (
    //       <li>
    //         <a href={route.path}>{route.name}</a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/About">About</a>
    //     </li>
    //     <li>
    //       <a href="/Blog">Blog</a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavBar;
