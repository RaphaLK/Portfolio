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
import { Code2, Github, ExternalLink, Layers, ChevronRight } from "lucide-react";

// Project category colors
const categoryColors = {
  systems: {
    cardBorder: "border-blue-300",
    cardHeaderBg: "bg-blue-50",
    badgeBg: "bg-blue-100",
    badgeBorder: "border-blue-200",
    badgeText: "text-blue-800",
  },
  web: {
    cardBorder: "border-green-300",
    cardHeaderBg: "bg-green-50",
    badgeBg: "bg-green-100",
    badgeBorder: "border-green-200",
    badgeText: "text-green-800",
  },
  mobile: {
    cardBorder: "border-purple-300",
    cardHeaderBg: "bg-purple-50",
    badgeBg: "bg-purple-100",
    badgeBorder: "border-purple-200",
    badgeText: "text-purple-800",
  },
  ml: {
    cardBorder: "border-amber-300",
    cardHeaderBg: "bg-amber-50",
    badgeBg: "bg-amber-100",
    badgeBorder: "border-amber-200",
    badgeText: "text-amber-800",
  },
  other: {
    cardBorder: "border-gray-300",
    cardHeaderBg: "bg-gray-50",
    badgeBg: "bg-gray-100",
    badgeBorder: "border-gray-200",
    badgeText: "text-gray-800",
  },
};

// Determine project category based on description
const getProjectCategory = (description) => {
  const desc = description.toLowerCase();
  if (
    desc.includes("c++") ||
    desc.includes("rust") ||
    desc.includes("os development") ||
    desc.includes("assembly") ||
    desc.includes("verilog") ||
    desc.includes("llvm")
  ) {
    return "systems";
  } else if (
    desc.includes("react native") ||
    desc.includes("flutter") ||
    desc.includes("expo")
  ) {
    return "mobile";
  } else if (
    desc.includes("react") ||
    desc.includes("next.js") ||
    desc.includes("node")
  ) {
    return "web";
  } else if (
    desc.includes("python") ||
    desc.includes("tensorflow") ||
    desc.includes("numpy") ||
    desc.includes("scikit") ||
    desc.includes("pandas")
  ) {
    return "ml";
  }
  return "other";
};

const ProjectCard = ({
  ProjectTitle,
  ProjectDescription,
  ProjectInfo,
  ProjectImage,
  ProjectLink,
  GithubLink,
}) => {
  // Convert tech stack string into array for better display
  const techStack = ProjectDescription.split(", ").map((tech) => tech.trim());

  // Determine card category and associated styles
  const category = getProjectCategory(ProjectDescription);
  const colors = categoryColors[category];

  return (
    <Card
      className={`flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 ${colors.cardBorder}`}
    >
      <CardHeader className={`pb-3 ${colors.cardHeaderBg}`}>
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <CardTitle className="text-xl font-bold text-slate-800">
              {ProjectTitle}
            </CardTitle>
          </div>
          <div className="flex gap-2 ml-2">
            {GithubLink && (
              <a
                href={GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
                title="View Source Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {ProjectLink && (
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                title="Visit Project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 flex-grow space-y-4">
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-mono ${colors.badgeBg} ${colors.badgeText} rounded-md border ${colors.badgeBorder}`}
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <div className="group relative">
              <span
                className={`px-2 py-1 text-xs font-mono ${colors.badgeBg} ${colors.badgeText} rounded-md border ${colors.badgeBorder} flex items-center cursor-default`}
              >
                <Layers className="w-3 h-3 mr-1" />
                +{techStack.length - 4}
              </span>

              {/* Tooltip for additional technologies */}
              <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block z-10 bg-white p-2 rounded shadow-md border border-gray-200 w-max max-w-xs">
                <p className="text-xs font-mono text-gray-700">
                  {techStack.slice(4).join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Project description */}
        <p className="text-gray-700 text-sm leading-relaxed">{ProjectInfo}</p>

        {/* Learn more link */}
        {(GithubLink || ProjectLink) && (
          <div className="pt-2">
            <a
              href={GithubLink || ProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium hover:underline flex items-center ${
                category === "systems"
                  ? "text-blue-600 hover:text-blue-800"
                  : category === "web"
                  ? "text-green-600 hover:text-green-800"
                  : category === "mobile"
                  ? "text-purple-600 hover:text-purple-800"
                  : category === "ml"
                  ? "text-amber-600 hover:text-amber-800"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Learn more
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}
      </CardContent>

      {ProjectImage && (
        <CardFooter className="pt-0 pb-4">
          <div className="w-full h-44 relative rounded-md overflow-hidden">
            <Image
              src={ProjectImage}
              alt={`${ProjectTitle} preview`}
              className="rounded-md"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              width={400}
              height={176}
              quality={90}
              priority={false}
            />
          </div>
        </CardFooter>
      )}

      {/* Tiny category indicator at the bottom */}
      <div
        className={`h-1 w-full ${
          category === "systems"
            ? "bg-blue-500"
            : category === "web"
            ? "bg-green-500"
            : category === "mobile"
            ? "bg-purple-500"
            : category === "ml"
            ? "bg-amber-500"
            : "bg-gray-500"
        }`}
      ></div>
    </Card>
  );
};

export default ProjectCard;
