'use client'
import { redirect } from "next/navigation";
import { useMedia } from "react-use";

const Podarok = () => {
    const media = useMedia("(max-width: 768px)");
    if (media) {
      return redirect("/telefon");
    }
  return (
    <section className="flex justify-center items-center flex-col h-screen gap-10">
      <div className="w-7xl aspect-video bg-amber-200"></div>
      <p className="text-5xl font-montserrat font-black">Можете получить подарок в ПВЗ озон в вашем доме!</p>
    </section>
  );
};

export default Podarok;
