import Link from "next/link"

type Data = {
  text: string,
  href: string,
}

export function ListItem({ data } : { data: Data }) {
  const ListItemBefore = `
    before:content-['']
    before:absolute
    before:w-[8px]
    before:h-[8px]
    before:top-0
    before:right-0
    before:rounded-bl-full
    before:rounded-tl-full
    before:rounded-br-full
    before:bg-[#e5dcd5]
    before:transition-all
    before:z-[10]
  `;

  return (
    <li className={`list__item relative ${ListItemBefore} text-white transition-all max-lg:w-full hover:text-black hover:before:w-full hover:before:h-full hover:before:rounded-md`}>
      <Link href={data.href} className={`block p-2 px-3 font-semibold z-30 max-lg:w-full relative`}>{data.text}</Link>
    </li>
  )
}