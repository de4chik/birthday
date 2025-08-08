"use client";
import { redirect } from "next/navigation";
import { useRef } from "react";
import { useMedia } from "react-use";

const Podarok = () => {
  const divRef = useRef(null);
  const media = useMedia("(max-width: 768px)");
  if (media) {
    return redirect("/telefon");
  }
  const downloadImage = () => {
    console.log(divRef.current);

    if (!divRef.current) return;

    // Получаем URL фонового изображения
    const div = divRef.current;
    const bgUrl = window
      .getComputedStyle(div)
      .backgroundImage.replace(/url\(['"]?/, "")
      .replace(/['"]?\)/, "");

    console.log(bgUrl);

    // Создаем временную ссылку для скачивания
    const link = document.createElement("a");
    link.href = bgUrl;
    link.download = "shtrih.jpg"; // Имя файла при скачивании
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="flex justify-center items-center flex-col h-screen gap-10  font-montserrat ">
      <div
        ref={divRef}
        className="w-5xl aspect-video bg-amber-200 bg-[url('/birthday/image/shtrih.jpg')] bg-no-repeat bg-cover bg-center"
      ></div>
      <p className="text-5xl font-black">
        Можете получить подарок в ПВЗ озон в вашем доме!
      </p>
      <button
        onClick={downloadImage}
        className=" p-[20px] rounded-fulltext-2xl shadow-2xl bg-[#22211F] duration-200 flex gap-5 items-center cursor-pointer rounded-[20px] justify-center disabled:opacity-50 font-black text-white"
      >
        Скачать штрих код
      </button>
    </section>
  );
};

export default Podarok;
