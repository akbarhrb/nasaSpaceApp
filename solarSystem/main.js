import './style.css'
import * as Three from 'three';

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(75 , window.innerWidth/window.innerHeight , 0.1 , 1000);

const renderer = new Three.WebGLRenderer({
  canvas : document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new Three.TorusGeometry(10, 3, 16, 100);
const material = new Three.MeshStandardMaterial({ color: 0xff6347 });
const torus = new Three.Mesh(geometry, material);

const geometry1 = new Three.BoxGeometry(10, 10, 10);
const material1 = new Three.MeshStandardMaterial({ color: 0xff6941 });
const cube = new Three.Mesh(geometry1, material1);
scene.add(cube);



scene.add(torus);

function animate() {
  requestAnimationFrame(animate);

  console.log('animating...')

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
