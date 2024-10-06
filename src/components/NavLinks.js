"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ links }) => {
  const path = usePathname();
  // console.log("links", links);
  // console.log("links?.url", links?.url);
  // console.log("links?.title", links?.title);

  return (
    <div
      className={`rounded p-1 ${path === links?.url && "bg-black text-white"}`}
    >
      <Link href={links?.url}>{links?.title}</Link>
    </div>
  );
};

export default NavLinks;
