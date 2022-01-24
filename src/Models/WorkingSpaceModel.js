import React, {Suspense} from 'react';
import Samplenew from './Samplenew'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';

const WorkingSpaceModel = () => {
  return (
    <div>
    <Canvas style={{height: '100vh'}} concurrent shadows camera={{ position: [15, 1.5, 15.5], fov: 14, near: 0.01 }}>
      <ambientLight/>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2}/>
      <directionalLight intensity={1} position={[5, 8, 8]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Samplenew/>
        </Suspense>
      </group>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -13, -10]} receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={.2} />
      </mesh>
    </Canvas>
    </div>
  );
};

export default WorkingSpaceModel;
