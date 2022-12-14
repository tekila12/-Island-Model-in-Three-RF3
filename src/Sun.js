import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Preload } from '@react-three/drei'
import { Color } from 'three'


export default function Sun({ ...props }) {

    const { scene, materials } = useGLTF('/sun.gltf')

    
    useLayoutEffect(() => {
      Object.values(materials).forEach((material) => (
      material.roughness = 1, 
      material.color= Color[isColor],
      material.emmisive=Color ),
    )
      console.log(materials)
      Object.assign("materials.Material.002", {
        envMapIntensity:1,
        emissiveIntensity: 1,
        metalness:1,
      })
    }, [materials])

    
    return <primitive object={scene}  {...props} />
  }