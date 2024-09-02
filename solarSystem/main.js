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

//light 
const ambientLight = new Three.AmbientLight(0xffffff);
scene.add(ambientLight);

const pointLight = new Three.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const loader = new Three.TextureLoader();
const bgTexture = loader.load('./public/space.jpg'); 
scene.background = bgTexture;

renderer.render(scene, camera);

// Torus

const geometry = new Three.TorusGeometry(10, 3, 16, 100);
const material = new Three.MeshBasicMaterial({ color: 0xFF6347 , wireframe:true});
const torus = new Three.Mesh(geometry, material);

scene.add(torus);

function animate() {
  requestAnimationFrame(animate);

 

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.001;

  renderer.render(scene, camera);
}

animate();
