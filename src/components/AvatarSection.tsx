import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import React from "react";
import * as THREE from "three";

const NeuralParticles = () => {
  const count = 2000;
  const points = useRef<THREE.Points>(null);
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const layer = Math.floor(i / (count / 4));
      const layerPosition = (layer - 1.5) * 3;
      
      positions[i * 3] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 1] = layerPosition + (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
  }, []);

  React.useEffect(() => {
    if (!points.current) return;
    
    let animationFrameId: number;
    const animate = () => {
      if (points.current) {
        const positions = points.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          positions[i3 + 1] += Math.sin(Date.now() * 0.001 + i) * 0.002;
          positions[i3] += Math.cos(Date.now() * 0.001 + i) * 0.002;
        }
        points.current.geometry.attributes.position.needsUpdate = true;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [count]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
          needsUpdate={true}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#4338ca"
        transparent
        opacity={0.8}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

const AIScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ 
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        autoClear: true
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <NeuralParticles />
        <Stars 
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Suspense>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export const AvatarSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-background to-accent/20 py-16">
      <div className="absolute inset-0 opacity-70">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <AIScene />
          </Suspense>
        </ErrorBoundary>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <motion.img
                src="/lovable-uploads/543d3c0a-d60d-4103-ab73-1dc96f6de07e.png"
                alt="Amaziah Yahalom"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 mix-blend-overlay" />
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              {t("avatar.name")}
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              {t("avatar.description")}
            </p>
            <p className="text-sm text-muted-foreground">
              Marietta, GA • amaziaytower@gmail.com • (678) 748-2048
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}