
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";
import { address } from '@/z-old-constants/eng-and-ar';



export const info = [
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=96879335801",
    arTitle: "رقم الواتساب",
    arLink: "https://api.whatsapp.com/send?phone=96879335801",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "admin@wds-oman.com",
    arTitle: "البريد الإلكتروني",
    arDescription: "admin@wds-oman.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Alshifa Street, AlMawalih South, Oman",
    arTitle: "العنوان",
    arDescription: "شارع الشفاء ، الموالح الجنوبية ، سلطنة عمان"
  },
  ];