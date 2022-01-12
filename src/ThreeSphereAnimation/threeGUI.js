import * as dat from 'dat.gui';

import { scene } from './threeInit';

import {
  pointLight1,
  pointLight2,
  pointLightHelper,
  pointLightHelper2,
} from './lights';

export const initGUI = () => {
  const gui = new dat.GUI();

  gui.addFolder('camera1');
  gui.add(pointLight1.position, 'x', -3, 3, 0.2);
  gui.add(pointLight1.position, 'y', -3, 3, 0.2);
  gui.add(pointLight1.position, 'z', -3, 3, 0.2);
  gui.add(pointLight1, 'intensity', -1, 2, 0.1);

  gui.addFolder('camera2');
  gui.add(pointLight2.position, 'x', -3, 3, 0.2);
  gui.add(pointLight2.position, 'y', -3, 3, 0.2);
  gui.add(pointLight2.position, 'z', -3, 3, 0.2);
  gui.add(pointLight2, 'intensity', -1, 2, 0.1);

  // scene.add(pointLightHelper);
  // scene.add(pointLightHelper2);
};
