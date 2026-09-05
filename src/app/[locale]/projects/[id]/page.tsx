
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
import { title } from '@/constants/title';
import { getSession } from '@/actions/getUser';
import { Project } from '@/types';
import { notFound } from "next/navigation";

async function getProject(id: string) {
  // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/get-job-by-id?id=${id}`, {
  //   // important: choose caching strategy
  //   cache: "no-store", // or next: { revalidate: 60 }
  // });

  // if (!res.ok) return null;

  // const response = await res.json() as any;

  // return response.data();

  const project: Project | null = await prisma.project.findUnique({
    where: { id },
  });

  return project;
}

function truncateWords(text: string | null | undefined, maxWords: number) {
  if (!text) return "";

  const words = text.split(" ");

  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {

   const { locale, id } = await params;

  const fullUrl = `${process.env.NEXTAUTH_URL}/${locale}/projects/${id}`;

  const project = await getProject(id);

  return {
    metadataBase: new URL("https://www.wds-oman.com"),

    title: {
      absolute:
        project?.title ?? (locale === "ar" ? "تفاصيل المشروع" : "Project Details"),
    },

     description:
      locale === "ar"
        ? truncateWords(project?.description, 25)
        : truncateWords(project?.description, 25),

    twitter: {
      card: "summary_large_image",
      title: project?.title,
      description: truncateWords(project?.title, 6),
      images: project?.imageUrls,
    },

    openGraph: {
      title: locale === "ar" ? project?.title : project?.title,
      description:
        locale === "ar"
          ? truncateWords(project?.description, 25)
          : truncateWords(project?.description, 25),
      url: fullUrl,
      siteName: locale === "ar" ? title.ar : title.en,
      type: "website",
      // images: [
      //   {
      //     url: project?.imageUrls[0],
      //     width: 1200,
      //     height: 630,
      //     alt: "Job preview",
      //   },
      // ],
      images:
        project?.imageUrls?.map((url: string) => ({
          url,
          width: 1200,
          height: 630,
          alt: "Job preview",
        })) ?? [],
    },
  };
}




// type PageProps = {
//     params: {
//         id: string;
//     }
// };

export default async function page({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;

//     const header = await headers();
// const pathname = header.get('referer')

// const id = pathname?.split('/')[4]




    // 

    // const project = await Project.findById({_id: id})
    // const jProject = JSON.parse(JSON.stringify(project))

    // mongoose.connect(process.env.MONGO_URL as string)

    // const allProjects = await Project.find({}, {}, {sort: {createdAt: -1}})

    // const jAllProjects = JSON.parse(JSON.stringify(allProjects));

  // const project = await getProject(id);

  // if (!project) {
  //   notFound();
  // }

    // const project = jAllProjects.find((project: any) => project._id === id);
    // const jProject = JSON.parse(JSON.stringify(project));


    // // console.log(project)

    //  const session = await getSession();
    //   console.log(session?.user?.email)

    const session = await getSession();
  console.log(session?.user?.email);

      const locale = await getLocale();

  return (
    

    <>
    <ProjectById /* id={id} jProject={jProject} */
    email={session?.user?.email}
    // project={project}
    locale={locale}  />

    {/* <pre className="">{id}</pre> */}
    {/* <pre>{JSON.stringify(jProject, null, 2)}</pre> */}
    {/* <pre className="hidden">{JSON.stringify(project, null, 2)}</pre> */}
    </>
  )
}
