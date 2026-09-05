"use client";

import { useTranslations } from "next-intl";
import AboutHero from "../../components/about/AboutHero";
import AboutServices from "../../components/about/AboutServices";
import AboutLocation from "../../components/about/AboutLocation";
import AboutValues from "../../components/about/AboutValues";
import AboutCta from "../../components/about/AboutCta";

const About = () => {
  const t = useTranslations("AboutPage");

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <AboutHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        primaryAction={t("hero.primaryAction")}
        secondaryAction={t("hero.secondaryAction")}
        locationLabel={t("hero.locationLabel")}
        worldwideLabel={t("hero.worldwideLabel")}
        responsiveLabel={t("hero.responsiveLabel")}
        deviceLabel={t("hero.deviceLabel")}
      />
      <AboutServices
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        description={t("services.description")}
        websiteTitle={t("services.websiteTitle")}
        websiteDescription={t("services.websiteDescription")}
        webAppTitle={t("services.webAppTitle")}
        webAppDescription={t("services.webAppDescription")}
        responsiveTitle={t("services.responsiveTitle")}
        responsiveDescription={t("services.responsiveDescription")}
      />
      <AboutLocation
        eyebrow={t("location.eyebrow")}
        title={t("location.title")}
        description={t("location.description")}
        localTitle={t("location.localTitle")}
        localDescription={t("location.localDescription")}
        worldwideTitle={t("location.worldwideTitle")}
        worldwideDescription={t("location.worldwideDescription")}
      />
      <AboutValues
        eyebrow={t("values.eyebrow")}
        title={t("values.title")}
        communicationTitle={t("values.communicationTitle")}
        communicationDescription={t("values.communicationDescription")}
        qualityTitle={t("values.qualityTitle")}
        qualityDescription={t("values.qualityDescription")}
        supportTitle={t("values.supportTitle")}
        supportDescription={t("values.supportDescription")}
      />
      <AboutCta
        title={t("cta.title")}
        description={t("cta.description")}
        action={t("cta.action")}
      />
    </main>
  );
};

export default About;
