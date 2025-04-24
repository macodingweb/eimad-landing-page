import Image from "next/image";

export default function Page() {
  return (
    <section
      className="hero__section bg-cover relative bg-center"
      style={{ backgroundImage: "url(/hero-section-bg.png)" }}
    >
      <div className="cover block w-full z-0 h-full absolute top-0 left-0 bg-[#0f182bb3]"></div>

      <div className="container mx-auto pt-12 px-6 relative flex items-end justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div className="right pb-[100px] max-lg:pb-[30px] grid gap-8 max-lg:flex max-lg:flex-col max-lg:items-center">
          <h1 className="title text-white font-black text-[46px] max-lg:text-[32px]">
            عماد اليابسي
          </h1>
          <p className="desc text-slate-300 leading-[1.7] text-[20px] max-lg:text-[18px] max-lg:text-center">
            خدمة المحاماة عند عماد قمة في الاحترافية، دقة في التفاصيل وحلول<br />
            قانونية تضمن لك حقك بكل ثقة
          </p>
          <button type="button" aria-label="Contact" className="w-fit cursor-pointer py-3 px-8 font-bold text-white bg-[#7f764f] rounded-md transition-all hover:bg-transparent hover:text-[#7f764f] border-2 border-solid border-[#7f764f]">احجز استشارتك</button>
        </div>

        <div className="left mr-10 max-lg:mr-0">
          <Image
            src={"/hero-section.png"}
            alt="Hero Section"
            width={500}
            height={0}
            className="w-[500px] h-fit"
          />
        </div>
      </div>
    </section>
  );
}
