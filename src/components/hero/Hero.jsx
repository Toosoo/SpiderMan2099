import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Hero({ timeline }) {
  const titleRef = useRef();

  useLayoutEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        console.log("hero");
      },
    });
  }, [timeline]);

  return (
    <section className="relative w-full h-full p-10 md:p-20 hero">
      <div className="flex flex-col justify-center items-center text-center gap-24">
        <h1 className="name tracking-widest opacity-0" ref={titleRef}>
          2099
        </h1>
        <p className=" lg:w-1/4 text-xl">I'm not like the others. I don't always like what I have to do. But I know I have to be the one to do it.</p>
      </div>
      <p className="absolute bottom-10 hidden lg:block text-mainblue">earth-928</p>
      <p className="absolute bottom-10 flex flex-col items-center gap-3 left-1/2 text-xl">
        scroll
        <svg className="floating" width="20" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.02928 29.446C0.61609 29.0328 0.409492 28.5462 0.409492 27.9862C0.409492 27.4262 0.61609 26.9406 1.02928 26.5293C1.44248 26.1161 1.92908 25.9095 2.48908 25.9095C3.04908 25.9095 3.5347 26.1161 3.94595 26.5293L12.1126 34.696L12.1126 2.9043C12.1126 2.36958 12.3192 1.89562 12.7324 1.48242C13.1456 1.06923 13.6196 0.86263 14.1543 0.86263C14.689 0.86263 15.163 1.06923 15.5762 1.48242C15.9894 1.89562 16.196 2.36958 16.196 2.9043L16.196 34.696L24.3626 26.5293C24.7758 26.1161 25.2624 25.9095 25.8224 25.9095C26.3824 25.9095 26.8681 26.1161 27.2793 26.5293C27.6925 26.9425 27.8991 27.4291 27.8991 27.9891C27.8991 28.5491 27.6925 29.0347 27.2793 29.446L15.6126 41.1127C15.1994 41.5259 14.7128 41.7325 14.1528 41.7325C13.5928 41.7325 13.1072 41.5259 12.696 41.1127L1.02928 29.446Z"
            fill="white"
          />
        </svg>
      </p>
    </section>
  );
}
