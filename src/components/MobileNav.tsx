import { ListItem } from "./ui/list-item";
import { IoCloseOutline } from "react-icons/io5";

type ListItems = {
  text: string;
  href: string;
}

type MobileNavProps = {
  items: ListItems[];
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ items, isOpened, setIsOpened } : MobileNavProps) {
  return (
    <>
      { isOpened && (
        <div className="cover hidden max-lg:block w-[100%] h-[100vh] fixed top-0 left-0 bg-[#0f182bb3]"></div>
      ) }
      <div className={`mobile__nav hidden max-lg:block fixed top-0 h-[100vh] bg-[#7f764f] w-[280px] pt-[100px] transition-all px-6 ${ isOpened ? "left-0" : "-left-full" }`}>
        {/* Close Btn */}
        <button type="button" onClick={() => setIsOpened(false)} className="close__btn text-white absolute top-4 right-4 cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-md hover:bg-[#e5dcd5] transition-all hover:text-black">
          <IoCloseOutline size={28} />
        </button>
        
        <ul className="main__list flex items-center flex-col gap-5">
          {/* List Items */}
          { items.map((ele, index) => (
            <ListItem data={ele} key={index} />
          )) }
        </ul>
      </div>
    </>
  )
}