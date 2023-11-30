import { FC } from "react";
import bgVideo from "../../imgs/The new i7 and the new 7.mp4";

const Hero: FC = () => {
  return (
    <main className={`w-[100%] h-[100%] mt-[70px] overflow-y-clip`}>
      {/* <div className={"h-[auto]"}> */}
      <video
        autoPlay
        muted
        loop
        className={`absolute top-0 left-0 -z-10 w-[100vw] h-[auto]`}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div
        className={
          "container" +
          " " +
          `w-[450px] h-[740px] text-[60px] mt-[60px] text-white text-end pointer-events-none`
        }
      >
        <h1>
          The future is
          <br />
          here
        </h1>
      </div>
    </main>
  );
};

export default Hero;
