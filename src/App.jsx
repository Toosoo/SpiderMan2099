import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";

import Spiderman from "./components/spiderman/Spiderman";
import { Suspense } from "react";




export default function App() {
  return(  
    <>
    <Suspense fallback={<Intro/>}>
    <Spiderman />
    </Suspense>
    {/* <Intro/> */}
    <Hero/>
    <About/>
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