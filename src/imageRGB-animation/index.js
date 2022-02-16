import { useEffect } from 'react';
import * as THREE from 'three';
import Texture from './1.jpg';
import vertex from './vertex.glsl';
import fragment from './fragment.glsl';
import './rgb.css';

const lerp = (start, end, time) => {
  return start * (1 - time) + end * time;
};

const ImageRGBAnimation = () => {
  useEffect(() => {
    const container = document.querySelector('.canvas');
    const { innerWidth, innerHeight } = window;
    const loader = new THREE.TextureLoader();
    const texture = loader.load(Texture);
    let targetX = 0;
    let targetY = 0;
    let sizes = new THREE.Vector2(0, 0);
    let offset = new THREE.Vector2(0, 0);
    let isCursorActive = false;
    const uniforms = {
      uTexture: { value: texture },
      uAlpha: { value: 1.0 },
      uOffset: { value: new THREE.Vector2(0, 0) },
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      innerWidth / innerHeight,
      0.01,
      1000
    );
    camera.position.set(0, 0, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    container.appendChild(renderer.domElement);
    const planeGeo = new THREE.PlaneGeometry(1, 1, 32, 32);
    const planeMaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: uniforms,
    });

    const plane = new THREE.Mesh(planeGeo, planeMaterial);
    sizes.set(250, 250);
    plane.scale.set(sizes.x, sizes.y, 1);
    plane.position.set(offset.x, offset.y, 0);
    
    scene.add(plane);

  

    const loop = () => {
      offset.x = lerp(offset.x,targetX,0.1)
      offset.y = lerp(offset.y,targetY,0.1)

      uniforms.uOffset.value.set(
        (targetX - offset.x) * 0.0005,
        (targetY - offset.y) * 0.0005,
      )

      plane.position.set(
        offset.x - window.innerWidth / 2,
        -offset.y + window.innerHeight / 2
      );

    

      isCursorActive
        ? (uniforms.uAlpha.value = lerp(uniforms.uAlpha.value, 1.0, 0.1))
        : (uniforms.uAlpha.value = lerp(uniforms.uAlpha.value, 0.0, 0.1));

      renderer.render(scene, camera);

      requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window;

      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });

    container.addEventListener('mouseenter', () => {
      isCursorActive = true;
    });
    container.addEventListener('mouseleave', () => {
      isCursorActive = false;
    });

    return () => window.location.reload();
  }, []);

  return (
    <>
      <div className="canvas"></div>
    </>
  );
};

export default ImageRGBAnimation;
// offset.x = lerp(offset.x, targetX, 0.1);
// offset.y = lerp(offset.y, targetY, 0.1);

// uniforms.uOffset.value.set(
//   (targetX - offset.x) * 0.0005,
//   (targetY - offset.y) * 0.0005
// );
