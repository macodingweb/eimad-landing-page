"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContactInpts } from "@/constants/contact";
import { FormGroup } from "./ui/Form-Group";
import { FormEvent, useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactMe() {
  const duration = 0.3;

  const SubmitBtn = useRef<HTMLButtonElement>(null);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaToken = (token: string | null) => {
    setCaptchaToken(token);
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    SubmitBtn.current?.setAttribute("disabled", "true");

    const formData = new FormData(e.currentTarget);

    if (!captchaToken) {
      Swal.fire({
        title: "خطأ",
        text: "من فضلك اثبت انك لست روبوت من اختبار reCAPTCHA",
        icon: "error",
      });
      SubmitBtn.current?.removeAttribute("disabled");
      return;
    }

    try {
      const sendMessage = await emailjs.send(
        "service_tnq0sen",
        "template_je5folr",
        {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          consultation_type: formData.get("consultation_type"),
          message:  formData.get("message"),
          data: formData.get("preferred_date"),
          time: formData.get("preferred_time"),
          title: formData.get("name"),
          "g-recaptcha-response": captchaToken,
        },
        "RH5mmSfvAVeMJ2rw3"
      );

      if (sendMessage.status === 200) {
        Swal.fire({
          title: "تم الإرسال",
          text: "تم إرسال طلب حجز استشارة بنجاح !",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "حدث خطأ!",
        text: "حدث خطأ ما غير متوقع يرجى المحاوله لاحقا!",
        icon: "error",
      });
      SubmitBtn.current?.removeAttribute("disabled");
    }
  };

  return (
    <section className="contact-me mt-8 mb-14" id="contact-me">
      <motion.div
        transition={{
          duration: duration,
          delay: 0.3,
        }}
        initial={{
          opacity: 0,
          transform: "translate(20px, 0)",
        }}
        whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        viewport={{ once: true }}
        className="container mx-auto max-md:rounded-none p-12 max-md:p-4 max-md:py-8 max-lg:flex-col bg-gradient-to-r from-[#7f764f] to-[#938b60]  rounded-3xl flex items-center justify-between relative"
      >
        {/* Bg Lines Vectors */}
        <div className="bg-line-vector absolute -left-1/12 -top-1.5 z-0 pointer-events-none">
          <Image
            src={"/vectors/bg-icon-lines.webp"}
            alt="BG Lines"
            width={1065}
            height={0}
            className="w-[1065px] h-fit"
          />
        </div>
        <div className="bg-line-vector absolute max-lg:hidden -right-1/12 -bottom-1.5 z-0 pointer-events-none">
          <Image
            src={"/vectors/bg-icon-lines-1.webp"}
            alt="BG Lines"
            width={413}
            height={0}
            className="w-[413px] h-fit"
          />
        </div>

        <div className="right text-white grid gap-6 relative z-30 max-lg:text-center max-lg:mb-12">
          <h1 className="title text-[38px] font-bold max-md:text-[32px]">
            احجز استشارتك الآن
          </h1>
          <p className="desc leading-[1.7] text-[18px] text-slate-200 max-md:text-[16px]">
            لا تتردد في طلب استشارة قانونية احترافية – فقط املأ النموذج <br />{" "}
            وسأقوم بمراجعة حالتك والرد عليك في أقرب وقت
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="left w-[500px] grid gap-4 relative z-30 max-md:w-full"
        >
          {ContactInpts.map((ele, index) => (
            <FormGroup data={ele} key={index} />
          ))}
          {/* إضافة reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6Lc3RiMrAAAAABNInlwMOO2dNdXP4MT8xPZDiX3a"
            onChange={handleCaptchaToken}
          />
          <button ref={SubmitBtn} className="mt-4 bg-white text-[#7f764f] font-bold py-3 cursor-pointer px-6 rounded-full hover:bg-transparent hover:text-white border-solid border-2 border-white transition">
            أرسل الطلب
          </button>
        </form>
      </motion.div>
    </section>
  );
}
