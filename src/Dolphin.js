import * as THREE from 'three'
import { useEffect, useLayoutEffect, useRef } from 'react'
import {useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations} from '@react-three/drei'
import { Color } from 'three'
export default function Island({ ...props }) {
  const { scene, materials,animations } = useGLTF('/dolphin.glb', )
 const group = useRef()
  useFrame((_, delta) => {
    group.current.rotation.x += 1.5 * delta
  })

const {actions, mixer}= useAnimations(animations, group)
useEffect(()=>{
    actions.DolphinAnimatin.play()
},[mixer,])



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
  return <primitive object={scene} ref={group} {...props} />
}