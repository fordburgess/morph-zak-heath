import './App.css'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("");

  return <primitive object={scene} scale={1} />;
}

function LogCameraPos() {
  useFrame(({ camera }) => {
    console.log(`Camera Position: ${camera.position.toArray()}`)
  })
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [31.556746, 2.2715, -7.09663], fov: 50 }} style={{ height: "100%", width: "100%", padding: 0 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
        <LogCameraPos />
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
