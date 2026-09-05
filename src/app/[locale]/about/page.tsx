import type { Metadata } from "next";
import About from "./About";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL("https://www.wds-oman.com"),
    title: {
      absolute: locale === "ar" ? "نبذة عنا" : "About Us",
    },
    description:
      locale === "ar"
        ? "فريق amro97 في السيب، مسقط، عُمان يقدم خدمات تصميم وتطوير المواقع وتطبيقات الويب للعملاء داخل عُمان وفي جميع أنحاء العالم."
        : "amro97 Team in Seeb, Muscat, Oman builds professional websites and web applications for clients in Oman and worldwide.",
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `https://www.wds-oman.com/${locale}/about`,
      languages: {
        en: "https://www.wds-oman.com/en/about",
        ar: "https://www.wds-oman.com/ar/about",
      },
    },
  };
}

const page = async () => {
  return <About />;
};

export default page;
