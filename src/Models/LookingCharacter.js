import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber'
import Lookingnew from './Lookingnew'
import {OrbitControls} from '@react-three/drei';

const LookingCharacter = () => {
  return (
    <>
       <Canvas style={{height: '100vh'}} concurrent shadows camera={{ position: [1, 1.5, 25.5], fov: 75, near: 0.01 }}>
      <ambientLight/>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2}/>
      <directionalLight intensity={1} position={[5, 8, 8]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} 
          shadow-camera-far={50}
          shadow-camera-left = {-10}
          shadow-camera-right = {10}
          shadow-camera-top = {20}
          shadow-camera-bottom = {-20} />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Lookingnew/>
        </Suspense>
      </group>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -13, -10]} receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={.2} />
      </mesh>
    </Canvas>
        </>
    );
};

export default LookingCharacter;
