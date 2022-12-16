
import './App.css';
import { useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { Effects, Environment,Lightformer } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import {  PositionalAudio,OrbitControls,Sky } from '@react-three/drei'
import Sun from './Sun'
import Island from './Island';
import { PointLight } from 'three';
import Ocean from './Ocean';
extend({ UnrealBloomPass })


function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>   
    <Canvas enableShadow shadowMap camera={{ position: [10, 30, 100], fov: 55, near: 1, far: 20000 }}>
     
      <Effects disableGamma>      
        <unrealBloomPass threshold={1} strength={0} radius={3} />
      </Effects>
     
      <Sun color={[1, 2, 0.1]} rotation={[0.54,-0.6,1]} position={[67, 39, -4]} scale={2.5}>
        <circleGeometry args={[0.8, 64]} />
      </Sun> *
      
      <PositionalAudio autoplay loop url="/seawave.wav" distance={10} />  


    

   <directionalLight
  intensity={0.5}
  castShadow
  shadow-mapSize-height={512}
  shadow-mapSize-width={512}
/>
       <Island  receiveShadow scale ={2.21} position={[-1.3,-2.3,5.1]} rotation={[-0.22,-1.45, 6.06]}/>
       
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
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.8} /> 
      <OrbitControls />
      </Canvas>
   </div>
  );
}

export default App;
