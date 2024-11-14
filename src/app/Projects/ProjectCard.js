import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
const ProjectCard = ({
  ProjectTitle,
  ProjectDescription,
  ProjectInfo,
  ProjectImage,
}) => {
  return (
    <Card className="flex flex-col m-10 min-w-96">
      <CardHeader>
        <CardTitle>{ProjectTitle}</CardTitle>
        <CardDescription>{ProjectDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-between ">
        <div>
          <p className="">{ProjectInfo}</p>
        </div>
        <div className="flex-row mt-4">
          <Image src={ProjectImage} className="rounded-md shadow-md" width={50} height={50} alt={""} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
