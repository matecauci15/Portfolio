import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber'

const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene)
    const skeRef = useRef()

    useFrame((_, delta) =>{
        if(isRotating){
            skeRef.current.rotation.y += 0.15 * delta
        }
    })

  return (
    <mesh ref={skeRef}>
        <primitive object={sky.scene}/>
    </mesh> 
  )
}

export default Sky