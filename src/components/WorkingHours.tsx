import { WorkingTimes } from "@/constants/working-times";
import Map from "./ui/map";

export default function WorkingHours() {
  return (
    <section className="working-hours" id="working-hours">
      <div className="container mx-auto rounded-xl overflow-hidden relative px-2">
        <Map />
        <div className="working-time w-[340px] p-6 bg-white rounded-lg border border-slate-300 max-md:top-2/4 max-md:-translate-y-1/4 shadow-md max-sm:right-2/4 max-sm:translate-x-2/4 absolute top-2/4 -translate-y-2/4 right-8">
          <h1 className="title text-[32px] font-black text-slate-800 mb-4">ساعات العمل</h1>
          <div className="working-times-wrapper grid gap-4">
            { WorkingTimes.map((ele, index) => (
              <div className="working-time flex items-center justify-between" key={index}>
                <div className="date flex items-center gap-2 text-slate-500 font-semibold">
                  <div className="day">{ele.text}</div>
                  { ele.status && (
                    <>
                      <span>....</span>
                      <div className="time">{ele.time}</div>
                    </>
                  ) }
                </div>
                { !ele.status && (
                  <span className="text-red-500 font-semibold">مغلق</span>
                ) }
              </div>
            )) }
          </div>
          <div className="divider w-full h-[1px] my-5 bg-slate-600"></div>
          <div className="follow-me">
            <span className="text-slate-800 font-black">تابعني على</span>
          </div>
        </div>
      </div>
    </section>
  )
}