import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'

extend({ Water })

export default function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/water.png')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 412,
      textureHeight: 412,
      waterNormals,
      sunDirection: new THREE.Vector3(-1,-1,2),
      elevation:1.6,
      waterColor: '#0548a6',
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals, gl]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}




