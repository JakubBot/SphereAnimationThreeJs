import * as THREE from 'three';

import { scene } from './threeInit';

export const pointLight1 = new THREE.PointLight(0x0000ff, 1.2);
pointLight1.position.set(3, -1, -0.4);


export const pointLightHelper = new THREE.PointLightHelper(pointLight1, 0.2);


export const pointLight2 = new THREE.PointLight(0xff0000, 1.2);
pointLight2.position.set(-3, 1, -1.28);


export const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 0.2);

export const initLights = () => {
  scene.add(pointLight1);
  scene.add(pointLight2);
};
