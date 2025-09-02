"use client";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import Button from "./button";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  const handleUnmute = () => {
    const video = videoRef.current;
    if (video && !isUnmuted) {
      video.muted = false;
      setIsUnmuted(true);
    }
  };


  useEffect(() => {
    const video = videoRef.current;
    if (video && isUnmuted) {
      const maxScroll = 800;
      const expansionProgress = Math.min(scrollY / maxScroll, 1);
      let volume = 0.0 + (1 - 0.01) * expansionProgress;

      if (transitionProgress !== 0) {
        volume = Math.max(0, 1 - transitionProgress * 2);
      }

      video.volume = volume;
    }
  }, [scrollY, isUnmuted, transitionProgress]);


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = 0.0;
      video.play().catch(console.error);
    }
  }, []);


  const videoStyles = useMemo(() => {
    const maxScroll = 800;
    const bufferScroll = 1000;
    const transitionScroll = 1600;

    const expansionProgress = Math.min(scrollY / maxScroll, 1);
    const bufferProgress = Math.max(
      0,
      Math.min((scrollY - maxScroll) / (bufferScroll - maxScroll), 1)
    );
    setTransitionProgress(
      Math.max(0, Math.min((scrollY - bufferScroll) / (transitionScroll - bufferScroll), 1))
    );

    const scale = 0.85 + (1.38 - 0.85) * expansionProgress;
    const borderRadius = 24 * (1 - expansionProgress);
    const shadow = 24 * (1 - expansionProgress);

    const baseTop = 50;
    const finalTop = -230;
    const topPosition = baseTop + (finalTop - baseTop) * transitionProgress * 0.25;

    return {
      transform: `translate(-50%, -50%) scale(${scale})`,
      borderRadius: `${borderRadius}px`,
      boxShadow: `0 0 ${shadow * 5}px rgba(255, 255, 255, 0.4)`,
      width: "1200px",
      height: "600px",
      top: `${topPosition}%`,
    };
  }, [scrollY]);


  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl p-8 text-center">
        This experience is designed for desktop. <br />
        Please visit on a larger screen.
      </div>
    );
  }

  return (
    <div className="font-sans min-h-[100vh] overflow-none bg-black to-blue-700">
      <div
        className="fixed left-1/2 will-change-transform"
        style={{
          ...videoStyles,
          top: videoStyles.top,
          transition:
            "transform 200ms ease-out, border-radius 200ms ease-out, box-shadow 200ms ease-out",
        }}
      >
        <div className="relative w-full h-full">
          {!isUnmuted && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 rounded-xl"
              style={{ background: "rgba(134, 140, 134, 0.12)" }}
              onClick={handleUnmute}
            />
          )}

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full rounded-xl object-cover"
            style={{
              pointerEvents: "none",
            }}
          >
            <source
              src="/Walk on Water Trailer Correct Aspect Ratio.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        className="h-screen flex items-center justify-center"
        style={{ marginTop: "223vh" }}
      >
        <div className="w-full h-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/Walk on Water Launch Clip.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateX(-5vw)" }}
          >
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
