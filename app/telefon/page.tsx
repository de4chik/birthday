"use client";
import { redirect } from "next/navigation";
import { useMedia } from "react-use";

const Telefon = () => {
  const media = useMedia("(max-width: 768px)");
  if (!media) {
    return redirect("/");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="font-montserrat text-5xl text-center">
        Я же сказал заходить через компьютер!
      </span>
    </div>
  );
};

export default Telefon;
