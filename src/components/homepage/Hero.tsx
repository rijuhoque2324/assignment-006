import Image from "next/image";
import heroimg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid items-center gap-10 md:grid-cols-2 bg-[#15171D] p-14 rounded-2xl">

        {/* Left Content */}
        <div>
          <span className="text-[10px] font-bold tracking-wider text-[#b6ff00]">
            WORKOUT LIBRARY
          </span>

          <h1 className="mt-4 text-5xl font-bold">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-4 text-gray-400">
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it <br /> into today&apos;s plan,
            and watch the week&apos;s work add up.
          </p>

          <button className="mt-6 bg-[#b6ff00] px-5 py-2 text-sm font-bold text-black rounded-md">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-end">
          <Image
            src={heroimg}
            alt="FitLog workout"
            priority
            className="w-[320px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;