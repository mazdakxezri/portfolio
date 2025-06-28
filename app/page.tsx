"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const DynamicApproach = dynamic(() => import("@/components/Approach"), { ssr: false });

const Home = () => {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <DynamicApproach />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
