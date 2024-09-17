
import './App.css';
import { Suspense, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { Effects, Environment, Lightformer, useProgress, Text, Center } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import { PositionalAudio, OrbitControls, Sky } from '@react-three/drei'
import Sun from './Sun'
import { Island } from './Island';
import { PointLight } from 'three';
import Ocean from './Ocean';
import Clouds from './Clouds'
import Dolphin from './Dolphin'
import { Cloud } from '@react-three/drei';
import Swimmer from './Swimmer'


extend({ UnrealBloomPass })

  const Loader = () => {
    const {progress} = useProgress()
    return <Center maxWidth={10}>
      <Text maxWidth={50}   center>Loading 3D Model.  It can take some time {progress.toFixed(2)} %  </Text>
    </Center>
  }




function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas enableShadow shadowMap camera={{ position: [90, 80, 150], fov: 55, near: 1, far: 20000 }}>
        <Suspense fallback={<Loader />}>
          <Effects disableGamma>
            <unrealBloomPass threshold={0} strength={0} radius={1} />
          </Effects>
          <directionalLight
            color="white"
            intensity={1}
            position={[800, 120, 1000]}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <ambientLight intensity={0.5} />
          <Island receiveShadow castShadow scale={2.21} position={[-1.3, -2.3, 5.1]} rotation={[-0.22, -1.45, 6.06]} />
          <Clouds scale={449.21} position={[-668.5, -236.3, -1998.1]} />
          <group>
            <Dolphin receiveShadow castShadow scale={9.21} position={[-608.5, 14.3, -698.1]} rotation={[-0.33, -1.45, 7.06]} />
            <directionalLight
              color="skyblue"
              intensity={2}
              position={[-608.5, 50, -698.1]}
              target-position={[-608.5, 14.3, -698.1]}
              castShadow
            />
          </group>
          <group>
            <Swimmer receiveShadow castShadow scale={0.91} position={[801.8, -8.8, 123.1]} rotation={[0, 1, 0]} />
            <directionalLight
              color="orange"
              intensity={1.5}
              position={[801.8, 20, 10.1]}
              target-position={[801.8, -8.8, 10.1]}
              castShadow
            />
          </group>
          <PositionalAudio autoplay loop url="/seawave.wav" distance={5} />
          <Ocean />
          <Sky scale={1000} sunPosition={[800, 120, 1000]} azimuth={0.25} turbidity={0.9} />

          <OrbitControls />
        </Suspense>

      </Canvas>
    </div>
  );
}

export default App;
