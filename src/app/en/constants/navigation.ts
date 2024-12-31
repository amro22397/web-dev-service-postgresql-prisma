import { navigationIsHidden } from "@/constants/eng-and-ar"

export const navigation = [
    {
      name: "Services",
      href: "/en/services",
      isHidden: navigationIsHidden.Services.isHidden,
    },
    {
      name: "Projects",
      href: "/en/projects",
      isHidden: navigationIsHidden.Projects.isHidden,
    },
    {
      name: "Payment methods",
      href: "/en/payment",
      isHidden: navigationIsHidden.paymentMethods.isHidden,
    },
    {
      name: "Contact us",
      href: "/en/contact",
      isHidden: navigationIsHidden.contactUs.isHidden,
    },
    {
      name: "About",
      href: "/en/about",
      isHidden: navigationIsHidden.About.isHidden,
    }
  ]