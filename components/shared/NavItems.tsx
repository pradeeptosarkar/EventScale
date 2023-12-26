"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive
                ? "text-primary-500 font-bold"
                : "text-gray-700 hover:text-primary-500"
            } flex-center p-4 whitespace-nowrap border-b-2 border-transparent hover:border-primary-500 transition-all duration-300 rounded-md ${
              isActive
                ? "bg-gradient-to-r from-primary-200 to-primary-300"
                : "hover:bg-gray-100"
            }`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
