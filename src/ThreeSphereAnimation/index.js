import React, { useEffect } from 'react';
import { initScene, updateScene } from './threeInit';
import { initMesh } from './mesh';
import { initLights } from './lights';
import { initGUI } from './threeGUI';
import { audioInit } from './audio';
import { sphereRotation, spherePosition } from './animations';

const ThreeSphereAnimation = () => {
  useEffect(() => {
    initScene();
    initMesh();
    initLights();
    initGUI();
    audioInit();
    sphereRotation();

    let canvas = document.querySelector('.webgl');

    canvas.addEventListener('mousemove', spherePosition);

    window.addEventListener('resize', updateScene);
    return () => {
      window.location.reload();
    };
  }, []);
  return (
    <>
      <div className="text">
        <h1>Feel the sphere</h1>
      </div>
      <div className="webgl" id="webgl"></div>
      <section className="section"></section>
    </>
  );
}

export default ThreeSphereAnimation;
