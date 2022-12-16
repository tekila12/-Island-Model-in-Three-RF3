
import './App.css';
import { useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { Effects, Environment,Lightformer } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import {  PositionalAudio } from '@react-three/drei'
import Sun from './Sun'
import Island from './Island';
import { PointLight } from 'three';
extend({ UnrealBloomPass })


function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>   
    <Canvas enableShadow shadowMap gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['blue']} />
      <Effects disableGamma>      
        <unrealBloomPass threshold={1} strength={1} radius={1} />
      </Effects>
{/*      
      <Sun color={[1, 4, 0.5]} position={[4, 3, -4]}>
        <circleGeometry args={[0.8, 64]} />
      </Sun> */}
      
      <PositionalAudio autoplay loop url="/seawave.wav" distance={10} />  

      

   <directionalLight
  intensity={0.5}
  castShadow
  shadow-mapSize-height={512}
  shadow-mapSize-width={512}
/>
       <Island  receiveShadow scale ={0.21} position={[-1,-1,2]} rotation={[-2,4.7,3.5]}/>
       
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
      </Canvas>
   </div>
  );
}

export default App;
