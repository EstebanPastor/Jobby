"use client";

import { useState } from "react";

import Link from "next/link";
import { NavLinks } from "@/constants";

import { MdClose, MdAdsClick } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import Button from "../button/Button";

const NavBar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="py-5 bg-transparent relative top-0 z-10 w-full">
      <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-1">
            <h1 className="text-black font-semibold uppercase text-xl">
              Jobby
            </h1>
            <MdAdsClick className="text-purple-600 text-3xl" />
          </div>
        </Link>
        <ul className="flex gap-16 items-center max-md:hidden">
          {NavLinks.map((link, index) => (
            <Link href={link.route} key={index}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
        <div className="max-md:flex justify-center items-center gap-10">
          <Link href={"/create"}>
            <Button>Post a Job</Button>
          </Link>
          <div
            className="md:hidden text-3xl cursor-pointer text-black"
            onClick={handleOpenMobileMenu}
          >
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>
          {openMobileMenu && (
            <ul className="md:hidden bg-purple-600 absolute top-14 right-5 px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 shadow-md">
              {NavLinks.map((link, index) => (
                <Link href={link.route} key={index}
                onClick={() => setOpenMobileMenu(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
