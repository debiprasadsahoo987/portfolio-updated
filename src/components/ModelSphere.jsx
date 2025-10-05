import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModelSphere(props) {
  const { nodes, materials } = useGLTF("/models/beautiful_sphere.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Sphere001_3DMGlass(Real)_0"].geometry}
        material={materials["3DM.GlassReal"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={97.64}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_3DMGold_0.geometry}
        material={materials["3DM.Gold"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/models/beautiful_sphere.glb");
