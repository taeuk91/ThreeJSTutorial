import { useEffect } from 'react';

import * as THREE from 'three';

import { GUI } from 'dat.gui'

import SceneInit from './lib/SceneInit';


function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000
    });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene.add(boxMesh);

    // Part 1 - Initialize
    const gui = new GUI();

    // Part 2 - Create GUI
    // gui.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    // gui.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
    // gui.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
    // gui.add(boxMesh.scale, 'x', 0, 2).name('Scale X Axis');
    // gui.add(boxMesh.scale, 'y', 0, 2).name('Scale Y Axis');
    // gui.add(boxMesh.scale, 'z', 0, 2).name('Scale Z Axis');

    // Part 3 - Update Material (color, wireframe)
	  // const materialParams = {
    //    boxMeshColor: boxMesh.material.color.getHex(),
    //  };
    // gui.add(boxMesh.material, 'wireframe');
    // gui
    //    .addColor(materialParams, 'boxMeshColor')
    //    .onChange((value) => boxMesh.material.color.set(value));
  
    // Part 4 - 폴더만들기
    const geometryFolder = gui.addFolder('Mesh Geometry');
    geometryFolder.open();
    const rotationFolder = geometryFolder.addFolder('Rotation');
    rotationFolder.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    rotationFolder.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
    rotationFolder.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
    const scaleFolder = geometryFolder.addFolder('Scale');
    scaleFolder.add(boxMesh.scale, 'x', 0, 2).name('Scale X Axis');
    scaleFolder.add(boxMesh.scale, 'y', 0, 2).name('Scale Y Axis');
    scaleFolder.add(boxMesh.scale, 'z', 0, 2).name('Scale Z Axis');
    scaleFolder.open();

    const materialFolder = gui.addFolder('Mesh Material');
    const materialParams = {
      boxMeshColor: boxMesh.material.color.getHex(),
    };
    materialFolder.add(boxMesh.material, 'wireframe');
    materialFolder
      .addColor(materialParams, 'boxMeshColor')
      .onChange((value) => boxMesh.material.color.set(value));

	  // PART 5 - Custom Function
    const customFunctionFolder = gui.addFolder('Custom Function');
    customFunctionFolder.open();
    const customParams = {
      printHello: false,
    };
    customFunctionFolder
      .add(customParams, 'printHello')
      .name('Print "Hello!"')
      .onChange((value) => {
        if (value === true) {
          console.log('Hello!');
        }
      });

    return () => {
      gui.destroy();
    };
  
  }, []);

  return (
    <div className="App">
      <canvas id = "myThreeJsCanvas"/>
    </div>
  )
}

export default App
