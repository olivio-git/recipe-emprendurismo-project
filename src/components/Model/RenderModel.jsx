import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export function RenderModel() {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="w-full h-screen dark:bg-gradient-to-r bg-gradient-to-r
      dark:from-purple-600 from-[#1E1C48]
      dark:via-gray-400 via-gray-800
      dark:to-[#312152] to-[#312152] z-99 absolute blur-5xl"></div>
      <div className="w-[80%] h-[80%] relative">
        <Canvas camera={{ position: [2, 0, 5] }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <Model scale={[0.2, 0.2, 0.2]} />
          </Suspense> 
          <OrbitControls enableZoom={false} />
        </Canvas> 
        <div className="absolute top-0 left-0 m-4 text-white">
          <div>
            <h1 className="text-2xl">Bienvenido!</h1>
            <p className="text-sm">by oliviodev.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
