"use client";

import {
	Environment,
	Html,
	OrbitControls,
	PerspectiveCamera,
	Float,
	useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "./Model";

const ModelView = ({ width, height, setprogress }) => {
	const { progress } = useProgress();
	setprogress(progress);
	return (
		<Canvas
			style={{
				height: height,
				width: width,
			}}
			shadows="basic"
		>
			{/* <OrbitControls
				enableZoom={false}
				// maxPolarAngle={Math.PI / 2.4}
				// minPolarAngle={Math.PI / 2.4}
			/> */}
			<PerspectiveCamera
				makeDefault
				position={[0, 0.25, 5]}
				near={0.1}
				far={1000}
			/>
			<ambientLight
				color="#a1a1aa"
				intensity={3}
			/>
			<spotLight
				position={[0, 5, 3]}
				color="#fafafa"
				intensity={30}
				castShadow
			/>
			<Environment preset="city"></Environment>

			{/* <group
				rotation={[Math.PI / 15, 0, 0]}
				position={[0.25, 0, 0]}
			> */}
			{/* floor */}
			{/* <mesh
				rotation={[0, Math.PI / 6, 0]}
				position={[0, -1.125, 0]}
				receiveShadow
				castShadow
			>
				<boxGeometry
					attach="geometry"
					args={[3, 0.25, 3]}
				/>
				<meshPhongMaterial
					attach="material"
					color="#27272a"
					emissive="#18181b"
					shininess={100}
				/>
			</mesh> */}

			{/* backwall */}
			{/* <mesh
					rotation={[0, Math.PI / 6, 0]}
					position={[-0.7, 0.75, -1.2]}
					receiveShadow
					castShadow
				>
					<boxGeometry
						attach="geometry"
						args={[3, 4, 0.25]}
					/>
					<meshPhongMaterial
						attach="material"
						color="#27272a"
						emissive="#18181b"
						shininess={100}
					/>
				</mesh> */}

			{/* right wall */}
			{/* <mesh
					rotation={[0, Math.PI / 1.5, 0]}
					position={[1.3, 0.75, -0.75]}
					receiveShadow
					castShadow
				>
					<boxGeometry
						attach="geometry"
						args={[3, 4, 0.25]}
					/>
					<meshPhongMaterial
						attach="material"
						color="#27272a"
						emissive="#18181b"
						shininess={100}
					/>
				</mesh> */}

			{/* <Stage preset="upfront"> */}
			<Float>
				<Suspense
					fallback={
						<Html>
							<div>Loading...</div>
						</Html>
					}
				>
					<Model
						position={[0, -1.5, 0]}
						scale={0.007}
						rotation={[0, -Math.PI / 6, 0]}
						castShadow
						receiveShadow
					/>
				</Suspense>
			</Float>
			{/* </Stage> */}
			{/* </group> */}
		</Canvas>
	);
};

export default ModelView;
