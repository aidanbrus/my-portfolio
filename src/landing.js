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
  new THREE.Vector3( 0, 5, 0 ), // almost actual start line 
  new THREE.Vector3( -76, 5, 0 ), // turn 1 start
  new THREE.Vector3( -78.5, 5.5, 0),
  // new THREE.Vector3( -78.5, 5.5, 0),
  new THREE.Vector3( -79, 6, 0),
  // new THREE.Vector3( -79, 8, 0),
  new THREE.Vector3( -78, 9, 0),
  new THREE.Vector3( -76, 11, 0 ), // turn 1 end
  new THREE.Vector3(  -66, 17.5, 0), // turn 1a start
  new THREE.Vector3( -61, 19, 0),
  new THREE.Vector3( -58, 20, 0), // turn 1a end
  new THREE.Vector3( -10, 20, -5), // turn 2 start
  new THREE.Vector3( -8, 21, -5),
  new THREE.Vector3( -7, 22, -5),
  new THREE.Vector3( -6, 25, -5),
  new THREE.Vector3( -6.3, 27, -5),
  new THREE.Vector3( -7, 28, -5),
  //new THREE.Vector3( -8.3, 28.9, -9.75),
  new THREE.Vector3( -8, 29, -5),
  new THREE.Vector3( -8.5, 29.25, -5 ),
  new THREE.Vector3( -9, 29.5, -5), // turn 2 end
  new THREE.Vector3( -12, 31, -5.25),
  new THREE.Vector3( -18, 33, -5.5), 
  new THREE.Vector3( -31, 38.5, -8), // turn 3 start
  new THREE.Vector3( -32.5, 40, -8),
  new THREE.Vector3( -34, 43, -8), // turn 3 end
  new THREE.Vector3( -44, 85, -4.5),
  new THREE.Vector3( -45, 97.5, -4.25),
  new THREE.Vector3( -45, 100, -4), // turn 4 start
  new THREE.Vector3( -44.5, 107.5, -3.6),
  new THREE.Vector3( -46, 110, -3.2),
  new THREE.Vector3( -50, 114, -2.8), // turn 4 end
  new THREE.Vector3( -60, 122, -2.4), // turn 5 start
  new THREE.Vector3( -67, 130, -2),
  new THREE.Vector3( -67.5, 133, -1.6),
  new THREE.Vector3( -67, 136, -1.2), 
  new THREE.Vector3( -63.5, 139, -0.8), 
  new THREE.Vector3( -60, 140, -0.4), // turn 5 end
  new THREE.Vector3( -11, 136.5, 0), // turn 6 start
  new THREE.Vector3( -10, 136, 0), 
  new THREE.Vector3( -10, 135, 0), // turn 6 end
  new THREE.Vector3( -10, 129, 0), // turn 7 start
  new THREE.Vector3( -9.5, 127.5, 0),
  new THREE.Vector3( -8, 126, 0),// turn 7 end
  new THREE.Vector3( 6, 116, 0), // turn 8 start
  new THREE.Vector3( 10, 115, 0),
  new THREE.Vector3( 14, 116, 0), // turn 8 end
  new THREE.Vector3( 22, 122, 0), // turn 9 start
  new THREE.Vector3( 25, 122.5, 0),
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
  new THREE.Vector3( 51.5, 5, 0),
  new THREE.Vector3( 51, 5, 0),
  // new THREE.Vector3( 30, 5, 0),
  // new THREE.Vector3( 25, 5, 0),
  new THREE.Vector3( 0, 5, 0)
 ] )

const points = curve.getPoints( 100 );
// const smoothCurve = new THREE.BufferGeometry().setFromPoints( points );

// const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// Create the final object to add to the scene
// const curveObject = new THREE.Line( geometry, material );
// scene.add( curveObject);

// extrude track from line
// width->thick and vice versa
//const thickTrack = 4, widthTrack = 2;

// const shape = new THREE.Shape();
// shape.moveTo( -widthTrack/2, thickTrack/2 );
//shape.lineTo( -widthTrack/2, thickTrack/2 );
// shape.lineTo( widthTrack/2, thickTrack/2 );
// shape.lineTo( widthTrack/2, -thickTrack/2 );
// shape.lineTo( -widthTrack/2, -thickTrack/2 );

//const extrudeSettings = {
//	steps: 1000,
//	depth: 4,
//	bevelEnabled: false,
	//bevelThickness: 1,
	//bevelSize: 1,
	//bevelOffset: 0,
	//bevelSegments: 5,
//  extrudePath: curve
//};
const thickTrack = 3, widthTrack = 3;

const shape = [
    new THREE.Vector2(-widthTrack/2, -thickTrack/2),
    new THREE.Vector2( widthTrack/2, -thickTrack/2),
    new THREE.Vector2( widthTrack/2,  thickTrack/2),
    new THREE.Vector2(-widthTrack/2,  thickTrack/2)
];

// const shape = new Float32Array( [
//  -widthTrack/2, -thickTrack/2, 1,
//  widthTrack/2, -thickTrack/2, 1,
//  widthTrack/2, thickTrack/2, 1,

//  widthTrack/2, thickTrack/2, 1,
//  -widthTrack/2, thickTrack/2, 1,
//  -widthTrack/2, thickTrack/2, 1
//] );

const up = new THREE.Vector3(0, 0, 1); // fixed up direction

