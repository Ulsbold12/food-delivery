"use client";

import { useState } from "react";

import Step3 from "../login/_components/Step3";

export default function MultiStepWrapper() {
  const [step, setStep] = useState(1);

  return (
    <div className="h-screen w-screen  flex items-center justify-center gap-6">
      <div className="bg-white rounded-3xl shadow-xl  max-w-[405px] flex flex-row ">
        <div className="flex items-center justify-center ">
          <Step3 />
        </div>
      </div>

      <img
        src="/delivery.png"
        alt="delivery"
        className="  w-[70%] h-[95%] object-cover flex justify-center rounded-2xl"
      />
    </div>
  );
}
