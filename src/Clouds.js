import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Preload } from '@react-three/drei'
import { Color } from 'three'
export default function Island({ ...props }) {
  const { scene, materials } = useGLTF('/fluffy_cloud.glb',)
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) =>(
        
      material.emmisive = 2,
      material.color = new THREE.Color('#095B93') 
      ),)
    console.log(materials)
    Object.assign("materials.Material.004",
      {
        envMapIntensity: 1,
        emissiveIntensity: 1,
        metalness: 1,
      })
  }, [materials])
  return <primitive object={scene}  {...props} />
}