import Services from "./Services";
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
      absolute: locale === "ar" ? "خدماتنا" : "Our Services",
    },

    description:
      locale === "ar"
        ? "اكتشف خدمات تصميم وتطوير المواقع والتطبيقات والحلول الرقمية المخصصة التي تساعد أعمالك على النمو في عُمان."
        : "Discover custom website and application design, development, and digital solutions that help your business grow in Oman.",

    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return <Services />;
}
