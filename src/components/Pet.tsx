import { useRef } from 'react'
import { Mesh } from 'three'

export default function Pet() {
  const meshRef = useRef<Mesh>(null)

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}
