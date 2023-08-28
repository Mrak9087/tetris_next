import { TLink } from "@/helpers/types";
import Link from "next/link";
import React from "react";

interface IHeader {
  links: TLink[];
}

const Header = ({ links }: IHeader) => {
  return (
    <header className="w-full flex justify-end pr-5 pt-2 gap-2 text-sm lg:text-lg font-bold bg-black border-b-gray-400 border-b-2">
      {links.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.href}
            scroll={false}
            className="hover:underline tracking-wider px-5 py-2 bg-gray-400 rounded-t-xl"
          >
            {item.caption}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
