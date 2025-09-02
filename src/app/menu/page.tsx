"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [activeVideo, setActiveVideo] = useState<null | "behind" | "final" | "deleted">(null);

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center overflow-none"
      style={{ aspectRatio: "1920/1080" }}
    >
      <div className="w-full h-full relative overflow-none">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src="/Walk on Water Index Clip.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navigation Links */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Logo (use Link for internal route) */}
          <Link
            href="/"
            className="absolute top-8 left-8 z-10 text-white font-['AppleGaramond'] text-2xl hover:text-gray-400 border-b-1 py-2 border-gray-300"
          >
            Walk on Water
          </Link>

        <div className="absolute top-22 left-8 flex flex-col justify-start items-start ">
          {/* Menu links */}
          <Link
            href="/info"
            className="text-white text-base font-['AppleGaramond'] hover:text-gray-400 transition-colors cursor-pointer"
          >
            info & updates
          </Link>

          {/* Final Film (toggle) */}
          <button
            onClick={() =>
              setActiveVideo(activeVideo === "final" ? null : "final")
            }
            className="text-white text-base font-['AppleGaramond'] hover:text-gray-400 transition-colors cursor-pointer"
          >
            final film
          </button>

          {/* Deleted Scenes (toggle) */}
          <button
            onClick={() =>
              setActiveVideo(activeVideo === "deleted" ? null : "deleted")
            }
            className="text-white text-base font-['AppleGaramond'] hover:text-gray-400 transition-colors cursor-pointer"
          >
            deleted scenes
          </button>

          {/* Behind the Scenes (toggle) */}
          <button
            onClick={() =>
              setActiveVideo(activeVideo === "behind" ? null : "behind")
            }
            className="text-white text-base font-['AppleGaramond'] hover:text-gray-400 transition-colors cursor-pointer"
          >
            behind the scenes
          </button>
          <div className="flex mt-4 flex-row items-center justify-center gap-2">
                    {/* Socials */}
                    <a
            href="https://www.instagram.com/walkonwaterfilm/"
            target="_blank"
            className="z-10"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a
            href="https://www.imdb.com/title/tt34098412/?ref_=nm_ov_bio_lk"
            target="_blank"
            className="z-10"
            rel="noopener noreferrer"
          >
            <Image
              src="/imdb-svgrepo-com.svg"
              alt="IMDb"
              width={20}
              height={20}
              className="w-5 h-5 invert"
            />
          </a>
          </div>
        </div>
         
          {/* AnimatePresence for video players */}
          <AnimatePresence>
            {activeVideo === "behind" && (
              <motion.div
                key="behind"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute"
                style={{ top: "20%", left: "40%" }}
              >
                <div className="w-[800px] h-[400px] rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/1114957195?h=c719e5b8ad&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="rounded-2xl shadow-lg w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title="Walk on Water Behind the Scenes Video"
                  ></iframe>
                </div>
              </motion.div>
            )}

            {activeVideo === "final" && (
              <motion.div
                key="final"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute"
                style={{ top: "25%", left: "40%" }}
              >
                <div className="w-[800px] h-[400px] rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/1114957934?badge=0&autopause=0&player_id=0&app_id=58479"
                    className="rounded-2xl shadow-lg w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title="Walk on Water | Short Film"
                  ></iframe>
                </div>
              </motion.div>
            )}

            {activeVideo === "deleted" && (
              <motion.div
                key="deleted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute"
                style={{ top: "05%", left: "45%", width: "25%" }}
              >
                <div className="grid grid-rows-3 gap-4">
                  {/* Clip 1 */}
                  <div className="w-full aspect-auto rounded-2xl shadow-lg overflow-hidden">
                    <iframe
                      src="https://player.vimeo.com/video/1114960256?h=27d762a00d&badge=0&autopause=0&player_id=0&app_id=58479"
                      className="rounded-2xl shadow-lg w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      title="Walk on Water Jump Clip"
                    ></iframe>
                  </div>

                  {/* Clip 2 */}
                  <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden">
                    <iframe
                      src="https://player.vimeo.com/video/1114958813?h=b0efadd119&badge=0&autopause=0&player_id=0&app_id=58479"
                      className="rounded-2xl shadow-lg w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      title="Walk on Water Alternate Closet Clip"
                    ></iframe>
                  </div>

                  {/* Clip 3 */}
                  <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden">
                    <iframe
                      src="https://player.vimeo.com/video/1114959089?badge=0&autopause=0&player_id=0&app_id=58479"
                      className="rounded-2xl shadow-lg w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      title="Walk on Water Crying at Sunset"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact */}
        <div
          className="absolute text-white text-sm font-['AppleGaramond'] z-10"
          style={{ bottom: "2%", right: "12%" }}
        >
          Contact: chzzou92@gmail.com
        </div>
      </div>
    </div>
  );
}
