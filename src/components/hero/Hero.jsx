import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import spiderMusic from "/src/assets/spiderman2099.mp3";
gsap.registerPlugin(SplitText);

export default function Hero({ timeline }) {
  const titleRef = useRef();
  const [music, setMusic] = useState(true);
  const [musicStatus, setMusicStatus] = useState('Play sound');
  let musicRef = useRef();

  


  function musicControl() {
    music ?  setMusicStatus('pause sound') : setMusicStatus('play sound')
    music ? musicRef.current.play() : musicRef.current.pause() 
    setMusic((music) => !music);
  }

  useLayoutEffect(()=>{
    gsap.to(".sound-charts li:nth-child(odd)", {
      height: 5,
      stagger: 0.1,
      yoyo: true,
      repeat: -1,
     })
     gsap.to(".sound-charts li:nth-child(even)", {
     height: 4,
     delay: 0.3,
     yoyo: true,
     repeat: -1,
   });
  },[])

  useLayoutEffect(() => {

    timeline &&
      timeline.from(".fadeIn", {
        ease: "power4.in",
        duration: 1.5,
        opacity: 0,
        stagger:.5,
        y: -20,
      });
   
  }, [timeline]);

  return (
    <section className="relative w-full h-full p-10 md:p-20 hero">
      <audio loop ref={musicRef} src={spiderMusic}></audio>
      <div className="flex fadeIn text-red  justify-between items-center">
        <p className="text-center">earth-928</p>
        <p className=" text-mainblue font-bold text-3xl ">2099</p>
        <button className="playButton capitalize flex gap-3  border-b" onClick={musicControl}>
          {musicStatus}
          <ul className="sound-charts flex justify-center items-center gap-1  h-5 ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className=" fadeIn name text-[100px] md:text-[200px] lg:text-[300px] xl:text-[350px] z-10">miguel</h1>
        <h1 className="fadeIn name text-[100px] md:text-[200px] lg:text-[300px] xl:text-[350px] -mt-16 md:-mt-32 lg:-mt-64  z-0">o'hara</h1>
      <p className=" fadeIn lg:w-1/5 ">I'm not like the others. I don't always like what I have to do. But I know I have to be the one to do it.</p>
      <p className=" fadeIn absolute bottom-10 flex flex-col items-center gap-3  scroll-text">scroll down</p>
      </div>
     
    </section>
  );
}
