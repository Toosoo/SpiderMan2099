import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, Sparkles, useGLTF, useMatcapTexture, useTexture, useAnimations, MeshReflectorMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { HueSaturation, Bloom, EffectComposer, Glitch } from "@react-three/postprocessing";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);



export default function Spiderman({ timeline }) {
  let  spiderman = useGLTF("./spiderman2099.glb");

  
  // let spiderTl = gsap.timeline({
  //   scrollTrigger:{
  //     trigger:'#root',
  //     scrub:1,
  //     start:'top top',
  //     end:'+=2000px',
  //   }
  // })
  

  // const { rotation, position, color,intensity,hue,saturation } = useControls({
  //   rotation: {
  //     value: 3.54,
  //     step: 0.01,
  //     joystick: true,
  //   },
  //   position:{
  //     value:{x:-.03,y:-1.18,z:0},
  //     step:0.01,

  // },
  //   color: "#272672",
  //   intensity:{
  //     value:5,
  //     step:.01
  //   },
  //   hue:{
  //     value:3,
  //     step:.01
  //   },
  //   saturation:{
  //     value:1.4,
  //     step:.01
  //   }

  // });



  useLayoutEffect(() => {
   
    timeline && timeline.to(
      spiderman.scene.rotation, {
         duration: 3,
         ease: "power2.inOut",
          y:0,
          onComplete:()=>{
            let RX = gsap.quickTo(spiderman.scene.rotation, "y", { duration: 0.5, ease: "sine" });
            window.addEventListener("mousemove", (e) => {
              RX(e.pageX * 0.0001  );
            });
          }
        },0);

    timeline && timeline.to(
      spiderman.scene.position, {
         duration: 2,
          ease: "power2.inOut",
          z:0,
        },0);

       
       
       

        // spiderTl.to(spiderman.scene.rotation,{
        //   y:0, 
       
        // }) 




  }, [timeline]);




  return (
    <Canvas camera={{ position: [0, -1, 8], fov: 30 }}>
    <EffectComposer>
        <Glitch delay={[1.5, 2.5]} duration={[0.4]} strength={2} active columns={0.1} ratio={0.85} />
        <HueSaturation hue={3} saturation={1.4} />
      </EffectComposer>  

      <pointLight color={"blue"} intensity={0.2} position={[-0.28, 0, 3.95]} />
      <pointLight color={"#fff"} intensity={0.8} position={[0, 0, 3.95]} />

      
      <Environment preset={null} files="./hdr4.hdr" blur={1} />
      <Sparkles speed={0.5} color={"blue"} size={2} count={100} scale={10} />
  

      <primitive  object={spiderman.scene} rotation={[0, 7, 0]} position={[0, -7.6, -1000]} scale={4.5} />



      {/* <mesh  position={[-1,0,0]} rotation={[0,.5,0]}>
  <planeGeometry args={[10,10]} />
  <MeshReflectorMaterial
  blur={[300, 100]}
  resolution={2048}
  mixBlur={.4}
  mixStrength={60}
  roughness={.3}
  depthScale={1.2}
  minDepthThreshold={0.7}
  maxDepthThreshold={1.2}
  color="#050505"
  metalness={1.1}
  />
</mesh> */}
    </Canvas>
  );
}
