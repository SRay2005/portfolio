"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

const MAX_RADIUS = 35
const RING_THICKNESS = 0.05

function CameraZoom({ progress }: { progress: number }) {
  const { camera } = useThree()

  useFrame(() => {
    camera.position.z = 14 - progress * 9
  })

  return null
}

function Sparks({ progress }: { progress: number }) {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, angles, speed } = useMemo(() => {
    const count = 1500
    const positions = new Float32Array(count * 3)
    const angles = new Float32Array(count)
    const speed = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      angles[i] = Math.random() * Math.PI * 2
      speed[i] = 0.02 + Math.random() * 0.03

      positions[i * 3] = 0
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3
    }

    return { positions, angles, speed }
  }, [])

  useFrame(() => {
    if (!pointsRef.current) return

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    const portalRadius = MAX_RADIUS * progress

    for (let i = 0; i < angles.length; i++) {
      angles[i] += speed[i]

      const noise = (Math.random() - 0.5) * 0.4
      const r = portalRadius + 0.4 + noise   // ALWAYS OUTSIDE RING

      pos[i * 3] = Math.cos(angles[i]) * r
      pos[i * 3 + 1] = Math.sin(angles[i]) * r
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#ffb347"
        transparent
        opacity={1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function CoreRing({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      const portalRadius = MAX_RADIUS * progress
      meshRef.current.scale.set(portalRadius, portalRadius, 1)
      meshRef.current.rotation.z += 0.02

      const material = meshRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 10 + Math.sin(Date.now() * 0.02) * 2
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, RING_THICKNESS, 32, 200]} />
      <meshStandardMaterial
        color="#ffb347"
        emissive="#ff8c00"
        emissiveIntensity={10}
      />
    </mesh>
  )
}

function BlackHole({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      const portalRadius = MAX_RADIUS * progress
      const blackRadius = Math.max(portalRadius - RING_THICKNESS * 2, 0.01)
      meshRef.current.scale.set(blackRadius, blackRadius, 1)
    }
  })

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[1, 64]} />
      <meshBasicMaterial color="black" />
    </mesh>
  )
}

export default function PortalTransition() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let value = 0
    const interval = setInterval(() => {
      value += 0.01   // portal opening speed
      setProgress(Math.min(value, 1))
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="portal">
      <Canvas camera={{ position: [0, 0, 14] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 5]} intensity={10} />

        <CameraZoom progress={progress} />
        <CoreRing progress={progress} />
        <Sparks progress={progress} />
        <BlackHole progress={progress} />
      </Canvas>
    </div>
  )
}