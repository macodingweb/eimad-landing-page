import { FeaturesCards } from "@/constants/features";
import { FeatureCard } from "./ui/feature-card";

export default function Features() {
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
    <section className="features py-8" id="features">
      <h1 className={`title text-[32px] text-[#cab763] font-black w-fit mx-auto relative ${TitlePseudoEles}`}>لماذا تعمل معي ؟</h1>
      <div className="container mx-auto p-6">
        <div className="card-group grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-2 max-md:grid-cols-1">
          { FeaturesCards.map((ele, index) => (
            <FeatureCard data={ele} key={index} />
          )) }
        </div>
      </div>
    </section>
  )
}