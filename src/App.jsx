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
      tl.pause();
      setTl(tl);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Suspense fallback={<Intro />}>
        <Spiderman timeline={tl} />
      </Suspense>
      <Intro timeline={tl} />
      <Hero timeline={tl} />
      {/* <About /> */}
    </>
  );
}

