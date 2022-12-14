import logo from './logo.svg';
import './App.css';
import {Canvas} from '@react-three/fiber'
import { Environment, Lightformer, PositionalAudio } from '@react-three/drei'
import Sun from './Sun'



function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas className='canvas' >
    <ambientLight intensity={0.6} />
      <spotLight
        angle={0.12}
        penumbra={0.1}
        position={[10, 0, -10]}
        intensity={40}
        onUpdate={(self) => {
          self.target.position.set(-10, 0, 0)
          self.target.updateMatrixWorld()
        }}
      />
      <Sun scale={0.25} position={[-1.5, -2.55, 0]} color={'red'}/>
      <Environment resolution={102}>
        {/* Ceiling */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
   
        {/* Key */}
        <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        
      </Environment> 
    

      <PositionalAudio autoplay loop url="/seawave.wav" distance={5} />
   
      </Canvas>
   </div>
  );
}

export default App;
