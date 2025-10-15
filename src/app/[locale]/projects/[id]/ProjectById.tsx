"use client";

import React from "react";
import SwiperImage from "../../../../components/SwiperImage";
// import { FaArrowRight } from "react-icons/fa";
// import { IoMdArrowBack } from "react-icons/io";

import Link from "next/link";
// import Image from "next/image";
// import WorkSliderBtns from "../../../../components/WorkSliderBtns";
// import exp from "constants";

// import { title } from "process";

// import { projects } from "../../../../public/Constants";

import { useParams } from "next/navigation";
// import mongoose from "mongoose";
// import { Project } from "../../../../models/project";

import EditDeleteButtons from "../../../../components/EditDeleteButtons";
// import axios from "axios";
// import useSWR from "swr";
import { useTranslations } from "next-intl";

const ProjectById = ({
  // /*id*/ email,
  projects,
  locale,
}: {
  // id?: string | undefined,
  // email?: string | null | undefined;
  jProject?: any;
  projects?: any;
  locale?: string | null | undefined;
}) => {
  const params = useParams<any>();

  const id = params.id;

  const project = projects.find((project: any) => project.id === id);
  const jProject = JSON.parse(JSON.stringify(project));

  console.log(jProject);

  const projectById = useTranslations("ProjectByIdPage");

  // const [jProject, setJProject] = useState(null);

  // const fetchProjectById = async() => {
  //     await axios.get(`/api/project?id=${id}`)
  //     .then(res => {
  //         console.log(res.data);
  //         setJProject(res.data.data);
  //         console.log(jProject)
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })

  // }

  // useEffect(() => {
  //     fetchProjectById();
  // }, []);

  return (
    <div
      className="container flex flex-col max-xl:items-center justify-center mx-auto
        mt-9 mb-40 overflow-x-hidden"
    >
      <div
        className="flex flex-col xl:flex-row xl:gap-[30px]
            gap-12"
      >
        <pre className="hidden">{JSON.stringify(jProject, null, 2)}</pre>
        <pre className="hidden">{id}</pre>

        <div
          className=" xl:h-[460px] flex flex-col
                mx-0 max-xl:mx-4 xl:w-full max-w-full "
        >
          <div
            className={`flex flex-row items-center justify-between
                    mb-10 max-xl:mt-4 ${locale === "ar" && "sm:flex-row flex-col max-sm:gap-y-4 items-start"}`}
                    
          >
            <Link href={`/${locale}/projects`}>
              <button
                className={`bg-yellow-500 px-4 py-[4px] text-orange-800 rounded-sm
                font-semibold hover:bg-yellow-400 active:bg-yellow-300 transition-all duration-100
                flex flex-row items-center gap-2 ${locale === "ar" && ""}`}
              >
                {locale === "en" && (
                  <i
                    className="fa-solid fa-arrow-left
                        mt-[2px]"
                  ></i>
                )}

                {locale === "ar" && (
                  <i
                    className="fa-solid fa-arrow-right
                        mt-[2px]"
                  ></i>
                )}

                {projectById("Back to projects")}
              </button>
            </Link>

            {/* <EditDeleteButtons id={id} email={email} locale={locale} /> */}
          </div>

          <div className="flex flex-col gap-5 h-[50%]">
            <h2
              className="text-[42px] font-bold leading-none text-black dark:text-white
                        group-hover:text-gray-700 transition-all duration-500 capitalize
                        mb-3"
                        style={{fontFamily: "Arial, Helvetica, sans-serif"}}
            >
              {jProject.title}
            </h2>

            <button
              className="bg-yellow-600 px-2 py-1 border-solid border-2 border-black
                        w-[150px] text-white cursor-auto font-semibold"
                        style={{fontFamily: "Arial, Helvetica, sans-serif"}}
            >
              {jProject.category}
            </button>

            <p className="text-gray-700 dark:text-slate-100"
            style={{fontFamily: "Arial, Helvetica, sans-serif"}}
            >{jProject.date}</p>

            <div className="w-full">
              <p
                className="text-gray-800 dark:text-slate-200 text-md whitespace-pre-line
                        "
                        style={{fontFamily: "Arial, Helvetica, sans-serif"}}
              >
                {jProject.description}
              </p>
            </div>

            <div
              className="flex flex-wrap gap-6
                        text-md font-semibold mt-2 mx-[6px]"
            >
              {jProject.technologiesArray.map((tech: any, index: number) => (
                <span
                  key={index}
                  className="bg-gray-300 px-4 py-[2.5px] rounded-full
                                text-gray-800 hover:transform hover:scale-110 cursor-default transition-all duration-50
                                hover:text-gray-900"
                                style={{fontFamily: "Arial, Helvetica, sans-serif"}}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* <div className="w-[95%] text-lg
                         px-3 py-2 rounded-md">
                            <span className='font-bold
                            text-green-600 hidden'>{project.technologies}</span>
                        </div> */}

            <ul className="flex gap-4"></ul>

            <div className="border border-black/20"></div>

            <div className="flex items-center gap-4">
              {jProject.link.trim(" ") === "" ? (
                <></>
              ) : (
                <Link href={jProject.link} target="_blank">
                  <button
                    className="bg-blue-700 text-white flex flex-row justify-center items-center gap-3
                                px-5 py-1 rounded-full hover:bg-blue-800 active:bg-blue-900"
                  >
                    {projectById("Visit the website")}

                    {locale === "en" && (
                      <i
                        className="fa-solid fa-arrow-right
                        mt-[2px]"
                      ></i>
                    )}

                    {locale === "ar" && (
                      <i
                        className="fa-solid fa-arrow-left
                        mt-[2px]"
                      ></i>
                    )}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <SwiperImage project={jProject} />
      </div>
    </div>
  );
};

export default ProjectById;
