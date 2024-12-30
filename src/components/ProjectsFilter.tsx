'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const ProjectsFilter = (
    {allProjects, frontEndProjects, fullStackProjects} : 
    {allProjects: any, frontEndProjects: any, fullStackProjects: any }
) => {

const [projects, setProjects] = useState(allProjects);

  return (

    <>
    <div className="flex-row justify-start gap-7 items-center
       text-xl max-sm:mx-2" style={{fontFamily: "sans-serif"}}>

<div className="flex flex-row gap-5">

<div id="filter-key"
onClick={() => setProjects(allProjects)}>
    All
</div>

<div id="filter-key"
onClick={() => setProjects(fullStackProjects)}>
    Fullstack
</div>

<div id="filter-key"
 onClick={() => setProjects(frontEndProjects)}>
    Frontend
</div>

</div>
            
        </div>

<div className="grid grid-cols-3 gap-7 mt-10
max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">

    {projects.length > 0 && projects.map((project: any, index: number) => (
        <Link key={index} href={`/projects/${project._id}`}>
         <div key={index} className="flex flex-col justify-start items-center
        bg-indigo-200 gap-3 shadow-lg mb-3 transform hover:scale-[1.01] transition-all duration-300 ease-in-out
        cursor-pointer h-[460px] max-w-[370px] mx-auto
        max-sm:max-w-full" id="project-card">
            
            <Image src={project.imageUrls[0]} alt={project.title}
            className='object-fill max-sm:w-full max-sm:h-[50%]' width={420} height={200} />

            <h2 className="text-2xl font-semibold text-slate-700">{project.title}</h2>

            <button className="bg-indigo-600 px-2 py-0 border-solid
                w-[150px] text-white cursor-auto font-semibold">
                {project.category}
                </button>

            <div className="flex flex-col justify-between items-center
             mb-4 gap-4 px-6 py-2 overflow-hidden hover:overflow-auto">

                <p className="text-sm text-black
                " style={{fontFamily: "sans-serif"}}>{project.description}</p>

            
            </div>

            
        </div>
        </Link>
       
    ))}
</div>
    </>
   
  )
}

export default ProjectsFilter
