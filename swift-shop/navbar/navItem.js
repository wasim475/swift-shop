"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavItem = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "About us", path: "/about-us" },
    { name: "Contact us", path: "/contact-us" },
  ];

  return (
    <ul className="flex gap-x-10 py-2">
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={`${
              pathname === link.path ? "font-bold text-blue-500" : "font-normal text-gray-700"
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
