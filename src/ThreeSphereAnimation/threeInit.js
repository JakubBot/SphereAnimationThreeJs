import * as THREE from 'three';

export const scene = new THREE.Scene();
let { innerWidth, innerHeight } = window;

export const camera = new THREE.PerspectiveCamera(
  65,
  innerWidth / innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 2);

export const renderer = new THREE.WebGLRenderer({ alpha: true });

export const initScene = () => {
  let canvas = document.querySelector('.webgl');

  let { innerWidth, innerHeight } = window;
  renderer.setSize(innerWidth, innerHeight);
  renderer.render(scene, camera);

  canvas.appendChild(renderer.domElement);
};

export const updateScene = () => {
  let { innerWidth, innerHeight } = window;

  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}