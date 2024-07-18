// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a light to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Load a 3D model
const loader = new THREE.STLLoader();
loader.load(
    'pervimod.stl',  // Ensure the path is correct
    function (geometry) {
        const material = new THREE.MeshPhongMaterial({ color: 0x555555 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        mesh.position.set(0, 0, 0);
        mesh.scale.set(1, 1, 1);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Position the camera
camera.position.z = 5;

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});