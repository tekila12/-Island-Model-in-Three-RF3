
import './App.css';
import { useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { Effects, Environment,Lightformer } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import {  PositionalAudio,OrbitControls,Sky } from '@react-three/drei'
import Sun from './Sun'
import {Island} from './Island';
import { PointLight } from 'three';
import Ocean from './Ocean';
import Clouds from './Clouds'
import Dolphin from './Dolphin'
import { Cloud } from '@react-three/drei';
import Swimmer from './Swimmer'
import Boat from './Boat'
extend({ UnrealBloomPass })


function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>   
    <Canvas enableShadow shadowMap camera={{ position: [10, 30, 100], fov: 55, near: 1, far: 20000 }}>
     
      <Effects disableGamma>      
        <unrealBloomPass threshold={0} strength={0} radius={1} />
      </Effects>  
      {/* <PositionalAudio autoplay loop url="/seawave.wav" distance={5} />   */}
{/* 
      <Cloud
  opacity={0.5}
  speed={0.4} // Rotation speed
  width={10} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={20} // Number of particles
/> */}
 

       <Island  receiveShadow scale ={2.21} position={[-1.3,-2.3,5.1]} rotation={[-0.22,-1.45, 6.06]}/>
       <Clouds scale ={449.21} position={[-668.5,-236.3,-1998.1]} rotation={[-0.33,-0.45, 7.06]} />
       <Dolphin scale ={9.21} position={[-608.5, 13.3,-698.1]} rotation={[-0.33,-1.45, 7.06]}/>
       <Swimmer scale ={19.21} position={[-808.6, 193.3,-698.1]} rotation={[-0.33,-1.45, 7.06]}/>
       <Boat scale ={69.21} position={[-308,293,798.1]} rotation={[-0.33,-1.45, 7.06]} />
       <Environment resolution={512}>       
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
       
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        
        <Lightformer form="ring" color="blue" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
      <Ocean />  
        <Sky scale={1000} sunPosition={[800, 120, 1000]} azimuth={0.25} turbidity={0.9} /> 
     
      <OrbitControls />
      </Canvas>
   </div>
  );
}

export default App;
