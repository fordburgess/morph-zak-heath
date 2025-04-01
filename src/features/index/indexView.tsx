import { useGLTF, OrbitControls, Html, useProgress } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useState } from 'react';

const Model = () => {
  const { scene } = useGLTF('/models/homepage-centered-2.gltf');
  // console.log({ children: scene.children })

  return <primitive object={scene} scale={1} />
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(2)} % loaded</Html>
}

function Camera({ position }: { position: [number, number, number] }) {
  let firstPosition = [19.212228258264435, 0.41714997071422766, 0.7619009365908213];
  let secondPosition = [2.797993605538616, 1.0577994615937691, 0.1201671445511077];

  useFrame((state) => {
    state.camera.position.lerp({ x: position[0], y: position[1], z: position[2] }, 0.1)
    state.camera.lookAt(0, 0, 0)
  })

  return null;
}

function LogCameraPos() {
  useFrame(({ camera }) => {
    // console.log(`Camera Position: ${camera.position.toArray()}`);
  });
  return null;
}

const LampLabel = () => {
  const { scene } = useGLTF('/models/homepage-centered-2.gltf');
  const lamp = scene.getObjectByName('Lamp_Floor_011');

  console.log(lamp)

  if (!lamp) {
    return null
  }
  else {
    return (
      <Html position={[-1.2615314722061157, -0.7478033304214478, -0.55021071434021]} center>
        <h1>This is a lamp</h1>
      </Html>
    )
  }
}

const IndexView = () => {
  const [position, setPosition] = useState<[number, number, number]>([7.522989765773617, 0.21524799549007892, 0.40058711363145777])


  return (
    <div className="canvas-container">
      <Canvas onClick={() => setPosition([2.797993605538616, 1.0577994615937691, 0.1201671445511077])}>
        <Camera position={position} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={<Loader />}>
          <Model/>
          <LampLabel />
        </Suspense>
        <LogCameraPos />
      </Canvas>
    </div>
  )
}

export default IndexView;
