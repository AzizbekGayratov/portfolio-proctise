"use client";
import React from "react";

export default function AboutTitles({ aboutList, isActive, setIsActive }) {
  const aboutTitles = Object.keys(aboutList);
  return (
    <ul className="flex flex-row justify-start gap-4">
      {aboutTitles.map((title, index) => (
        <li
          key={index}
          onClick={() => setIsActive(title)}
          className={`cursor-pointer hover:opacity-80 ${
            isActive === title ? "text-[#FD7256]" : ""
          }`}
        >
          {title}
          {isActive === title && (
            <div className="w-full h-1 bg-[#FD7256] mt-1" />
          )}
        </li>
      ))}
    </ul>
  );
}
