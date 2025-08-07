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
points.push( new THREE.Vector3( 5.2, 0.5, 0 ) ); // almost star line actually
points.push( new THREE.Vector3( -7.6, 0.5, 0 ) ); // turn 1 start
points.push( new THREE.Vector3( -7.85, 0.55, 0) );
points.push( new THREE.Vector3( -7.9, 0.6, 0) );
points.push( new THREE.Vector3( -7.9, 0.8, 0) );
points.push( new THREE.Vector3( -7.8, 0.9, 0) );
points.push( new THREE.Vector3( -7.6, 1.1, 0 ) ); // turn 1 end
points.push( new THREE.Vector3(  -6.6, 1.75, 0) ); // turn 1a start
points.push( new THREE.Vector3( -6.1, 1.9, 0) ); 
points.push( new THREE.Vector3( -5.8, 2, 0) ); // turn 1a end
points.push( new THREE.Vector3( -1, 2, 0) ); // turn 2 start
points.push( new THREE.Vector3( -0.8, 2.1, 0) );
points.push( new THREE.Vector3( -0.7, 2.2, 0) );
points.push( new THREE.Vector3( -0.6, 2.5, 0) );
points.push( new THREE.Vector3( -0.63, 2.7, 0) );
points.push( new THREE.Vector3( -0.8, 2.9, 0) );
points.push( new THREE.Vector3(-0.9, 2.95, 0 ) ); // turn 2 end
points.push( new THREE.Vector3( -3.1, 3.85, 0) ); // turn 3 start
points.push( new THREE.Vector3( -3.25, 4, 0) );
points.push( new THREE.Vector3( -3.4, 4.3, 0) ); // turn 3 end
points.push( new THREE.Vector3( -4.4, 8.5, 0) );
points.push( new THREE.Vector3( -4.5, 9.75, 0) );
points.push( new THREE.Vector3( -4.5, 10, 0) ); // turn 4 start
points.push( new THREE.Vector3( -4.45, 10.75, 0) );
points.push( new THREE.Vector3( -4.6, 11, 0) );
points.push( new THREE.Vector3( -5, 11.4, 0) ); // turn 4 end
points.push( new THREE.Vector3( -6, 12.2, 0 ) ); // turn 5 start
points.push( new THREE.Vector3( -6.7, 13, 0) ); 
points.push( new THREE.Vector3( -6.75, 13.3, 0) );
points.push( new THREE.Vector3( -6.7, 13.6, 0) );
points.push( new THREE.Vector3( -6.35, 13.9, 0) );
points.push( new THREE.Vector3( -6, 14, 0) ); // turn 5 end
points.push( new THREE.Vector3( -1.1, 13.7, 0) ); // turn 6 start
points.push( new THREE.Vector3( -1, 13.6, 0) );
points.push( new THREE.Vector3( -1, 13.5, 0) ); // turn 6 end
points.push( new THREE.Vector3( -1, 12.9, 0) ); // turn 7 start
points.push( new THREE.Vector3( -0.95, 12.75, 0) ); 
points.push( new THREE.Vector3( -0.8, 12.6, 0) );// turn 7 end
points.push( new THREE.Vector3( 0.6, 11.6, 0) ); // turn 8 start
points.push( new THREE.Vector3( 1, 11.5, 0) ); 
points.push( new THREE.Vector3( 1.4, 11.6, 0) ); // turn 8 end
points.push( new THREE.Vector3( 2.2, 12.2, 0) ); // turn 9 start
points.push( new THREE.Vector3( 2.5, 12.25, 0) );
points.push( new THREE.Vector3( 2.8, 12, 0) ); // turn 9 end
points.push( new THREE.Vector3( 3.6, 11, 0) ); // turn 10 start
points.push( new THREE.Vector3( 4.1, 10.3, 0) ); 
points.push( new THREE.Vector3( 4.5, 10.1, 0) ); // turn 10 end
points.push( new THREE.Vector3( 5.75, 9.7, 0) ); // turn 11 start
points.push( new THREE.Vector3( 6.2, 9.3, 0) ); 
points.push( new THREE.Vector3( 6.3, 9, 0) ); // turn 11 end
points.push( new THREE.Vector3( 6.05, 3.1, 0) ); // turn 12 start
points.push( new THREE.Vector3( 6, 2.9, 0) );
points.push( new THREE.Vector3( 5.85, 2.85, 0) ); //turn 12 end
points.push( new THREE.Vector3( 3.7, 3.3, 0) ); // turn 12a
points.push( new THREE.Vector3( 2.9, 3.3, 0) ); // turn 13 start
points.push( new THREE.Vector3( 2.6, 3.2, 0) );
points.push( new THREE.Vector3( 2.35, 2.85, 0) );
points.push( new THREE.Vector3( 2.3, 2.65, 0) ); 
points.push( new THREE.Vector3( 2.35, 2.45, 0) );
points.push( new THREE.Vector3( 2.6, 2.1, 0) );
points.push( new THREE.Vector3( 2.9, 2, 0) ); // turn 13 end
points.push( new THREE.Vector3( 5.2, 2, 0) ); // turn 14 start
points.push( new THREE.Vector3( 5.5, 1.93, 0) );
points.push( new THREE.Vector3( 5.8, 1.71, 0) );
points.push( new THREE.Vector3( 5.95, 1.44, 0) );
points.push( new THREE.Vector3( 6, 1.25, 0) );
points.push( new THREE.Vector3( 5.95, 1.05, 0) );
points.push( new THREE.Vector3( 5.8, 0.79, 0) );
points.push( new THREE.Vector3( 5.5, 0.57, 0) );
points.push( new THREE.Vector3( 5.2, 0.5, 0) ); // turn 14 end

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );

renderer.render(scene,camera);

animate();