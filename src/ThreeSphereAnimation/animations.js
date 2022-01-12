import * as THREE from 'three';
import { sphere } from './mesh';
import { renderer, scene, camera } from './threeInit';

export const sphereRotation = () => {
  const clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    sphere.rotation.y = 0.5 * elapsedTime;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  tick();
};

export const spherePosition = (e) => {
  let sizeX = window.innerWidth / 2;
  let sizeY = window.innerHeight / 2;
  let x = e.clientX;
  let y = e.clientY;

  sphere.position.x = (sizeX - x) * 0.001;
  sphere.position.y = (y - sizeY) * 0.001;
}