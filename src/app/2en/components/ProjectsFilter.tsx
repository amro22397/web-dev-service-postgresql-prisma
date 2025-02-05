"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectsFilter = ({
  allProjects,
  frontEndProjects,
  fullStackProjects,
}: {
  allProjects: any;
  frontEndProjects: any;
  fullStackProjects: any;
}) => {
  const [projects, setProjects] = useState(fullStackProjects);

  return (
    <>
      <div
        className="flex-row justify-start gap-7 items-center
       text-xl max-sm:mx-2"
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="flex flex-row gap-5">
          <div id="filter-key" onClick={() => setProjects(allProjects)}>
            All
          </div>

          <div id="filter-key" onClick={() => setProjects(fullStackProjects)}>
            Fullstack
          </div>

          <div id="filter-key" onClick={() => setProjects(frontEndProjects)}>
            Frontend
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-7 mt-10
max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3"
      >
        {projects.length > 0 &&
          projects.map((project: any, index: number) => (
            <Link key={index} href={`/en/projects/${project._id}`}>
              <div key={index} className="projects-all-div" id="project-card">
                <Image
                  src={project.imageUrls[0]}
                  alt={project.title}
                  className="projects-image"
                  width={420}
                  height={200}
                />

                <h2 className="text-2xl font-semibold text-slate-700">
                  {project.title}
                </h2>

                <button
                  className="bg-indigo-600 dark:bg-indigo-500 px-[22px] py-[3.35px] border-solid
                 text-white cursor-auto font-semibold"
                >
                  {project.category}
                </button>

                <div className="projects-all-description">
                  <p
                    className="text-sm text-black
                "
                    style={{ fontFamily: "sans-serif" }}
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
