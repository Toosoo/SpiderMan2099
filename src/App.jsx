import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import Spiderman from "./components/spiderman/Spiderman";
import { Suspense } from "react";




export default function App() {
  return(  
    <>
    {/* <Intro/> */}
    <Suspense fallback={<Intro/>}>
    <Nav/>
    <Spiderman />
    </Suspense>
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