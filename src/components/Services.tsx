import { ServicesCards } from "@/constants/services";
import { ServiceCard } from "./ui/service-card";

export default function Services() {
  const TitlePseudoEles = `
    before:content-['']
    before:absolute
    before:w-[50%]
    before:h-[3px]
    before:rounded-full
    before:bg-[#cab763]
    before:-bottom-3
    before:left-2/4
    before:-translate-x-2/4
    after:content-['']
    after:absolute
    after:w-[25%]
    after:h-[3px]
    after:rounded-full
    after:bg-[#cab763]
    after:-bottom-5
    after:left-2/4
    after:-translate-x-2/4
  `;

  return (
    <section className="services mb-6" id="services">
      <h1 className={`title text-[32px] text-[#cab763] font-black w-fit mx-auto relative ${TitlePseudoEles}`}>خدماتي</h1>
      <div className="container mt-8 mx-auto p-6">
        <div className="card-group grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          { ServicesCards.map((ele, index) => (
            <ServiceCard data={ele} key={index} />
          )) }
        </div>
      </div>
    </section>
  )
}