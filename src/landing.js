// All the code for make the animations and background design for the home page in js

// console.log("Landing.js loaded");
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.x = 0;
camera.position.y = 50;
camera.position.z = 200;

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 50, 0); // The center point
controls.enableDamping = true; // Smooth movement
controls.dampingFactor = 0.05;

// creating an array of vectors for a smooth curve
// CatmullRomCurve3
// SplineCurve
 const curve = new THREE.CatmullRomCurve3( [
  new THREE.Vector3( 52, 5, 0 ), // almost actual start line 
  new THREE.Vector3( -76, 5, 0 ), // turn 1 start
  new THREE.Vector3( -78.5, 5, 0),
  new THREE.Vector3( -78.5, 5.5, 0),
  new THREE.Vector3( -79, 6, 0),
  new THREE.Vector3( -79, 8, 0),
  new THREE.Vector3( -78, 9, 0),
  new THREE.Vector3( -76, 11, 0 ), // turn 1 end
  new THREE.Vector3(  -66, 17.5, 0), // turn 1a start
  new THREE.Vector3( -61, 19, 0),
  new THREE.Vector3( -58, 20, 0), // turn 1a end
  new THREE.Vector3( -10, 20, -5), // turn 2 start
  new THREE.Vector3( -8, 21, -6),
  new THREE.Vector3( -7, 22, -7),
  new THREE.Vector3( -6, 25, -8),
  new THREE.Vector3( -6.3, 27, -9),
  new THREE.Vector3( -8, 29, -10),
  new THREE.Vector3(-9, 29.5, -11), // turn 2 end
  new THREE.Vector3( -31, 38.5, -12), // turn 3 start
  new THREE.Vector3( -32.5, 40, -13.5),
  new THREE.Vector3( -34, 43, -15), // turn 3 end
  new THREE.Vector3( -44, 85, -15),
  new THREE.Vector3( -45, 97.5, -12),
  new THREE.Vector3( -45, 100, -10), // turn 4 start
  new THREE.Vector3( -44.5, 107.5, -10),
  new THREE.Vector3( -46, 110, -10),
  new THREE.Vector3( -50, 114, -10), // turn 4 end
  new THREE.Vector3( -60, 122, -8.5), // turn 5 start
  new THREE.Vector3( -67, 130, -7),
  new THREE.Vector3( -67.5, 133, -6.5),
  new THREE.Vector3( -67, 136, -5.5), 
  new THREE.Vector3( -63.5, 139, -4), 
  new THREE.Vector3( -60, 140, -3), // turn 5 end
  new THREE.Vector3( -11, 136.5, -2), // turn 6 start
  new THREE.Vector3( -10, 136, -1.8), 
  new THREE.Vector3( -10, 135, -1.6), // turn 6 end
  new THREE.Vector3( -10, 129, -1.6), // turn 7 start
  new THREE.Vector3( -9.5, 127.5, -1.4),
  new THREE.Vector3( -8, 126, -1.2),// turn 7 end
  new THREE.Vector3( 6, 116, -1), // turn 8 start
  new THREE.Vector3( 10, 115, -0.8),
  new THREE.Vector3( 14, 116, -0.6), // turn 8 end
  new THREE.Vector3( 22, 122, -0.4), // turn 9 start
  new THREE.Vector3( 25, 122.5, -0.2),
  new THREE.Vector3( 28, 120, 0), // turn 9 end
  new THREE.Vector3( 36, 110, 0), // turn 10 start
  new THREE.Vector3( 41, 103, 0), 
  new THREE.Vector3( 45, 101, 0), // turn 10 end
  new THREE.Vector3( 57.5, 96, 0), // turn 11 start
  new THREE.Vector3( 62, 93, 0),
  new THREE.Vector3( 63, 90, 0), // turn 11 end
  new THREE.Vector3( 60.5, 31, 0), /// turn 12 start
  new THREE.Vector3( 60, 29, 0), 
  new THREE.Vector3( 58.5, 28.5, 0), // turn 12 end
  new THREE.Vector3( 37, 33, 0), // turn 12a
  new THREE.Vector3( 29, 33, 0), // turn 13 start
  new THREE.Vector3( 26, 32, 0),
  new THREE.Vector3( 23.5, 28.5, 0),
  new THREE.Vector3( 23, 26.5, 0),
  new THREE.Vector3( 23.5, 24.5, 0),
  new THREE.Vector3( 26, 21, 0),
  new THREE.Vector3( 29, 20, 0), // turn 13 end
  new THREE.Vector3( 52, 20, 0), // turn 14 start
  new THREE.Vector3( 55, 19.3, 0),
  new THREE.Vector3( 58, 17.1, 0),
  new THREE.Vector3( 59.5, 14.4, 0),
  new THREE.Vector3( 60, 12.5, 0),
  new THREE.Vector3( 59.5, 10.5, 0),
  new THREE.Vector3( 58, 7.9, 0),
  new THREE.Vector3( 55, 5.7, 0),
  new THREE.Vector3( 52, 5, 0), // turn 14 end
  new THREE.Vector3( 51, 5, 0)
 ] )

const points = curve.getPoints( 100 );
// const smoothCurve = new THREE.BufferGeometry().setFromPoints( points );

// const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// Create the final object to add to the scene
// const curveObject = new THREE.Line( geometry, material );
// scene.add( curveObject);

// extrude track from line
// width->thick and vice versa
const thickTrack = 4, widthTrack = 4;

const shape = new THREE.Shape();
shape.moveTo( -widthTrack/2,thickTrack/2 );
shape.lineTo( -widthTrack/2, thickTrack/2 );
shape.lineTo( widthTrack/2, thickTrack/2 );
shape.lineTo( widthTrack/2, -thickTrack/2 );
shape.lineTo( -widthTrack/2, -thickTrack/2 );

const extrudeSettings = {
	steps: 1000,
	depth: 4,
	bevelEnabled: false,
	//bevelThickness: 1,
	//bevelSize: 1,
	//bevelOffset: 0,
	//bevelSegments: 5,
  extrudePath: curve
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
// .MeshPhongMaterial({color: '#8AC'})
// .MeshBasicMaterial( { color: 0x00ff00 } )
const material = new THREE.MeshPhongMaterial({color: '#8AC'});
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

// Animation loop, spin
//function animate() {
//  requestAnimationFrame(animate);

//  mesh.rotation.x += 0.01;
//  mesh.rotation.y += 0.01;

//  renderer.render(scene, camera);
//}

// renderer.render(scene,camera);

// Render loop, orbit camera

// adding directional lighting for perspective
const color = 0xFFFFFF;
const intensity = 2;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(20, 50, 150);
light.target.position.set(0, 50, 0);
scene.add(light);
scene.add(light.target);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

//animate();