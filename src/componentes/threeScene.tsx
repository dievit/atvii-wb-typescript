import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Crie a cena
    const scene = new THREE.Scene();
    
    // Crie a câmera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    // Crie o renderizador
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Adicione um cubo à cena
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00acc1 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Limpeza
    return () => {
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeScene;
