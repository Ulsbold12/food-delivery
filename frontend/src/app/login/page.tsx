"use client";

import { useState } from "react";
import Step1 from "../_components/Step1";
import Step2 from "../_components/Step2";
import Step3 from "../login/_components/Step3";
import Step4 from "../login/_components/Step4";

export default function MultiStepWrapper() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen  flex items-center justify-center gap-6">
      <div className="bg-white rounded-3xl shadow-xl  max-w-[405px] flex flex-row ">
        <div className="flex items-center justify-center ">
          {step === 3 && (
            <Step3 prev={() => setStep(2)} next={() => setStep(4)} />
          )}
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
