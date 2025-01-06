"use client";

import { links } from "@/constants/navBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen(prev => !prev)}
      />
      {open && (
        <div className="absolute bg-black w-full top-20 left-0 text-white h-[calc(100vh-20px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          {links.map(link => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
