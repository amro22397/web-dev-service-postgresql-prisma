
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";
import { address } from '@/z-old-constants/eng-and-ar';



export const info = [
    {
      icon: <FaWhatsapp />,
      title: "Whatsapp",
      description: "Click here",
      link: "http://wa.me/+249995291772"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "admin@wds-oman.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: address.eng,
    },
  ];