"use client";

import { useState } from "react";
import Step1 from "./_components/Step1";
import Step2 from "./_components/Step2";

type FormData = { email: string; username: string };

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({ email: "", username: "" });

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-[405px] flex flex-row">
        <div className="flex items-center justify-center">
          {step === 1 && (
            <Step1
              next={(data) => {
                setFormData(data);
                setStep(2);
              }}
            />
          )}
          {step === 2 && (
            <Step2
              prev={() => setStep(1)}
              email={formData.email}
              username={formData.username}
            />
          )}
        </div>
      </div>

      <img
        src="/delivery.png"
        alt="delivery"
        className="w-[70%] h-[95%] object-cover flex justify-center rounded-2xl"
      />
    </div>
  );
}
