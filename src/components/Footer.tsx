import Link from "next/link";
import { IoIosPhonePortrait } from "react-icons/io";
import Image from "next/image";
import { MainListItems } from "@/constants/navbar";

export default function Footer() {
  return (
    <footer className="footer bg-neutral-100 mt-12">
      <div className="container mx-auto p-12 px-6 flex items-center justify-between max-md:flex-col max-md:gap-10">
        {/* Logo Container */}
        <div className="logo__container max-md:w-full flex items-center gap-3">
          {/* Logo */}
          <Image src={"/logos/logo-2.png"} alt="Logo" width={60} height={0} className="rounded-lg shadow-lg" />
          <div className="logo__text__container grid gap-1 text-center max-lg:text-right font-bold text-slate-900">
            <span className="text-[18px] max-sm:text-[16px]">عماد اليابسي</span>
            <span className="font-[400] max-sm:text-[14px]">محامي و استشاري قانوني</span>
          </div>
        </div>
        <div className="content grid gap-3 max-md:w-full">
          <h1 className="title text-[18px] text-slate-800 font-bold">روابط مهمة</h1>
          <ul className="main__list grid gap-3">
            { MainListItems.map((ele, index) => (
              <li className="list-item text-slate-600 hover:underline" key={index}>
                <Link href={ele.href}>{ele.text}</Link>
              </li>
            )) }
          </ul>
        </div>
        <div className="content grid gap-3 max-md:w-full">
          <h1 className="title text-[18px] text-slate-800 font-bold">تواصل معي</h1>
          <Link href={"https://api.whatsapp.com/send?phone=966554050324&text=AlyabsiE"} className="contact-method hover:text-slate-400 flex items-center gap-2">
            <div className="icon transition-all text-[#cab763]">
              <IoIosPhonePortrait size={22} />
            </div>
            <span className="transition-all">+966554050324</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}