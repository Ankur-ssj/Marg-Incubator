import React, {Suspense} from 'react';
import Newhands from './Newhands'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';


const Handsmodel = () => {
  return (
    <>
    <Canvas style={{backgroundColor: '#42A5F5'}} concurrent shadows camera={{ position: [34, 1.5, 45.5], fov: 60, near: 0.01 }}>
      <ambientLight/>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2}/>
      <directionalLight intensity={1} position={[5, 8, 8]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Newhands/>
        </Suspense>
      </group>
    </Canvas>
    </>
    );
};

export default Handsmodel;
