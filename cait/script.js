        import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
        import { STLLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/STLLoader.js'; /*для загрузки моделей и преобразования их в геометрию для использования в сцене*/
        import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';//интерактивность

        function init3DModel(canvasId, modelPath) {
            const canvas = document.getElementById(canvasId);
            const scene = new THREE.Scene();

            const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);//угол зрения, размеры рендеринга, мин и макс из возможных расстояния от камеры
            camera.position.set(-5, 65, 40);

            const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true }); //сглаживание тру
            renderer.setClearColor('lightblue');
            renderer.setSize(300, 300);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true; //демпфирование,гладкость
            controls.dampingFactor = 0.05; //коэфициент демпфрирования
            controls.maxPolarAngle = Math.PI / 2;//нельзя смотреть снизу

            const light = new THREE.HemisphereLight(0xffffff, 0x444444);
            light.position.set(0, 20, 0);
            scene.add(light);

            const loader = new STLLoader();
            loader.load(modelPath, function (geometry) {//загрузка геометрии модели
                const material = new THREE.MeshPhongMaterial({ color: 0x9966FF});
                const mesh = new THREE.Mesh(geometry, material);//полигональная сетка
                scene.add(mesh);
            });

            function animate() {
                requestAnimationFrame(animate);//обновление сцены при каждом кадре
                controls.update();
                renderer.render(scene, camera);
            }
            animate();
        }

            init3DModel('canvas1', './details/shtuser.stl');
            init3DModel('canvas2', './details/nippel.stl');
            init3DModel('canvas3', './details/gayka.stl');
            init3DModel('canvas4', './details/sborka.stl');
