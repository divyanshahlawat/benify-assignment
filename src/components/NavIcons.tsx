"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProfile = () => {
    setIsProfileOpen(prev => !prev);
  };
  return (
    <div className="flex gap-4 items-center xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="cursor-pointer mt-2">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/cart.png"
        alt="cart"
        width={22}
        height={22}
        className="cursor-pointer relative"
        onClick={() => setIsCartOpen(prev => !prev)}
      />

      <div>
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center"></div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
