"use client";
import React from "react";
import { motion } from "framer-motion";

const GridGlobe = () => {
  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="flex items-center justify-center w-full h-full text-center text-lg text-gray-500 dark:text-gray-300">
          Globe visualization is unavailable.
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;
