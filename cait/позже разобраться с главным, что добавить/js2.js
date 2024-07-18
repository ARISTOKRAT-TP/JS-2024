// Подключаем библиотеку Three.js
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Создаем сцену
const scene = new THREE.Scene();

// Создаем камеру
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Создаем рендерер и задаем размеры
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создаем геометрию куба и материал
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Создаем меш (сетку), комбинируя геометрию и материал
const cube = new THREE.Mesh(geometry, material);

// Добавляем куб на сцену
scene.add(cube);

// Располагаем камеру
camera.position.z = 5;

// Функция анимации, которая заставляет куб вращаться
function animate() {
  requestAnimationFrame(animate);

  // Вращение куба
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Рендеринг сцены с камерой
  renderer.render(scene, camera);
}

// Запускаем анимацию
animate();