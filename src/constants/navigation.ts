import { navigationIsHidden } from "@/z-old-constants/eng-and-ar"

export const navigation = [
    {
      name: "Services",
      arName: "الخدمات",
      translationKey: "Services",
      href: "/services",
      isHidden: navigationIsHidden.Services.isHidden,
    },
    {
      name: "Projects",
      arName: "أعمال سابقة",
      translationKey: "Projects",
      href: "/projects",
      isHidden: navigationIsHidden.Projects.isHidden,
    },
    {
      name: "Payment methods",
      arName: "طرق الدفع",
      translationKey: "Payment methods",
      href: "/payment",
      isHidden: navigationIsHidden.paymentMethods.isHidden,
    },
    {
      name: "About us",
      arName: "نبذة عنا",
      translationKey: "About us",
      href: "/about",
      isHidden: navigationIsHidden.About.isHidden,
    },
    {
      name: "Contact us",
      arName: "تواصل معنا",
      translationKey: "Contact us",
      href: "/contact",
      isHidden: navigationIsHidden.contactUs.isHidden,
    }
  ]
