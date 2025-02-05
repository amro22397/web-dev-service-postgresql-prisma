'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const ProjectsFilter = (
    {allProjects, frontEndProjects, fullStackProjects} : 
    {allProjects: any, frontEndProjects: any, fullStackProjects: any }
) => {

  const [projects, setProjects] = useState(fullStackProjects);

  return (

    <>
    <div className="flex-row justify-start gap-7 items-center
       text-xl max-sm:mx-2" style={{fontFamily: "sans-serif"}}>

<div className="flex flex-row gap-5">

<div id="filter-key"
onClick={() => setProjects(allProjects)}>
    الكل
</div>

<div id="filter-key"
style={{fontFamily: "Arial, Helvetica, serif"}}
onClick={() => setProjects(fullStackProjects)}>
    Fullstack
</div>

<div id="filter-key"
style={{fontFamily: "Arial, Helvetica, serif"}}
 onClick={() => setProjects(frontEndProjects)}>
    Frontend
</div>

</div>
            
        </div>

<div className="grid grid-cols-3 gap-7 mt-10
max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">

    {projects.length > 0 && projects.map((project: any, index: number) => (
        <Link key={index} href={`/ar/projects/${project._id}`}>
         <div key={index} className="projects-all-div" id="project-card">
            
            <Image src={project.imageUrls[0]} alt={project.title}
            className='projects-image' width={420} height={200} />

            <h2 className="text-2xl font-semibold text-slate-700"
            style={{fontFamily: "Arial, Helvetica, serif"}}>{project.title}</h2>

            <button className="bg-indigo-600 px-2 py-0 border-solid
                w-[150px] text-white cursor-auto font-semibold"
                style={{fontFamily: "Arial, Helvetica, serif"}}>
                {project.category}
                </button>

            <div className="projects-all-description">

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
