

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Island(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/GoodBeach3.glb')
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Roundcube" geometry={nodes.Roundcube.geometry} material={materials['Material.003']} position={[0, 0.67, 0]} />
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.004']} position={[-1.99, 1.51, -0.25]} scale={0.86}>
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.006']} position={[-0.04, 5.86, 1.39]} rotation={[-3.13, 0.99, -2.97]} scale={[0.81, 0.78, 0.86]}>
            <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.006']} rotation={[-3.12, -1.05, -3.13]} scale={[1.05, 1, 0.95]} />
            <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.006']} position={[-0.09, 0, 0.14]} rotation={[-3.13, 0, -Math.PI]} />
            <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.006']} position={[0.02, -0.03, -0.03]} rotation={[-3.12, 1.05, 3.13]} scale={[0.96, 1, 1.05]} />
            <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.006']} rotation={[-0.02, 1.05, 0.01]} scale={[1.05, 1, 0.95]} />
            <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.006']} rotation={[-0.02, -1.05, -0.01]} scale={[0.96, 1, 1.05]} />
            <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['Material.006']} rotation={[-3.13, -0.52, -3.14]} scale={[0.87, 0.8, 0.74]} />
            <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['Material.006']} rotation={[-1.57, 1.56, 1.57]} scale={[0.83, 0.8, 0.78]} />
            <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials['Material.006']} rotation={[-0.01, -0.52, 0]} scale={[0.87, 0.8, 0.74]} />
          </mesh>
        </mesh>
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.004']} position={[-0.81, 1.45, -2.01]} rotation={[0, 0, 0.1]} scale={0.71}>
          <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials['Material.006']} position={[0, 5.85, 1.39]} rotation={[3.03, 0.9, -2.76]} scale={[0.72, 0.69, 0.76]}>
            <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials['Material.006']} rotation={[-3.12, -1.05, -3.13]} scale={[1.05, 1, 0.95]} />
            <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials['Material.006']} position={[-0.09, 0, 0.14]} rotation={[-3.13, 0, -Math.PI]} />
            <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={materials['Material.006']} position={[0.02, -0.03, -0.03]} rotation={[-3.12, 1.05, 3.13]} scale={[0.96, 1, 1.05]} />
            <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials['Material.006']} rotation={[-0.02, 1.05, 0.01]} scale={[1.05, 1, 0.95]} />
            <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials['Material.006']} rotation={[-0.02, -1.05, -0.01]} scale={[0.96, 1, 1.05]} />
            <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials['Material.006']} rotation={[-3.13, -0.52, -3.14]} scale={[0.87, 0.8, 0.74]} />
            <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={materials['Material.006']} rotation={[-1.57, 1.56, 1.57]} scale={[0.83, 0.8, 0.78]} />
            <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={materials['Material.006']} rotation={[-0.01, -0.52, 0]} scale={[0.87, 0.8, 0.74]} />
          </mesh>
        </mesh>
        <group name="Vert" position={[1.86, 1.79, -0.08]} rotation={[-0.01, -0.07, -0.02]}>
          <mesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Material} />
          <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials['Material.005']} />
          <mesh name="Vert001" geometry={nodes.Vert001.geometry} material={materials['Material.004']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/GoodBeach3.glb')