function getAdaptivePoints(curve, baseDivisions = 750, maxExtra = 8) {
  const points = [];
  
  let prevTangent = null;
  
  for (let i = 0; i <= baseDivisions; i++) {
    const t = i / baseDivisions;
    const point = curve.getPoint(t);
    const tangent = curve.getTangent(t).normalize();
    
    if (prevTangent) {
      // Curvature measure = how much direction changes
      const angle = Math.acos(Math.min(Math.max(prevTangent.dot(tangent), -1), 1));
      
      // Map angle to number of extra segments
      const extra = Math.ceil((angle / Math.PI) * maxExtra);
      
      // Add intermediate points if curvature is high
      for (let j = 1; j <= extra; j++) {
        const t2 = (i - 1 + j / (extra + 1)) / baseDivisions;
        points.push(curve.getPoint(t2));
      }
    }
    
    points.push(point);
    prevTangent = tangent;
  }
  
  return points;
}

let firstRing = [];
let firstNormal = null;
let firstBinormal = null;

const positions = [];
const indices = [];

let prevNormal = new THREE.Vector3(1, 0, 0); // starting guess

const pathPoints = getAdaptivePoints(curve, 200, 8); // base 200, up to 5x more in corners

for (let i = 0; i < pathPoints.length; i++) {
    const point = pathPoints[i];

    // Compute tangent directly from neighboring points
    let tangent;
    if (i === 0) {
        tangent = pathPoints[i + 1].clone().sub(point).normalize() // pathPoints[i + 1].clone().sub(point).normalize(); 
    } else if (i === pathPoints.length - 1) {
        tangent = point.clone().sub(pathPoints[i - 1]).normalize(); // pathPoints[1].clone().sub(pathPoints[0]).normalize();
    } else {
        tangent = pathPoints[i + 1].clone().sub(pathPoints[i - 1]).normalize();
    }

    // Parallel transport frame
    //if (i > 0) {
    //    const projection = prevNormal.clone().projectOnVector(tangent);
    //    prevNormal.sub(projection).normalize();
    //} else {
    //    prevNormal = new THREE.Vector3().crossVectors(up, tangent).normalize();
    //}

    if (i === 0) {
      prevNormal = new THREE.Vector3().crossVectors(up, tangent).normalize();

    } else if ( i > pathPoints.length - 1) {
      prevNormal = new THREE.Vector3().crossVectors(up, tangent).normalize();
    } else {
      const projection = prevNormal.clone().projectOnVector(tangent);
      prevNormal.sub(projection).normalize();
    }

    const binormal = new THREE.Vector3().crossVectors(tangent, prevNormal).normalize();

  // push shape vertices transformed into 3D space
  // for (let p = 0; p < shape.length; p++) {
  //   const sp = shape[p];
  //   const vertex = new THREE.Vector3()
  //     .addScaledVector(prevNormal, sp.x)
  //     .addScaledVector(binormal, sp.y)
  //     .add(point);
  //   positions.push(vertex.x, vertex.y, vertex.z);
  // }

  // --- Handle last ring fix ---
  let ringVertices = [];
  if (i === pathPoints.length - 1) {
    // Force last ring = first ring
    ringVertices = firstRing.map(v => v.clone());
  } else {
    // Build normal ring
    for (let p = 0; p < shape.length; p++) {
      const sp = shape[p];
      const vertex = new THREE.Vector3()
        .addScaledVector(prevNormal, sp.x)
        .addScaledVector(binormal, sp.y)
        .add(point);
      ringVertices.push(vertex);
    }
  }

  // Push vertices to buffer
  ringVertices.forEach(v => positions.push(v.x, v.y, v.z));

  // Save first ring for reuse
  if (i === 0) {
    firstRing = ringVertices.map(v => v.clone());
    firstNormal = prevNormal.clone();
    firstBinormal = binormal.clone();
  }

  // create indices for faces
  if (i > 0) {
    const base = i * shape.length;
    const prevBase = (i - 1) * shape.length;
    for (let p = 0; p < shape.length; p++) {
      const nextP = (p + 1) % shape.length;
      indices.push(prevBase + p, base + p, base + nextP);
      indices.push(prevBase + p, base + nextP, prevBase + nextP);
    }
  }
}

// assign vertices to geometry (needs indices, uvs, etc. for full mesh)
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
// geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
geometry.setIndex(indices);
geometry.computeVertexNormals();

const material = new THREE.MeshToonMaterial({
  color: '#8AC',
  side: THREE.DoubleSide, // prevents dark “missing” faces until normals are perfect
  emissive: '#8AC',
  // emissiveMap: emissiveTexture, // need to make a map
  emissiveIntensity: 1
});

// add a background to give some depth and so that the track glows onto it
const geometryPlane = new THREE.PlaneGeometry( 800, 500 );
const materialPlane = new THREE.MeshBasicMaterial( {color: "rgba(69, 68, 68, 1)", side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometryPlane, materialPlane );
plane.translateX(0);
plane.translateY(50);
plane.translateZ(-15);
scene.add( plane );

//const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
// .MeshPhongMaterial({color: '#8AC'})
// .MeshBasicMaterial( { color: 0x00ff00 } )
// .MeshLambertMaterial
// const material = new THREE.MeshPhongMaterial( { color: '#8AC' } );
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
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 50, 200);
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