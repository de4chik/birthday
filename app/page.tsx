"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useMedia } from "react-use";

export default function Home() {
  const media = useMedia("(max-width: 768px)");
  if (media) {
    return redirect("/telefon");
  }
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <div className="w-full h-screen flex justify-center items-center font-montserrat font-semibold text-[220px]">
        <div className="relative">
          <h1 className="text-center uppercase text-[#22211F] font-black">
            С днем рождения
          </h1>
          <MouseParallaxChild
            factorX={1}
            factorY={1}
            className="absolute top-10 left-52"
          >
            <Image
              src={"/birthday/image/halpushka.png"}
              alt=""
              width={160}
              height={160}
            />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.5}
            factorY={0.5}
            className="absolute -bottom-10 left-60"
          >
            <Image
              src={"/birthday/image/gift.png"}
              alt=""
              width={160}
              height={160}
            />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={2}
            factorY={2}
            inverted={true}
            className="absolute top-10 right-96 -z-10"
          >
            <Image
              src={"/birthday/image/pizza.png"}
              alt=""
              width={160}
              height={160}
            />
          </MouseParallaxChild>
          <Link
            href={"/pozdravlenie"}
            className="bg-[#F26060] p-[40px] rounded-full absolute top-1/2 left-1/2 -translate-1/2 text-5xl shadow-2xl hover:bg-[#ff8282] duration-200 flex gap-5 items-center cursor-pointer font-montserrat font-black text-[#22211F]"
          >
            Нажми
            <Image
              src={"/birthday/image/stars.png"}
              alt=""
              width={160}
              height={160}
            />
          </Link>
        </div>
      </div>
    </MouseParallaxContainer>
  );
}
