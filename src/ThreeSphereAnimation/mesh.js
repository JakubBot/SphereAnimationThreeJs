import * as THREE from 'three';
import { getTexture } from './texture';
import NormalMap from './NormalMap.png';

import { scene } from './threeInit';

export let sphere;
export const initMesh = () => {
  const normalMap = getTexture(NormalMap);
  const sphereGeometry = new THREE.SphereGeometry(0.5, 64, 64);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x292929,
    metalness: 0.7,
    roughness: 0.7,
    normalMap,
  });
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);
};
