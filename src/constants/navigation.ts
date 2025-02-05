import { navigationIsHidden } from "@/z-old-constants/eng-and-ar"

export const navigation = [
    {
      name: "Services",
      arName: "الخدمات",
      href: "/services",
      isHidden: navigationIsHidden.Services.isHidden,
    },
    {
      name: "Projects",
      arName: "أعمال سابقة",
      href: "/projects",
      isHidden: navigationIsHidden.Projects.isHidden,
    },
    {
      name: "Payment methods",
      arName: "طرق الدفع",
      href: "/payment",
      isHidden: navigationIsHidden.paymentMethods.isHidden,
    },
    {
      name: "Contact us",
      arName: "تواصل معنا",
      href: "/contact",
      isHidden: navigationIsHidden.contactUs.isHidden,
    },
    {
      name: "About",
      arName: "نبذة عنا",
      href: "/about",
      isHidden: navigationIsHidden.About.isHidden,
    }
  ]