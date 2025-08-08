"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { redirect, useRouter } from "next/navigation";
import { useMedia } from "react-use";

const Pozdravlenie = () => {
  const arr = ["лучшая", "удачливая", "красивая", "креативная"];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
    }, 3000);
    console.log(activeIndex);

    return () => clearInterval(interval);
  }, []);

  const [code, setCode] = useState("");
  const { push } = useRouter();

    const media = useMedia("(max-width: 768px)");
    if (media) {
      return redirect("/telefon");
    }
  return (
    <section className="max-w-7xl mx-auto pt-20 text-[#22211F]">
      <h2 className="font-montserrat text-8xl font-black">
        Ты самая&nbsp;
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            {arr[activeIndex]}
          </motion.span>
        </AnimatePresence>
      </h2>
      <p className="font-montserrat font-semibold text-5xl mt-[60px]">
        Сима! Поздравляю тебя с днем рождения!
        <br />
        <br />
        Пусть в твоей жизни будет только счастье и успех. Желаю тебе крепкого
        здоровья, что бы близкие были всегда рядом, даже если расстояние между
        вами очень большое, что бы сбылись все твои заветные мечты и пусть
        только лучшее будет впереди!
      </p>
      <Image
        width={10}
        height={150}
        src={"/sima/image/arrow.svg"}
        alt="arrow"
        className="mx-auto mt-[170px]"
      />

      <h3 className="text-[#22211F] text-8xl font-black text-center mt-[170px]">
        Введите секретный код для получения подарка
      </h3>

      <div className="mt-24 mb-[170px] flex justify-center text-white font-montserrat font-black">
        <div className="flex flex-col gap-2.5">
          <InputOTP
            maxLength={4}
            value={code}
            onChange={(value) => setCode(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="bg-[#22211F] p-10 text-4xl focus:border-2 focus:border-red-500"
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={1} className="bg-[#22211F] p-10 text-4xl" />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={2} className="bg-[#22211F] p-10 text-4xl" />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} className="bg-[#22211F] p-10 text-4xl" />
            </InputOTPGroup>
          </InputOTP>
          <button
            disabled={code.length !== 4}
            onClick={() => {
              if (code == "торт") {
                push("/podarok");
              } else {
                alert('Не правильный код :с')
              }
            }}
            className=" p-[20px] rounded-fulltext-2xl shadow-2xl bg-[#22211F] duration-200 flex gap-5 items-center cursor-pointer rounded-[20px] justify-center disabled:opacity-50"
          >
            Получить подарок
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pozdravlenie;
