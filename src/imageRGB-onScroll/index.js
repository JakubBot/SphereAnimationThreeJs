import { useEffect } from 'react';
import * as THREE from 'three';
import Texture from './1.jpg';
import vertex from './vertex.glsl';
import fragment from './fragment.glsl';
import './rgb.css';

function lerp(start, end, time) {
  return start * (1 - time) + end * time;
}

const ImageRGBAnimationScroll = () => {
  useEffect(() => {
    const container = document.querySelector('.canvas');
    const { innerWidth, innerHeight } = window;
    const loader = new THREE.TextureLoader();
    const texture = loader.load(Texture);
    let scrollFromTop = 0;
    let scrolled = 0;
    const uniforms = {
      uTexture: { value: texture },
      uOffset: { value: new THREE.Vector2(0, 0) },
      uTarget: { value: new THREE.Vector2(0, 0) },
      uDistorition: { value: new THREE.Vector2(0, 0) },
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      innerWidth / innerHeight,
      0.01,
      1000
    );
    camera.position.set(0, 0, 5);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    container.appendChild(renderer.domElement);
    const planeGeo = new THREE.PlaneGeometry(1, 1.7, 32, 32);
    const planeMaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: uniforms,
    });

    const plane = new THREE.Mesh(planeGeo, planeMaterial);

    scene.add(plane);

    window.addEventListener('scroll', (e) => {
      scrollFromTop = window.scrollY;
    });

    const loop = () => {
      scrolled = lerp(scrolled, scrollFromTop, 0.08);

      uniforms.uOffset.value.set(
        (scrollFromTop - scrolled) * 0.0002,
        (scrollFromTop - scrolled) * 0.0002
      );

      uniforms.uDistorition.value.set(0, (scrollFromTop - scrolled) * 0.001);

      renderer.render(scene, camera);

      requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window;

      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });

    return () => window.location.reload();
  }, []);

  return (
    <>
      <div className="canvas"></div>
    </>
  );
};

export default ImageRGBAnimationScroll;
