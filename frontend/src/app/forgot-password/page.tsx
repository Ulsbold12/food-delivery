import Step4 from "../login/_components/Step4";

export default function ForgotPasswordPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-[405px] flex flex-row">
        <div className="flex items-center justify-center">
          <Step4 />
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
