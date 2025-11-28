import React, { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useLoader, useFrame, ThreeEvent } from "@react-three/fiber";
import { OBJLoader, MTLLoader } from "three-stdlib";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useColorMode } from "@docusaurus/theme-common";

// 水花特效组件
const WaterSplash: React.FC<{ position: THREE.Vector3; onEnd: () => void }> = ({ position, onEnd }) => {
    const count = 15; // 粒子数量
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const timeRef = useRef(0);

    // 初始化粒子数据
    const particles = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 2, // X 轴散射
                Math.random() * 2 + 2, // 初始向上速度
                (Math.random() - 0.5) * 2 // Z 轴散射
            ),
            scale: Math.random() * 0.2 + 0.1, // 随机大小
            offset: new THREE.Vector3(
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5
            )
        }));
    }, []);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        timeRef.current += delta;

        // 动画结束
        if (timeRef.current > 1.0) {
            onEnd();
            return;
        }

        particles.forEach((particle, i) => {
            // 更新物理
            particle.velocity.y -= 9.8 * delta; // 重力
            particle.offset.add(particle.velocity.clone().multiplyScalar(delta));

            dummy.position.copy(particle.offset);
            // 随时间变小
            const life = 1.0 - timeRef.current / 1.0;
            dummy.scale.setScalar(particle.scale * life);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <group position={position}>
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
                <sphereGeometry args={[0.2, 8, 8]} />
                <meshStandardMaterial
                    color="#4fc3f7"
                    transparent
                    opacity={0.8}
                    roughness={0.1}
                    metalness={0.1}
                    emissive="#0044aa"
                    emissiveIntensity={0.2}
                />
            </instancedMesh>
        </group>
    );
};

interface ModelProps {
    scale?: number;
    onClick?: (e: ThreeEvent<MouseEvent>) => void;
}

const Model: React.FC<ModelProps> = ({ scale = 1.5, onClick }) => {
    const materials = useLoader(MTLLoader, "/cubic_logo.mtl");
    const object = useLoader(OBJLoader, "/cubic_logo.obj", (loader) => {
        materials.preload();
        (loader as OBJLoader).setMaterials(materials);
    });

    useEffect(() => {
        object.traverse((child: THREE.Object3D) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                const material = mesh.material;

                const applyFilter = (mat: THREE.Material) => {
                    (mat as THREE.MeshStandardMaterial).flatShading = true;
                    (mat as THREE.MeshStandardMaterial).transparent = false;
                    (mat as THREE.MeshStandardMaterial).alphaTest = 0.5;
                    (mat as THREE.MeshStandardMaterial).depthWrite = true;
                    (mat as THREE.MeshStandardMaterial).side = THREE.FrontSide;

                    if ((mat as THREE.MeshStandardMaterial).map) {
                        (mat as THREE.MeshStandardMaterial).map!.minFilter = THREE.NearestFilter;
                        (mat as THREE.MeshStandardMaterial).map!.magFilter = THREE.NearestFilter;
                        (mat as THREE.MeshStandardMaterial).map!.needsUpdate = true;
                    }
                    mat.needsUpdate = true;
                };

                if (Array.isArray(material)) {
                    material.forEach(applyFilter);
                } else {
                    applyFilter(material);
                }
            }
        });
    }, [object]);

    return <primitive object={object} scale={scale} position={[0, -1.0, 0]} onClick={onClick} />;
};

const SceneLights: React.FC<{ isDark: boolean }> = ({ isDark }) => {
    const mainLight = useRef<THREE.PointLight>(null);
    const auxLight = useRef<THREE.PointLight>(null);
    const bottomLight = useRef<THREE.PointLight>(null);
    const ambientLight = useRef<THREE.AmbientLight>(null);

    useFrame((state, delta) => {
        // 平滑过渡速度
        const speed = 5.0 * delta;

        // 根据主题设置目标强度
        const targetMainIntensity = isDark ? 3.5 : 2.5;
        const targetAuxIntensity = isDark ? 0.3 : 0.8;
        const targetBottomIntensity = isDark ? 0.8 : 0.3;
        const targetAmbientIntensity = isDark ? 0.4 : 1.0;

        // 插值更新
        if (mainLight.current) {
            mainLight.current.intensity = THREE.MathUtils.lerp(mainLight.current.intensity, targetMainIntensity, speed);
        }
        if (auxLight.current) {
            auxLight.current.intensity = THREE.MathUtils.lerp(auxLight.current.intensity, targetAuxIntensity, speed);
        }
        if (bottomLight.current) {
            bottomLight.current.intensity = THREE.MathUtils.lerp(
                bottomLight.current.intensity,
                targetBottomIntensity,
                speed
            );
        }
        if (ambientLight.current) {
            ambientLight.current.intensity = THREE.MathUtils.lerp(
                ambientLight.current.intensity,
                targetAmbientIntensity,
                speed
            );
        }
    });

    return (
        <>
            <ambientLight ref={ambientLight} intensity={1.0} />
            {/* 绿色主点光源 */}
            <pointLight ref={mainLight} position={[5, 5, 5]} intensity={2.5} color="#00dc82" />
            {/* 辅助白色光源 */}
            <pointLight ref={auxLight} position={[-5, 3, -5]} intensity={0.8} color="#ffffff" />
            {/* 底部补光 */}
            <pointLight ref={bottomLight} position={[0, -3, 0]} intensity={0.3} color="#00dc82" />
        </>
    );
};

interface CubicLogo3DProps {
    className?: string;
    style?: React.CSSProperties;
    /** 是否为图标模式（较小尺寸，优化的相机位置） */
    iconMode?: boolean;
}

const InteractiveScene: React.FC<{ scale: number; isDark: boolean }> = ({ scale, isDark }) => {
    const [splashes, setSplashes] = useState<{ id: number; position: THREE.Vector3 }[]>([]);

    const handleClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        setSplashes((prev) => [...prev, { id: Date.now(), position: e.point.clone() }]);
    };

    const removeSplash = (id: number) => {
        setSplashes((prev) => prev.filter((s) => s.id !== id));
    };

    return (
        <>
            <SceneLights isDark={isDark} />
            <React.Suspense fallback={null}>
                <Model scale={scale} onClick={handleClick} />
            </React.Suspense>
            {splashes.map((splash) => (
                <WaterSplash key={splash.id} position={splash.position} onEnd={() => removeSplash(splash.id)} />
            ))}
        </>
    );
};

const CubicLogo3D: React.FC<CubicLogo3DProps> = ({ className, style, iconMode = false }) => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const defaultStyle = iconMode ? { width: "100%", height: "100%" } : { width: "100%", height: "400px" };

    const cameraPosition: [number, number, number] = iconMode ? [2.2, 1.5, 2.2] : [3, 2, 3];
    const modelScale = iconMode ? 1.4 : 1.5;

    return (
        <div className={className} style={{ ...defaultStyle, ...style }}>
            <Canvas gl={{ logarithmicDepthBuffer: true }}>
                <PerspectiveCamera makeDefault position={cameraPosition} />

                <InteractiveScene scale={modelScale} isDark={isDark} />

                <OrbitControls autoRotate autoRotateSpeed={3} enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default CubicLogo3D;
