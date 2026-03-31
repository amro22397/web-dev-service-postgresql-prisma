"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

import axios from "axios";

import { Loader2 } from "lucide-react";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description?: string | null;
  technologies?: string | null;
  technologiesArray: string[];
  link?: string | null;
  date?: string | null;
  category?: string | null;
  imageUrls: string[];
  youtubeLink?: string | null;
};

const ProjectsFilter = (
  {
    // allProjects,
    // frontEndProjects,
    // fullStackProjects,
  }: {
    // allProjects: Project[];
    // frontEndProjects: Project[];
    // fullStackProjects: Project[];
  },
) => {
  // const locale = useLocale();

  const [projects, setProjects] = useState([]);

  const [category, setCategory] = useState("Fullstack");

  const [pageLoading, setPageLoading] = useState(false);

  const locale = useLocale();

  const projectPage = useTranslations("ProjectsPage");

  const getProject = async () => {
    setPageLoading(true);

    try {
      const res = await axios.get(
        `/api/get-projects?locale=${locale}&category=${category}`,
      );

      setProjects(
        res.data.data.filter(
          (item: Project) =>
            item.id !== "2cbd18f4-06f8-48b0-b3c7-cd994e94938c" &&
            item.id !== "4d049ffb-afe9-46c2-998f-740cfdc1fe41",
        ),
      );
    } catch (error) {
      console.log(`Client error getting projects: ${error}`);

      alert(`Client error getting projects: ${error}`);

      setPageLoading(false);
    }

    setPageLoading(false);
  };

  // const filteredProjects = useMemo<Project[]>(() => {
  //   return projects.filter(
  //     (item: Project) =>
  //       item.id !== "2cbd18f4-06f8-48b0-b3c7-cd994e94938c" &&
  //       item.id !== "4d049ffb-afe9-46c2-998f-740cfdc1fe41",
  //   );
  // }, [projects]);

  // const filteredProjects = projects.filter(
  //   (item: Project) =>
  //     item.id !== "2cbd18f4-06f8-48b0-b3c7-cd994e94938c" &&
  //     item.id !== "4d049ffb-afe9-46c2-998f-740cfdc1fe41",
  // );

  useEffect(() => {
    getProject();
  }, [locale, category]);

  if (pageLoading) {
    return (
      <div className="flex items-center justify-center min-h-[54vh]">
        <Loader2 className="animate-spin text-center" />
      </div>
    );
  }

  return (
    <>
      <div
        className="flex-row justify-start gap-7 items-center
       text-xl max-sm:mx-2"
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="flex flex-row gap-5">
          <div id="filter-key" onClick={() => setCategory("All")}>
            {projectPage("All")}
          </div>

          <div id="filter-key" onClick={() => setCategory("Fullstack")}>
            {projectPage("Fullstack")}
          </div>

          <div id="filter-key" onClick={() => setCategory("Frontend")}>
            {projectPage("Frontend")}
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-7 mt-10
max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3"
      >
        {projects.length > 0 &&
          projects.map((project: any, index: number) => (
            <Link key={index} href={`/${locale}/projects/${project.id}`}>
              <div
                key={index}
                className="flex flex-col justify-start items-center
    bg-indigo-200 dark:bg-neutral-500 gap-3 shadow-lg mb-3 transform hover:scale-[1.01] transition-all duration-300 ease-in-out
    cursor-pointer h-[460px] max-w-[370px] mx-auto max-sm:max-w-full"
                id="project-card"
              >
                <Image
                  src={project.imageUrls[0]}
                  alt={project.title}
                  className="projects-image"
                  width={420}
                  height={200}
                />

                <h2 className="text-2xl font-semibold text-slate-700 dark:text-amber-500">
                  {project.title}
                </h2>

                <button
                  className="bg-indigo-600 dark:bg-neutral-700 px-[22px] py-[3.35px] border-solid
                 text-white cursor-auto font-semibold"
                >
                  {project.category}
                </button>

                <div
                  className="flex flex-col justify-between items-center
             mb-4 gap-4 px-6 py-2 overflow-hidden hover:overflow-auto"
                >
                  <p
                    className="text-sm text-black dark:text-white text-center
                "
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default ProjectsFilter;
