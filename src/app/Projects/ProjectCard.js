import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
const ProjectCard = ({ProjectTitle, ProjectDescription, ProjectInfo}) => {
  return (
    <Card className="m-10 min-w-96">
      <CardHeader>
        <CardTitle>{ProjectTitle}</CardTitle>
        <CardDescription>{ProjectDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{ProjectInfo}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
