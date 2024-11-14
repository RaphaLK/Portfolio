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

// Teamwork
const Carousel2 = () => {
  return (
    <Carousel className="w-full max-w-64 flex mt-4 max-h-48 ml-20">
      <CarouselContent className="rounded-md">
        <CarouselItem>
          <Card>
            <Image
              className="rounded-md"
              src={"/Assets/ImagesAbout/Teamwork/TeamPhoto.JPG"}
              alt={"Oops!"}
              height={300}
              width={300}
            />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <Image
              className="rounded-md"
              src={"/Assets/ImagesAbout/Photography/Photo1.png"}
              alt={"Oops!"}
              height={300}
              width={300}
            />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <Image
              className="rounded-md"
              src={"/Assets/ImagesAbout/Photography/Photo2.png"}
              alt={"Oops!"}
              height={300}
              width={300}
            />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <Image
              className="rounded-md"
              src={"/Assets/ImagesAbout/Photography/Photo3.png"}
              alt={"Oops!"}
              height={300}
              width={300}
            />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <Image
              className="rounded-md"
              src={"/Assets/ImagesAbout/Photography/Photo4.png"}
              alt={"Oops!"}
              height={300}
              width={300}
            />
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carousel2;
