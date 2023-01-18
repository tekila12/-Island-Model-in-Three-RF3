import * as THREE from 'three'
import { useEffect, useLayoutEffect, useRef } from 'react'
import {useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations} from '@react-three/drei'
import { Color } from 'three'
export default function Island({ ...props }) {
  const { scene, materials,animations } = useGLTF('/GoodSwimmer.gltf', )
  const group = useRef()
 const {actions, }= useAnimations(animations, group)

//   useFrame((_, delta) => {
//     group.current.rotation.x += 1.5 * delta
//   })

function handlePress() {
 
  try {
    // play the Spin1 animation action
    actions.Swim.play();
  } catch (error) {
    console.error(error);
  }
}


useFrame(() => {
  group.current.addEventListener('mousedown', handlePress);
});








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
  return <primitive object={scene} ref={group} onClick={handlePress} {...props} />
}