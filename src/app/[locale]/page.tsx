import Home from "./Home";
import type { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }): Promise<Metadata> {
//   const { locale } = await params;

//   return {
//     metadataBase: new URL("https://www.wds-oman.com"),

//     title: {
//       absolute: locale === "ar" ? "خدمة تطوير الويب في عُمان" : "Web Dev Service Oman",
//     },

//     description:
//       locale === "ar"
//         ? "خدمات احترافية لتصميم وتطوير المواقع والتطبيقات في عُمان، تشمل حلول الواجهة الأمامية والتطوير المتكامل للأعمال."
//         : "Professional website and application design and development services in Oman, including frontend and full-stack solutions for businesses.",

//     twitter: {
//       card: "summary_large_image",
//     },
//   };
// }

export default function Page() {
  return <Home />;
}
