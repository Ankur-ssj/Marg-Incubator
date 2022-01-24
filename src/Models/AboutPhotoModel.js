import React,{Suspense}from 'react';
import Aboutphoto from './Aboutphoto'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';

const AboutPhotoModel = () => {
  return (
    <>
    <Canvas style={{height: '100vh'}} concurrent shadows camera={{ position: [5, 1.5, 15.5], fov: 14, near: 0.01 }}>
      <ambientLight/>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2}/>
      <directionalLight intensity={1} position={[5, 8, 8]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Aboutphoto/>
        </Suspense>
      </group>
    </Canvas>
    </>
    );
};

export default AboutPhotoModel;
