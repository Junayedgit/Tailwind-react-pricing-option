import React from "react";
import Link from "./Link";
const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Projects", path: "/projects" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-4 justify-center">
        {navigationData.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
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
