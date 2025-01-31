import { Book, GraduationCap, Menu, School, Users } from "lucide-react";
import { Navbar1 } from "./ui/shadcnblocks-com-navbar1";
import { Link } from "react-router-dom";

const navData = {
  logo: {
    url: "/",
    src: "/assets/eduvalogoblack.png",
    alt: "Eduva logo",
    title: "",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Study Materials",
          description: "Access comprehensive study materials and guides",
          icon: <Book className="size-5 shrink-0" />,
          url: "/study-materials",
        },
        {
          title: "Scholarships",
          description: "Find scholarships and financial aid opportunities",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/scholarships",
        },
        {
          title: "Government Schemes",
          description: "Explore government education schemes and benefits",
          icon: <School className="size-5 shrink-0" />,
          url: "/government-schemes",
        },
        {
          title: "Community",
          description: "Connect with fellow students and share experiences",
          icon: <Users className="size-5 shrink-0" />,
          url: "/community",
        },
      ],
    },
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
  mobileExtraLinks: [
    { name: "Help Center", url: "/help" },
    { name: "FAQ", url: "/faq" },
    { name: "Terms", url: "/terms" },
    { name: "Privacy", url: "/privacy" },
  ],
  auth: {
    login: { text: "Sign In", url: "/signin" },
    signup: { text: "Start Free →", url: "/signup" },
  },
};

const Navbar = () => {
  return <Navbar1 {...navData} />;
};

export default Navbar;