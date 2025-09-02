"use client";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import Button from "./button";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [transitionProgress, setTransitionProgress] = useState(0);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle clicking the gradient to unmute
  const handleUnmute = () => {
    const video = videoRef.current;
    if (video && !isUnmuted) {
      video.muted = false;
      setIsUnmuted(true);
    }
  };

  // Control volume based on scroll position
  useEffect(() => {
    const video = videoRef.current;
    if (video && isUnmuted) {
      const maxScroll = 800;
      const expansionProgress = Math.min(scrollY / maxScroll, 1);
      
      // Volume ramps from 0.01 (1%) to 1 (100%) as you scroll
      let volume = 0.00 + (1 - 0.01) * expansionProgress;

      if (transitionProgress != 0){
        volume = Math.max(0,1 - (transitionProgress * 2));
      }
      
      video.volume = volume;
    }
  }, [scrollY, isUnmuted]);

  // Ensure video autoplays on load and reload
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set initial volume to 1% (will be controlled by scroll)
      video.volume = 0.00;
      
      // Try to autoplay (muted)
      video.play().catch(console.error);
    }
  }, []);

  // Memoize calculations to prevent unnecessary recalculations
  const videoStyles = useMemo(() => {
    const maxScroll = 800; 
    const bufferScroll = 1000; // Buffer period from 800px to 1200px
    const transitionScroll = 1600; // Video moves up from 1200px to 1600px
    
    const expansionProgress = Math.min(scrollY / maxScroll, 1);
    const bufferProgress = Math.max(0, Math.min((scrollY - maxScroll) / (bufferScroll - maxScroll), 1));
    setTransitionProgress(Math.max(0, Math.min((scrollY - bufferScroll) / (transitionScroll - bufferScroll), 1)));
    

    const scale = 0.85 + (1.38 - 0.85) * expansionProgress;
    const borderRadius = 24 * (1 - expansionProgress);
    const shadow = 24 * (1 - expansionProgress);
    
    // Calculate vertical position - starts at 50%, moves up during transition
    const baseTop = 50;
    const finalTop = -230; // Video moves to 20% from top
    const topPosition = baseTop + (finalTop - baseTop) * transitionProgress * 0.25;
    
    return {
      transform: `translate(-50%, -50%) scale(${scale})`,
      borderRadius: `${borderRadius}px`,
      boxShadow: `0 0 ${shadow * 5}px rgba(255, 255, 255, 0.4)`,
      width: '1200px',  
      height: '600px',
      top: `${topPosition}%`
    };
  }, [scrollY]);

  return (
    <div className="font-sans min-h-[100vh] bg-black to-blue-700">
      <div 
        className="fixed left-1/2 will-change-transform"
        style={{
          ...videoStyles,
          top: videoStyles.top,
          transition: 'transform 200ms ease-out, border-radius 200ms ease-out, box-shadow 200ms ease-out'
        }}
      >
        <div className="relative w-full h-full">
          {/* Gray gradient overlay */}
          {!isUnmuted && (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 rounded-xl"
              style={{ background: 'rgba(134, 140, 134, 0.12)' }}
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
              pointerEvents: 'none'
            }}
          >
            <source src="/Walk on Water Trailer Correct Aspect Ratio.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Second page content */}
      <div className="h-screen flex items-center justify-center" style={{ marginTop: '223vh' }}>
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
          
          {/* Button overlay - centered on video */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateX(-5vw)' }}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}
