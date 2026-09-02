import Payment from "./Payment";
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
      absolute: locale === "ar" ? "طرق الدفع" : "Payment Methods",
    },

    description:
      locale === "ar"
        ? "تعرّف على طرق الدفع المتاحة والآمنة لخدمات تصميم وتطوير المواقع والتطبيقات لدى خدمة تطوير الويب في عُمان."
        : "Explore the available secure payment methods for website and application design and development services from Web Dev Service Oman.",

    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function Page() {
  return <Payment />;
}
