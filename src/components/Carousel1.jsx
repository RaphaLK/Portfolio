"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  {
    src: "/Assets/ImagesAbout/Photography/Photography.png",
    alt: "Photography showcase",
  },
  { src: "/Assets/ImagesAbout/Photography/Photo1.png", alt: "Macro shot" },
  { src: "/Assets/ImagesAbout/Photography/Photo2.png", alt: "Portrait session" },
  {
    src: "/Assets/ImagesAbout/Photography/Photo3.png",
    alt: "Creative composition",
  },
  { src: "/Assets/ImagesAbout/Photography/Photo4.png", alt: "Headshot" },
];

export default function Carousel1() {
  return (
    <Carousel className="h-full w-full" opts={{ loop: true }}>
      <CarouselContent className="h-full">
        {photos.map((photo) => (
          <CarouselItem key={photo.src} className="h-full">
            <div className="relative h-44 w-full overflow-hidden rounded-lg border border-line">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 border-line bg-surface/80 text-ink hover:bg-surface" />
      <CarouselNext className="right-2 border-line bg-surface/80 text-ink hover:bg-surface" />
    </Carousel>
  );
}
