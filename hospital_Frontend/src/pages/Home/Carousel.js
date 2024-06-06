import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "react-feather";

export default function Carousel({
  children: sildes,
  autoSlide = false,
  autoSlideInterval = 5500,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? sildes.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === sildes.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const sildeInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(sildeInterval);
  }, []);

  return (
    <div className="overflow-hidden relative z--1">
      <div
        className="flex transiton-transfrom  ease-out daration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {sildes}{" "}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 ">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/40  text-gray-80 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/40 text-gray-80 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {sildes.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
