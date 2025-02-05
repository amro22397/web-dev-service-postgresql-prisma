
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";
import { address } from '@/z-old-constants/eng-and-ar';



export const info = [
    {
      icon: <FaWhatsapp />,
      title: "الواتساب",
      description: "أضغط هنا",
      link: "http://wa.me/+249995291772"
    },
    {
      icon: <FaEnvelope />,
      title: "البريد الإلكتروني",
      description: "admin@wds-oman.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "العنوان",
      description: address.ar,
    },
  ];