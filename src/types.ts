export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}


export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string | null;
  technologies: string | null;
  technologiesArray: string[];
  link: string | null;
  date: string | null;
  category: string | null;
  imageUrls: string[];
  youtubeLink: string | null;
};