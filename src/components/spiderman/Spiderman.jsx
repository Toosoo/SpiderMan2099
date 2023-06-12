import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, OrbitControls, Sparkles, Text, Text3D, useGLTF, useMatcapTexture, useTexture,useAnimations, Stage, Html, Image} from "@react-three/drei";
import { useControls } from "leva";
import { HueSaturation ,Bloom, EffectComposer, Glitch  } from "@react-three/postprocessing";
import { Suspense,useRef } from "react";
import spiderFont from '../../assets/spiderman.json'
let spiderman
let  glitch 




export default function Spiderman() {
   spiderman = useGLTF("./spiderman2099-v2.glb");
   
  const { rotation, position, color,intensity,hue,saturation } = useControls({
    rotation: {
      value: 3.12,
      step: 0.01,
      joystick: true,
    },
    position:{
      value:{x:-.03,y:-1.18,z:0},
      step:0.01,
     
  },
    color: "#272672",
    intensity:{
      value:5,
      step:.01
    },
    hue:{
      value:3,
      step:.01
    },
    saturation:{
      value:1.4,
      step:.01
    }

    
  });


  return (
    <Canvas camera={{ position: [0, -1, 8], fov: 10 }}>
 <EffectComposer>
       {/* <Glitch
        delay={[1.5, 2.5]}
        duration={[.2]} 
        strength={1}
        active
        columns={.1}
        ratio={.85}
        />  */}
     <HueSaturation hue={hue}  saturation={saturation}/>
      </EffectComposer>     
      
      <pointLight color={'blue'} intensity={.2} position={[-.28,0,3.95]} />
      
      <color args={["#000"]} attach="background" />
      <Environment preset={null} files='./hdr4.hdr' blur={1}  />
      <Sparkles speed={0.1} color={'red'} size={1} count={600} scale={10} />
      
      <primitive object={spiderman.scene} rotation-y={rotation} position={ [0,-1.82,3.57] } />
   
    </Canvas>
  );
}
