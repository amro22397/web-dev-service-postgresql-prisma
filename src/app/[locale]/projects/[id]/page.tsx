
/* import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useSession } from 'next-auth/react' 
import "swiper/css"; */


// import { getSession } from '@/actions/getUser';
// import { headers } from "next/headers";
import ProjectById from './ProjectById';
// import { Project } from '@/models/project';
// import mongoose from 'mongoose';
import { getLocale } from 'next-intl/server';
import prisma from '@/lib/prisma';
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL("https://www.wds-oman.com"),

    title: {
      absolute: locale === "ar" ? "تفاصيل المشروع" : "Project Details",
    },

    description:
      locale === "ar"
        ? "اطّلع على تفاصيل هذا المشروع وتقنياته وتصميمه ضمن أعمال خدمة تطوير الويب في عُمان."
        : "View this project's details, technologies, and design as part of the Web Dev Service Oman portfolio.",

    twitter: {
      card: "summary_large_image",
    },
  };
}




// type PageProps = {
//     params: {
//         id: string;
//     }
// };

export default async function page(/*props: PageProps*/) {
    // const id = props.params.id

//     const header = await headers();
// const pathname = header.get('referer')

// const id = pathname?.split('/')[4]




    // 

    // const project = await Project.findById({_id: id})
    // const jProject = JSON.parse(JSON.stringify(project))

    // mongoose.connect(process.env.MONGO_URL as string)

    // const allProjects = await Project.find({}, {}, {sort: {createdAt: -1}})

    // const jAllProjects = JSON.parse(JSON.stringify(allProjects));

    const jAllProjects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    })

    // const project = jAllProjects.find((project: any) => project._id === id);
    // const jProject = JSON.parse(JSON.stringify(project));


    // // console.log(project)

    //  const session = await getSession();
    //   console.log(session?.user?.email)

      const locale = await getLocale();

  return (
    

    <>
    <ProjectById /* id={id} jProject={jProject} */ /* email={session?.user?.email} */ projects={jAllProjects}
    locale={locale}  />

    {/* <pre className="">{id}</pre> */}
    {/* <pre>{JSON.stringify(jProject, null, 2)}</pre> */}
    <pre className="hidden">{JSON.stringify(jAllProjects, null, 2)}</pre>
    </>
  )
}
