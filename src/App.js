
import './App.css';
import { useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import {  PositionalAudio } from '@react-three/drei'
import Sun from './Sun'
import Island from './Island';
extend({ UnrealBloomPass })


function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>   
    <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['blue']} />
      <Effects disableGamma>      
        <unrealBloomPass threshold={1} strength={1} radius={1} />
      </Effects>
{/*      
      <Sun color={[1, 4, 0.5]} position={[2, 0, 0]}>
        <circleGeometry args={[0.8, 64]} />
      </Sun>
      
      <PositionalAudio autoplay loop url="/seawave.wav" distance={10} />   */}

      
   
       <Island castShadow receiveShadow scale ={0.4} position={[1,-3,2]}/>
       
      </Canvas>
   </div>
  );
}

export default App;
