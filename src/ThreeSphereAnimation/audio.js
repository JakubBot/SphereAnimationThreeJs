import * as THREE from 'three';
import { camera } from './threeInit';
import Music from './Origami.mp3';

export const audioInit = () => {
  const listener = new THREE.AudioListener();
  camera.add(listener);
  
  const sound = new THREE.Audio(listener);
  
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(Music, (buffer) => {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.2);
    sound.offset = 10;
    // sound.play();
  });
  
}

