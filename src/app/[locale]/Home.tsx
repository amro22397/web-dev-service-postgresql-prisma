"use client";

import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const homePage = useTranslations("HomePage");

  return (
    <Container>
      <Hero />

      <section className="py-12 lg:py-16" aria-labelledby="website-development-services">
        <h2 id="website-development-services" className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {homePage("servicesTitle")}
        </h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {homePage("servicesDescription")}
        </p>
        <Link
          href={`/${locale}/services`}
          className="mt-6 inline-flex font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          {homePage("servicesLink")}
        </Link>
      </section>

      <section className="py-12 lg:py-16" aria-labelledby="custom-website-development">
        <h2 id="custom-website-development" className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {homePage("customDevelopmentTitle")}
        </h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {homePage("customDevelopmentDescription")}
        </p>
        <Link
          href={`/${locale}/projects`}
          className="mt-6 inline-flex font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          {homePage("projectsLink")}
        </Link>
      </section>
    </Container>
  );
}
