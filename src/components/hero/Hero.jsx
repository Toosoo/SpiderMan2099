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

  // useLayoutEffect(() => {

  //   timeline &&
  //     timeline.from(".fadeIn", {
  //       ease: "power4.in",
  //       duration: 1.5,
  //       opacity: 0,
  //       stagger:.5,
  //       y: -20,
  //     });
   
  // }, [timeline]);

  return (
    <section className="relative w-full h-full px-10 md:px-20 pt-10 md:pt-15 hero">
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
      <div className="flex flex-col h-full justify-center items-center text-center ">
        <h1 className=" fadeIn name text-[100px] md:text-[200px] lg:text-[300px] xl:text-[350px] z-10">miguel</h1>
        <h1 className="fadeIn name text-[100px] md:text-[200px] lg:text-[300px] xl:text-[350px] -mt-16 md:-mt-32 lg:-mt-64  z-0">o'hara</h1>
      <p className=" fadeIn md:w-1/2 lg:w-1/4 xl:w-1/5 ">I'm not like the others. I don't always like what I have to do. But I know I have to be the one to do it.</p>
      
      <div className="flex fadeIn w-full  text-red  justify-between items-center mt-auto">
        <p>scroll down</p>
        <div className="flex justify-center items-center gap-1">
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg></a>
        </div>
      </div>
      </div>

     
    </section>
  );
}
