import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

// Photography carousel with enhanced styling
const Carousel1 = () => {
  const photos = [
    { src: "/Assets/ImagesAbout/Photography/Photography.png", alt: "Professional photography showcase" },
    { src: "/Assets/ImagesAbout/Photography/Photo1.png", alt: "Nature photography - macro shot" },
    { src: "/Assets/ImagesAbout/Photography/Photo2.png", alt: "Portrait photography session" },
    { src: "/Assets/ImagesAbout/Photography/Photo3.png", alt: "Creative photography composition" },
    { src: "/Assets/ImagesAbout/Photography/Photo4.png", alt: "Professional headshot photography" },
  ];

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <Carousel className="relative w-full max-w-64 flex mt-4 max-h-48 bg-white rounded-lg">
        <CarouselContent className="rounded-md">
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative group/item">
                  <Image
                    className="rounded-md transform group-hover/item:scale-110 transition-transform duration-500"
                    src={photo.src}
                    alt={photo.alt}
                    height={300}
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-md"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    📸 Photography Collection
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-purple-100 hover:border-purple-300 transition-colors duration-200" />
        <CarouselNext className="hover:bg-purple-100 hover:border-purple-300 transition-colors duration-200" />
      </Carousel>
    </div>
  );
};

export default Carousel1;
