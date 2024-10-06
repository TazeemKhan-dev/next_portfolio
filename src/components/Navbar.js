"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setopen] = useState(false);
  useEffect(() => {
    //  const connection = createConnection(serverUrl, roomId);
    //  connection.connect();
    //  return () => {
    //    connection.disconnect();
    //  };
    // getUser();
  }, []);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
      <div className="lg:flex w-1/2">
        <Link
          href="/"
          className="text-sm bg-cyan-600 rounded-md p-1 font-semibold items-center justify-center"
        >
          <span className="text-white mr-1">Tazeem</span>
          <span className=" text-white w-12 h-10 rounded text-black justify-center items-center ">
            Khan
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/2 justify-end">
        {links.map((item) => (
          <NavLinks links={item} key={item?.title} />
        ))}
      </div>
      {/* reponsive menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setopen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* {open && (
          <div className="absolute w-screen h-screen bg-black top-0 left-0 flex flex-col gap-4 justify-center items-center  text-4xl text-white z-40">
            {links.map((item) => (
              <Link
                href={item?.url}
                key={item?.title}
                onClick={() => setopen(false)}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        )} */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((item) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={item.title}
              >
                {/* <Link href={link.url}>{link.title}</Link> */}
                <NavLinks links={item} key={item?.title} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
