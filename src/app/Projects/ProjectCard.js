import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Code2, Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
  ProjectTitle,
  ProjectDescription,
  ProjectInfo,
  ProjectImage,
  ProjectLink,
  GithubLink,
}) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{ProjectTitle}</CardTitle>
            <CardDescription className="mt-1 flex items-center text-xs">
              <Code2 className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
              <span className="text-gray-600 font-mono tracking-tight">
                {ProjectDescription}
              </span>
            </CardDescription>
          </div>
          <div className="flex gap-2">
            {GithubLink && (
              <a
                href={GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {ProjectLink && (
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-700 text-sm leading-relaxed">{ProjectInfo}</p>
      </CardContent>

      {ProjectImage && (
        <CardFooter className="pt-0 pb-4">
          <div className="relative w-full h-32 overflow-hidden rounded-md border border-gray-100">
            <Image
              src={ProjectImage}
              className="object-cover object-center transition-all hover:scale-105"
              alt={`${ProjectTitle} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
