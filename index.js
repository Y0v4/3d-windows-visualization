  import * as THREE from "./library/three.module.js"; // Import library
  import { OrbitControls } from "./library/orbitControls.js"; // Import OrbitControl


  import { models } from "./module/windowsModels.js";      // Import figure


  // Creating scene
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a3b4c)


  // Add camera
  var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight
  )
  camera.position.z = 10; 


  // Renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("main-container3d").appendChild(renderer.domElement);
    

  // Add geometry asdsdfasdfsdf
  var geometry = new THREE.BoxGeometry(0.1, 5, 0.5);
  var geometry1 = new THREE.BoxGeometry(0.5, 5, 0.1);
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
  var puntoInnicial = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);


  // ground
  let as = new THREE.Mesh(new THREE.PlaneGeometry(100, 100, 10, 10), new THREE.MeshBasicMaterial({color: 0x808080, wireframe: true}))
  let ad = new THREE.Mesh(new THREE.PlaneGeometry(100, 100, 10), new THREE.MeshBasicMaterial({color: 0xcccccc, tranparent: true}));
  as.rotation.x = Math.PI / 2;
  ad.rotation.x = -Math.PI / 2;
  as.position.y =+ 0.001;


  // Resize
  window.addEventListener("resize",()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();// nose lo que hace aprender promise
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  })


  // Add OrbitControl
  var controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 0.5;
  controls.maxDistance = 20;
  //controls.enableZoom = false;
  //controls.enableRotate = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.5;
  controls.maxPolarAngle = Math.PI *  2;
  controls.screenSpacePanning = true;


  // Guardando el ojeto de windowsType
  let medidas =  JSON.parse(sessionStorage.getItem("medidas")); 


  // Funcion interprete
  function interprete(medidas){// Esta funcion recoje datos de los modelos y tipos y los renderiza mm..
    console.log("renderizado funcionando")
    // Renderizando el cuerpo
    models.cuerpo(
      {width: medidas.width, heigth: medidas.heigth},
      scene,
      {x: NaN, y: ((130+medidas.heigth)/40), z: NaN}// askldflk cuidado con lAS PUTAS CADENAS DE TEXTO AHHHHHH
    );
    console.log(((130+medidas.heigth)/40)-2.5)
  }


  // Iniciar esta cosa
  document.getElementById("buttonIniciar").addEventListener("click", ()=>{
    interprete(medidas);
    console.log("click funcionando")
  })

  console.log(typeof medidas);


  var cube = new THREE.Mesh(geometry, material);
  var cube2 = new THREE.Mesh(geometry1, material);
  scene.position.x = 2 // Esto tiene que ser responsivo
  cube2.position.x = 0.3
  cube2.position.z = 0.2
  console.log(THREE);

  scene.add(cube, cube2, as, puntoInnicial)


  //animation
  var animate = function () {
    requestAnimationFrame(animate);
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
              