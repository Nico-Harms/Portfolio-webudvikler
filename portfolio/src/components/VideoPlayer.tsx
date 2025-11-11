"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface VideoPlayerProps {
  video: string;
  videoType: "vimeo" | "video" | string;
  vimeoHash?: string;
  isMobile: boolean;
  title: string;
}

export default function VideoPlayer({
  video,
  videoType,
  vimeoHash,
  isMobile,
  title,
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleLoad = () => {
    setHasLoaded(true);
  };

  useEffect(() => {
    if (hasLoaded) {
      // Keep loading animation visible for at least 1.5 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasLoaded]);

  return (
    <div className="relative w-full">
      {isLoading && (
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center ${
            isMobile ? "rounded-[2rem]" : "rounded-xl"
          }`}
        >
          <Loader2 className="w-12 h-12 text-[#BD8E2A] animate-spin" />
        </div>
      )}

      {/* Video Container - Hidden while loading */}
      <div
        className={`relative mx-auto overflow-hidden transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${
          isMobile
            ? "max-w-[280px] rounded-[2rem] bg-[#585858] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),_0_30px_60px_-30px_rgba(0,0,0,0.3)] ring-1 ring-neutral-800/10"
            : "max-w-[1000px] rounded-2xl bg-transparent"
        }`}
      >
        <div
          className={`${isMobile ? "aspect-[9/19]" : "aspect-video"} relative`}
        >
          {videoType === "vimeo" ? (
            <iframe
              src={`https://player.vimeo.com/video/${video}${
                vimeoHash ? `?h=${vimeoHash}&` : "?"
              }badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&background=1`}
              className={`rounded-[2em] border-[5px] border-[#585858] ${
                isMobile ? "rounded-[2rem]" : "rounded-xl"
              } w-full h-full absolute inset-0`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title={title}
              frameBorder="0"
              onLoad={handleLoad}
            />
          ) : (
            <video
              className={`w-full h-full ${
                isMobile ? "rounded-[2rem] border-[1px]" : "rounded-xl"
              } absolute inset-0`}
              controls
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={handleLoad}
            >
              <source src={video} type="video/mp4" />
              <source src={video} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
