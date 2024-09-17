
import { useEffect, useLayoutEffect, useRef } from 'react'
import {useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations} from '@react-three/drei'
import { Color } from 'three'
import * as THREE from 'three'
export default function Swimmer({ ...props }) {
 const { scene, materials,animations } = useGLTF('/GoodSwimmer.gltf', )
 const group = useRef()
 const {actions, }= useAnimations(animations, group)

 const t = useRef(0);
 const animationDuration = 100;  // in seconds
  
 useFrame((state) => {
   t.current += 0.001;
   group.current.position.x = 100*Math.sin(t.current) + 100;
   actions.Swim.play()
 }, 1);
 
 setTimeout(() => {
   t.current = 0;
 }, animationDuration * 1000)

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) =>(       
      material.color = new THREE.Color('#050b1c') 
      ),)
  
    Object.assign("materials.Material.004",
      {
        envMapIntensity: 1,
        emissiveIntensity: 1,
        metalness: 1,
      })
  }, [materials])
  return <primitive object={scene} ref={group}  {...props} />
}


