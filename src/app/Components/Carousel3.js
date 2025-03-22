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
const Carousel3 = () => {
  return (
    <Carousel className="w-full max-w-64 flex mt-4 max-h-48 ml-20">
      <CarouselContent className="rounded-md">
        <CarouselItem>
          <Card>
            <Image
              className="rounded-md"
              src={"/Assets/ICPC/ICPC1.jpg"}
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
              src={"/Assets/ICPC/ICPC2.jpg"}
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

export default Carousel3;
