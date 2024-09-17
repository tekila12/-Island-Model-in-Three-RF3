import * as THREE from 'three'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Dolphin({ ...props }) {
  const { scene, materials, animations } = useGLTF('/dolphin.glb')
  const group = useRef()
  
  useFrame((_, delta) => {
    group.current.rotation.x += 1.5 * delta
  })

  const { actions, mixer } = useAnimations(animations, group)
  
  useEffect(() => {
    actions.DolphinAnimatin.play()
  }, [mixer])

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.color = new THREE.Color('#ffffff') // Set to white to allow external lighting to affect color
      material.roughness = 0.3 // Adjust for desired shininess
      material.metalness = 0.7 // Adjust for desired metallic look
      material.envMapIntensity = 1.5 // Enhance environment map reflection
      material.needsUpdate = true // Ensure material updates are applied
    })
  }, [materials])
  
  return <primitive object={scene} ref={group} {...props} />
}