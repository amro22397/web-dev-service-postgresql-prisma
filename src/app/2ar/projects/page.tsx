import React from 'react'
import './page.css'

import mongoose from 'mongoose';
import { Project } from '../models/project';
import AddProject from '../components/AddProject';
import ProjectFilter from '../components/ProjectsFilter'
import { revalidatePath } from 'next/cache';


const page = async () => {

    mongoose.connect(process.env.MONGO_URL as string)

    const frontEndProjects = await Project.find({category: {$in: ["Frontend"]}}, {}, {sort: {createdAt: -1}})
        const jFrontEndProjects = JSON.parse(JSON.stringify(frontEndProjects));
    
        const fullStackProjects = await Project.find({category: {$in: ["Fullstack"]}}, {}, {sort: {createdAt: -1}})
        const jFullStackProjects = JSON.parse(JSON.stringify(fullStackProjects))
    
        const allProjects = await Project.find({}, {}, {sort: {createdAt: -1}})
        const jAllProjects = JSON.parse(JSON.stringify(allProjects))

    revalidatePath('/');

  return (
     
    <div className="container mx-auto my-6">

        
            
                <div className="hidden">
                <AddProject  />
                </div>
    
                <ProjectFilter allProjects={jAllProjects} frontEndProjects={jFrontEndProjects}
                fullStackProjects={jFullStackProjects} />
        
       




        
    </div>
        
  )
}

export default page
