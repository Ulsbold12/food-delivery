export function Marquee() {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>

      <div className="overflow-hidden bg-red-500 py-4 h-[92px] flex flex-col items-center justify-center mt-[60px]">
        <div className="flex w-max animate-marquee ">
          <span className="mx-10 text-white text-3xl font-semibold ">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
          <span className="mx-10 text-white text-3xl font-semibold">
            Fresh fast delivered
          </span>
        </div>
      </div>
    </>
  );
}
