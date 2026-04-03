import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const photos = [
  { src: "/Assets/ImagesAbout/Photography/Photography.png", alt: "Professional photography showcase" },
  { src: "/Assets/ImagesAbout/Photography/Photo1.png", alt: "Nature photography - macro shot" },
  { src: "/Assets/ImagesAbout/Photography/Photo2.png", alt: "Portrait photography session" },
  { src: "/Assets/ImagesAbout/Photography/Photo3.png", alt: "Creative photography composition" },
  { src: "/Assets/ImagesAbout/Photography/Photo4.png", alt: "Professional headshot photography" },
];

const Carousel1 = () => {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="h-full">
        {photos.map((photo, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative h-40 w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default Carousel1;
