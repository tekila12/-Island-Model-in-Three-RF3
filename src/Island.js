import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Preload } from '@react-three/drei'
import { Color } from 'three'
export default function Island({ ...props }) {
  const { scene, materials } = useGLTF('/GoodBeach3.glb')
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) =>
    (material.roughness = 0,
      material.Color = Color,
      material.metalness = 0,
      material.fog = true,
      material.envMapIntensity,
      material.emissiveIntensity = 0,
      material.flatShading = false,
      material.emmisive = 1),)
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