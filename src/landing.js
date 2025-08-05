// All the code for make the animations and background design for the home page in js
// main.js
console.log("Landing.js loaded");
import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);


// Animation loop
//function animate() {
//  requestAnimationFrame(animate);

//  cube.rotation.x += 0.01;
//  cube.rotation.y += 0.01;

//  renderer.render(scene, camera);
//}

camera.position.x = 0;
camera.position.y = 4;
camera.position.z = 15;

const material = new THREE.LineBasicMaterial({
	color: 0x0000ff
});

const points = [];
points.push( new THREE.Vector3( 2.9, 0, 0 ) );
points.push( new THREE.Vector3( -5, 0, 0 ) );
points.push( new THREE.Vector3( -5.05, 0.05, 0 ) );
points.push( new THREE.Vector3(-4, 1, 0) );
points.push( new THREE.Vector3(-0.5, 1, 0) );
points.push( new THREE.Vector3(-0.25, 1.25, 0 ) );
points.push( new THREE.Vector3( -1.25, 1.5, 0) );
points.push( new THREE.Vector3( -2, 5.5, 0) );
points.push( new THREE.Vector3( -4.5, 6.5, 0 ) );
points.push( new THREE.Vector3( -4.6, 7, 0) );
points.push( new THREE.Vector3( -4.4, 7.5, 0) );
points.push( new THREE.Vector3( -0.5, 7.3, 0) );
points.push( new THREE.Vector3( -0.5, 7.2, 0) );
points.push( new THREE.Vector3( 0.5, 6.2, 0) );
points.push( new THREE.Vector3( 1, 6.8, 0) );
points.push( new THREE.Vector3( 2, 5.8, 0) );
points.push( new THREE.Vector3( 3.2, 5.5, 0) );
points.push( new THREE.Vector3( 3, 1.5, 0) );
points.push( new THREE.Vector3( 2.5, 1.8, 0) );
points.push( new THREE.Vector3( 2, 1.5, 0) );
points.push( new THREE.Vector3( 1.9, 1.25, 0) );
points.push( new THREE.Vector3( 2, 1, 0) );
points.push( new THREE.Vector3( 2.9, 1, 0) );
points.push( new THREE.Vector3( 3.1, 0.5, 0) );
points.push( new THREE.Vector3( 2.9, 0, 0) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );

renderer.render(scene,camera);

animate();