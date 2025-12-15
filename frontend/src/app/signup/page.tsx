"use client";

import { useState } from "react";
import Step1 from "../_components/Step1";
import Step2 from "../_components/Step2";

export default function MultiStepWrapper() {
  const [step, setStep] = useState(1);

  return (
    <div className="h-screen w-screen  flex items-center justify-center gap-6">
      <div className="bg-white rounded-3xl shadow-xl  max-w-[405px] flex flex-row ">
        <div className="flex items-center justify-center ">
          {step === 1 && <Step1 next={() => setStep(2)} />}
          {step === 2 && (
            <Step2 prev={() => setStep(1)} next={() => setStep(3)} />
          )}
        </div>
      </div>

      <img
        src="/delivery.png"
        alt="delivery"
        className=" hidden w-[70%] h-[90%] object-cover flex justify-center rounded-2xl"
      />
    </div>
  );
}
