"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { icons } from "lucide-react";
import React, { useEffect, useState } from "react";

type IconName = keyof typeof icons;

interface SliderItem {
  iconName?: IconName;
  image?: string;
  text: string;
  alt?: string;
}

interface SliderProps {
  items: SliderItem[];
  title: string;
  autoplaySpeed?: number; // Speed of autoplay in ms
}

export const Slider = ({ items, title, autoplaySpeed = 8000 }: SliderProps) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: false,
      duration: autoplaySpeed,
    },
    [
      Autoplay({
        delay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
      }),
    ]
  );

  const [itemsPerView, setItemsPerView] = useState(6);

  const updateItemsPerView = () => {
    if (window.innerWidth < 1023) {
      setItemsPerView(3);
    } else {
      setItemsPerView(6);
    }
  };

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const renderIcon = (iconName: IconName) => {
    const Icon = icons[iconName];
    return <Icon className="w-8 h-8" />;
  };

  return (
    <div className="w-full distance-top">
      <div className="wrapper mx-auto">
        <div className="flex gap-10 items-center max-lg:flex-col">
          <h3 className="text-2xl tracking-tighter lg:max-w-xl font-regular text-left">
            {title}
          </h3>
          <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full pointer-events-none"></div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex ">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-none px-2 bg-slider-item dark:bg-slider-item-dark`}
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="relative group">
                      <div className="flex rounded-md aspect-square dark:bg-white bg-muted items-center justify-center p-2 transition-all duration-300 group-hover:blur-sm">
                        {item.iconName && renderIcon(item.iconName)}
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.alt || item.text}
                            width={70}
                            height={70}
                            className="object-contain max-lg:w-14 max-lg:h-14"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium bg-background/80 p-2 rounded-md">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
