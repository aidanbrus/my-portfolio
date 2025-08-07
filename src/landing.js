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
camera.position.y = 7;
camera.position.z = 15;

const material = new THREE.LineBasicMaterial({
	color: 0x0000ff
});

const points = [];
points.push( new THREE.Vector3( 5.2, 0, 0 ) );
points.push( new THREE.Vector3( -7.8, 0, 0 ) ); // turn 1 start
points.push( new THREE.Vector3( -8, 0.25, 0) );
points.push( new THREE.Vector3( -7.8, 0.5, 0 ) ); // turn 1 end
points.push( new THREE.Vector3(-5.8, 2, 0) ); // turn 1a
points.push( new THREE.Vector3(-1, 2, 0) ); // turn 2 start
points.push( new THREE.Vector3( -0.7, 2.5, 0) );
points.push( new THREE.Vector3(-0.9, 3, 0 ) ); // turn 2 end
points.push( new THREE.Vector3( -3.3, 4, 0) ); // turn 3
points.push( new THREE.Vector3( -4.5, 9.75, 0) );
points.push( new THREE.Vector3( -4.5, 10.75, 0) ); // turn 4
points.push( new THREE.Vector3( -7, 12.4, 0 ) ); // turn 5 start
points.push( new THREE.Vector3( -7.1, 13, 0) ); 
points.push( new THREE.Vector3( -6.7, 13.8, 0) );
points.push( new THREE.Vector3( -6, 14.1, 0) ); // turn 5 end
points.push( new THREE.Vector3( -1, 13.6, 0) ); // turn 6
points.push( new THREE.Vector3( -1, 12.8, 0) ); // turn 7
points.push( new THREE.Vector3( 1, 11.5, 0) ); // turn 8
points.push( new THREE.Vector3( 2.5, 12.5, 0) ); // turn 9
points.push( new THREE.Vector3( 4, 10.25, 0) ); // turn 10
points.push( new THREE.Vector3( 6.2, 9.7, 0) ); // turn 11 start
points.push( new THREE.Vector3( 6.4, 9.5, 0) ); 
points.push( new THREE.Vector3( 6.35, 9.2, 0) ); // turn 11 end
points.push( new THREE.Vector3( 6.05, 2.95, 0) ); // turn 12 start
points.push( new THREE.Vector3( 6, 2.9, 0) );
points.push( new THREE.Vector3( 5.95, 2.85, 0) ); //turn 12 end
points.push( new THREE.Vector3( 3.7, 3.3, 0) ); // turn 12a
points.push( new THREE.Vector3( 2.9, 3.3, 0) ); // turn 13 start
points.push( new THREE.Vector3( 2.6, 3.2, 0) );
points.push( new THREE.Vector3( 2.35, 2.85, 0) );
points.push( new THREE.Vector3( 2.3, 2.65, 0) ); 
points.push( new THREE.Vector3( 2.35, 2.45, 0) );
points.push( new THREE.Vector3( 2.6, 2.1, 0) );
points.push( new THREE.Vector3( 2.9, 2, 0) ); // turn 13 end
points.push( new THREE.Vector3( 5.2, 2, 0) ); // turn 14 start
points.push( new THREE.Vector3( 5.7, 1.8, 0) );
points.push( new THREE.Vector3( 5.95, 1.3, 0) );
points.push( new THREE.Vector3( 6, 1, 0) );
points.push( new THREE.Vector3( 5.95, 0.7, 0) );
points.push( new THREE.Vector3( 5.7, 0.2, 0) );
points.push( new THREE.Vector3( 5.2, 0, 0) ); // turn 14 end

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );

renderer.render(scene,camera);

animate();