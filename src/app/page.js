"use client";
import Image from "next/image";
import DP from "../../public/dp.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  console.log("homeData", homeData);

  useEffect(() => {
    // Fetch the homeData data from your API
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/home");
        const data = await response.json();
        setHomeData(data[0]); // assuming the API returns { result: true, data: [...] }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader"></div> {/* Loader element */}
        <style jsx>{`
          .loader {
            border: 8px solid #f3f3f3;
            border-top: 8px solid #3498db;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col md:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 ">
        {/* dp */}
        <div className="relative h-1/2 sm:h-1/2 md:h-full md:w-1/2  overflow-hidden ">
          <Image src={DP} alt="" fill className=" object-contain" />
        </div>
        {/* text */}
        <div className="flex sm:h-1/2  flex-col gap-8 items-center justify-center md:h-full md:w-1/2">
          <p className="font-bold md:6xl md:text-4xl  text-2xl">
            {homeData?.title}
          </p>
          <p className="md:text-xl text-sm">{homeData?.des}</p>
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/projects"> View My Work</Link>
            </button>
            {homeData?.resume !== undefined && (
              <button className="p-4 rounded-lg ring-1 ring-black bg-slate-100 text-black">
                <Link
                  href={homeData?.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
