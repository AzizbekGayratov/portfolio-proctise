"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start justify-self-center"
      >
        <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90DFAB] c to-[#FD7256]">
            Hello, I&apos;m
          </span>
          <br />
          <TypeAnimation
            sequence={["Azizbek", 2000, "Web Developer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptuous.
        </p>
        <div className="">
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-[#90DFAB] to-[#FD7256] hover:bg-slate-200 text-white"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#90DFAB] to-[#FD7256] hover:bg-slate-800 text-white mt-3"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("Link copied");
            }}
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-colors">
              Copy link
            </span>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        <Image src="/user.png" width={400} height={400} alt="user" />
      </motion.div>
    </div>
  );
}
