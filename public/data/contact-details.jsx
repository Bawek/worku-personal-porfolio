import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "workumanaye@gmail.com",
    link: "mailto:workumanaye@gmail.com",
    icon: MdEmail,
  },
  {
    id: 2,
    type: "Phone",
    value: "+251927345175",
    link: "tel:+251927345175",
    icon: FaPhoneSquareAlt,
  },
  {
    id: 3,
    type: "Phone",
    value: "+251707194350",
    link: "tel:+251707194350",
    icon: FaPhoneSquareAlt,
  },
  {
    id: 4,
    type: "Address",
    value: "Debremarkos",
    link: "#",
    icon: FaLocationDot,
  },
];

export default contactDetails;
