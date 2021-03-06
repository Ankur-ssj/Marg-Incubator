/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/lookingnew.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.looking.play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" userData={{ name: 'Armature' }}>
          <group position={[0, -12, 0]} scale={13.01}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials['Wolf3D_Glasses.001']}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
            userData={{ name: 'Wolf3D_Glasses' }}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials['Wolf3D_Teeth.001']}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            userData={{
              targetNames: [
                'mouthOpen',
                'mouthSmile',
                'eyesClosed',
                'eyesLookUp',
                'eyesLookDown',
                'eyeBlinkLeft',
                'eyeSquintLeft',
                'eyeWideLeft',
                'eyeBlinkRight',
                'eyeSquintRight',
                'eyeWideRight',
                'jawForward',
                'jawLeft',
                'jawRight',
                'jawOpen',
                'mouthClose',
                'mouthFunnel',
                'mouthPucker',
                'mouthLeft',
                'mouthRight',
                'mouthSmileLeft',
                'mouthSmileRight',
                'mouthFrownLeft',
                'mouthFrownRight',
                'mouthDimpleLeft',
                'mouthDimpleRight',
                'mouthStretchLeft',
                'mouthStretchRight',
                'mouthRollLower',
                'mouthRollUpper',
                'mouthShrugLower',
                'mouthShrugUpper',
                'mouthPressLeft',
                'mouthPressRight',
                'mouthLowerDownLeft',
                'mouthLowerDownRight',
                'mouthUpperUpLeft',
                'mouthUpperUpRight',
                'browDownLeft',
                'browDownRight',
                'browInnerUp',
                'browOuterUpLeft',
                'browOuterUpRight',
                'cheekPuff',
                'cheekSquintLeft',
                'cheekSquintRight',
                'noseSneerLeft',
                'noseSneerRight',
                'viseme_sil',
                'viseme_PP',
                'viseme_FF',
                'viseme_TH',
                'viseme_DD',
                'viseme_kk',
                'viseme_CH',
                'viseme_SS',
                'viseme_nn',
                'viseme_RR',
                'viseme_aa',
                'viseme_E',
                'viseme_I',
                'viseme_O',
                'viseme_U',
              ],
              name: 'Wolf3D_Teeth',
            }}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={nodes.EyeLeft.material}
            skeleton={nodes.EyeLeft.skeleton}
            userData={{ name: 'EyeLeft' }}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={nodes.EyeRight.material}
            skeleton={nodes.EyeRight.skeleton}
            userData={{ name: 'EyeRight' }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials['Wolf3D_Outfit_Footwear.001']}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            userData={{ name: 'Wolf3D_Outfit_Footwear' }}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials['Wolf3D_Hair.001']}
            skeleton={nodes.Wolf3D_Hair.skeleton}
            userData={{ name: 'Wolf3D_Hair' }}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials['Wolf3D_Skin.001']}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            userData={{
              targetNames: [
                'mouthOpen',
                'mouthSmile',
                'eyesClosed',
                'eyesLookUp',
                'eyesLookDown',
                'eyeBlinkLeft',
                'eyeSquintLeft',
                'eyeWideLeft',
                'eyeBlinkRight',
                'eyeSquintRight',
                'eyeWideRight',
                'jawForward',
                'jawLeft',
                'jawRight',
                'jawOpen',
                'mouthClose',
                'mouthFunnel',
                'mouthPucker',
                'mouthLeft',
                'mouthRight',
                'mouthSmileLeft',
                'mouthSmileRight',
                'mouthFrownLeft',
                'mouthFrownRight',
                'mouthDimpleLeft',
                'mouthDimpleRight',
                'mouthStretchLeft',
                'mouthStretchRight',
                'mouthRollLower',
                'mouthRollUpper',
                'mouthShrugLower',
                'mouthShrugUpper',
                'mouthPressLeft',
                'mouthPressRight',
                'mouthLowerDownLeft',
                'mouthLowerDownRight',
                'mouthUpperUpLeft',
                'mouthUpperUpRight',
                'browDownLeft',
                'browDownRight',
                'browInnerUp',
                'browOuterUpLeft',
                'browOuterUpRight',
                'cheekPuff',
                'cheekSquintLeft',
                'cheekSquintRight',
                'noseSneerLeft',
                'noseSneerRight',
                'viseme_sil',
                'viseme_PP',
                'viseme_FF',
                'viseme_TH',
                'viseme_DD',
                'viseme_kk',
                'viseme_CH',
                'viseme_SS',
                'viseme_nn',
                'viseme_RR',
                'viseme_aa',
                'viseme_E',
                'viseme_I',
                'viseme_O',
                'viseme_U',
              ],
              name: 'Wolf3D_Head',
            }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials['Wolf3D_Outfit_Bottom.001']}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            userData={{ name: 'Wolf3D_Outfit_Bottom' }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials['Wolf3D_Outfit_Top.001']}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            userData={{ name: 'Wolf3D_Outfit_Top' }}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials['Wolf3D_Body.001']}
            skeleton={nodes.Wolf3D_Body.skeleton}
            userData={{ name: 'Wolf3D_Body' }}
          />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/lookingnew.glb')
