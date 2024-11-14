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

// Photography
const Carousel1 = () => {
  return (
    <Carousel className="w-full max-w-64 flex mt-4 max-h-48">
      <CarouselContent className="rounded-md">
        <CarouselItem>
          <Card>
            <Image
              className="rounded-md"
              src={"/Assets/ImagesAbout/Photography/Photography.png"}
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

export default Carousel1;
