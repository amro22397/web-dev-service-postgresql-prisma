// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
// import { connectToDatabase } from '@/lib/db';
// import { JobForm } from '@/models/jobForm';
// import mongoose from 'mongoose';
// model import

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // await connectToDatabase();
    // const session = await getServerSession(req, res, authOptions);
    // console.log(session?.user?.email);

    // if (!session) {
    //     return res.status(401).json({
    //         message: "Unauthorized",
    //         success: false,
    //     })
    // }

    // const { id } = req.query;

    const { locale, category } = req.query;

    const toString = (v: string | string[] | undefined) =>
      Array.isArray(v) ? v[0] : (v ?? "");


    let urlCategory = toString(category);;

    if (!category) {
      urlCategory = "";
    }

    if (category === "All") {
      urlCategory = "";
    }


    // console.log(jobTitle, location, isWorkRemotely, datePosted, allCountriesCheck)

    // mongoose.connect(process.env.MONGO_URL as string);

    if (req.method === "GET") {
      // find from db

      // const jobs = await JobForm.find({
      //   country: { $regex: urlLocation, $options: "i" },
      // });

      const projects = await prisma.project.findMany({
        where: { category: { contains: urlCategory, mode: "insensitive" } },
        orderBy: { createdAt: "desc" },
      });

      return res.status(200).json({
        success: true,
        data: projects,
        message: "Projects are retrieved successfully",
      });
    }

    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error: any) {
    console.log("Server error getting projects", error);

    res.status(500).json({
      success: false,
      message: "Server error getting projects",
    //   error,
    });
  }
}
