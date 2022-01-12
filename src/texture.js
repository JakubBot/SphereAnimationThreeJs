import * as THREE from 'three';

export const getTexture = (map) => {
  const textureLoader = new THREE.TextureLoader();
  return textureLoader.load(map);
};
