
import Contact from "./Contact";
import "./page.css";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL("https://www.wds-oman.com"),

    title: {
      absolute: locale === "ar" ? "تواصل معنا" : "Contact Us",
    },

    description:
      locale === "ar"
        ? "تواصل مع خدمة تطوير الويب في عُمان لمناقشة مشروع موقعك الإلكتروني أو تطبيقك والحصول على الدعم والإجابة عن استفساراتك."
        : "Contact Web Dev Service Oman to discuss your website or application project, get support, and receive answers to your questions.",

    twitter: {
      card: "summary_large_image",
    },
  };
}

const page = async () => {
  return <Contact />;
}

export default page;
