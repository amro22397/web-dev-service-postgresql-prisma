import Home from "./Home";
import type { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }): Promise<Metadata> {
//   const { locale } = await params;

//   return {
//     title: {
//       absolute:
//         locale === "ar"
//           ? "amro97 Team | وكالة تطوير مواقع وخدمات تصميم مواقع"
//           : "amro97 Team | Web Development Agency & Website Design",
//     },
//     description:
//       locale === "ar"
//         ? "وكالة تطوير مواقع تقدم تصميم المواقع، وتطوير مواقع الأعمال، وحلول React وNext.js المتكاملة والمخصصة لمساعدة الشركات على النمو."
//         : "A web development agency providing website design, business website development, and custom full-stack React and Next.js development services.",
//   };
// }

export default function Page() {
  return <Home />;
}
