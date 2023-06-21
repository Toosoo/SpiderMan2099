import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import { gsap } from "gsap";
import Spiderman from "./components/spiderman/Spiderman";
import { Suspense, useLayoutEffect, useState } from "react";

export default function App() {
  const [tl, setTl] = useState();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Suspense fallback={<Intro />}>
      <Spiderman  />
      </Suspense>
      <Intro timeline={tl} />
      <Hero timeline={tl}  />
      {/* <About /> */}
    </>
  );
}

// <small className=" text-sm mt-auto capitalize text-center">
//          spider font by
//         <a href="https://www.fontspace.com/graphicsauceco" target="_blank" className=" text-purple-800 "> graphicsauceco </a>
//         <br/>
//        & Miguel O'Hara model  by
//         <a href="https://sketchfab.com/CVRxEarth" target="_blank" className=" text-purple-800 "> CVRxEarth </a>
//       </small>
