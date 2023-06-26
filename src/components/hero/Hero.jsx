import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText)

export default function Hero({ timeline }) {
  const titleRef = useRef();

  function stopMusic() {
    // musicRef.current.play()
    // musicRef.current.pause();
    gsap.to('.sound-charts li:nth-child(odd)',{
      height:5,
      stagger:.1,
      yoyo:true,
      repeat:-1,
    })
    gsap.to('.sound-charts li:nth-child(even)',{
      height:4,
      yoyo:true,
      repeat:-1,
      delay:.3,
    })
  }



  
  useLayoutEffect(() => {
    // let title = new SplitText(titleRef.current, {type: "chars",charsClass:'mychars'})

   timeline && timeline.from('.mychars', {
      ease: "power2.inOut",
      stagger:.1,
      duration:1.5,
      clipPath:'inset(0 0 100% 0)'
    });
   timeline && timeline.from('.quote', {
      ease: "power2.inOut",
      stagger:.1,
      duration:1,
      opacity:0,
      y:-20
    });

   timeline && timeline.from('.scroll-text', {
      
      ease: "power2.inOut",
      stagger:.1,
      duration:1,
      opacity:0,
      y:-20
    });



  }, [timeline]);

  return (
    <section className="relative w-full h-full p-10 md:p-20 hero">
      <div className="flex  justify-between items-center">

        <p className="text-center">
          2099
        </p>
        <button className="playButton flex gap-3 text-red">
          play sound 
          <ul className="sound-charts flex justify-center items-center gap-1  h-5 ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-24">
         <h1 className="name z-10" >
          miguel
        </h1>
        <h1 className="name -mt-80 z-0" >
          o'hara
        </h1> 
        
      </div>
        <p className=" quote lg:w-1/5 ">I'm not like the others. I don't always like what I have to do. But I know I have to be the one to do it.</p>
      {/* <p className="absolute bottom-10 hidden lg:block text-mainblue">earth-928</p> */}
      <p className="absolute bottom-10 flex flex-col items-center gap-3 left-1/2  scroll-text">
        scroll down
      </p>
    </section>
  );
}
