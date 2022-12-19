import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Preload } from '@react-three/drei'
import { Color } from 'three'
export default function Island({ ...props }) {
  const { scene, materials } = useGLTF('/fluffy_cloud.glb', '/fluffy_cloud.glb', )
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.z += 1 * delta
  
  })
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) =>(       
      material.color = new THREE.Color('#050b1c') 
      ),)
    console.log(materials)
    Object.assign("materials.Material.004",
      {
        envMapIntensity: 1,
        emissiveIntensity: 1,
        metalness: 1,
      })
  }, [materials])
  return <primitive object={scene} ref={ref} {...props} />
}