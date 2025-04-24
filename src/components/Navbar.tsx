import Image from "next/image";
import { ListItem } from "./ui/list-item";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";
import { MainListItems } from "@/constants/navbar";

type ListItems = {
  text: string;
  href: string;
}

type NavProps = {
  logo: string;
  items: ListItems[];
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ logo, items, isOpened, setIsOpened } : NavProps) {
  return (
    <nav className="nav__bar w-full bg-[#7f764f]">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo Container */}
        <div className="logo__container flex items-center gap-3">
          {/* Logo */}
          <Image src={logo} alt="Logo" width={60} height={0} className="rounded-lg shadow-lg" />
          <div className="logo__text__container grid gap-1 text-center max-lg:text-right font-bold text-white">
            <span className="text-[18px] max-sm:text-[16px]">عماد اليابسي</span>
            <span className="font-[400] max-sm:text-[14px]">محامي و استشاري قانوني</span>
          </div>
        </div>

        {/* Exchange Btn */}
        <button onClick={() => setIsOpened(true)} aria-label="Exchange btn" className="exchange__btn hidden max-lg:flex text-white w-[40px] h-[40px] items-center justify-center rounded-md transition-all hover:bg-[#e5dcd5] hover:text-black cursor-pointer" type="button">
          <IoMenu size={32} />
        </button>

        {/* Main List */}
        <ul className="main__list max-lg:hidden flex items-center gap-3">
          {/* List Items */}
          { items.map((ele, index) => (
            <ListItem setIsOpened={setIsOpened} data={ele} key={index} />
          )) }
        </ul>

        {/* Mobile Navbar */}
        <MobileNav isOpened={isOpened} setIsOpened={setIsOpened} items={MainListItems} />
      </div>
    </nav>
  )
}