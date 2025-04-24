import { GoVerified } from "react-icons/go";
import { SiAwssecretsmanager } from "react-icons/si";
// import { RiChatFollowUpLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";

export const FeaturesCards =  [
  {
    title: "خبرة قانونية متعددة",
    content: "أكثر من [عدد] سنوات من الخبرة في مجالات متعددة: مدني، تجاري، أحوال شخصية، وشركات.",
    icon: <GoVerified size={34} />,
  },
  {
    title: "استشارات دقيقة وسرية",
    content: "نقدم لك نصيحة قانونية دقيقة مع الحفاظ الكامل على سرية بياناتك.",
    icon: <SiAwssecretsmanager size={34} />,
  },
  {
    title: "سهولة الحجز والتواصل",
    content: "تقدر تحجز استشارتك أونلاين في دقائق، و نتواصل معاك في أسرع وقت .",
    icon: <MdOutlineContactSupport size={34} />,
  },
]