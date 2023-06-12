  // Import library
  import * as THREE from "./library/three.module.js";
  import { OrbitControls } from "./library/orbitControls.js"; // Import OrbitControl
  // Import types
  import { windowsType, models } from "./function/windowsType.js";



  // Creating scene
  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a3b4c)


  // Add camera
  let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight
  )
  camera.position.z = 10;


  // Renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("main-container3d").appendChild(renderer.domElement);
    

  // Add geometry asdsdfasdfsdf
  let geometry = new THREE.BoxGeometry(0.1, 5, 0.5);
  let geometry1 = new THREE.BoxGeometry(0.5, 5, 0.1);
  let material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
  let cuadradoRefencia = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), material);


  // ground
  let plano = new THREE.Mesh(new THREE.PlaneGeometry(100, 100, 10, 10), new THREE.MeshBasicMaterial({color: 0x808080, wireframe: true}))
  let ad = new THREE.Mesh(new THREE.PlaneGeometry(100, 100, 10), new THREE.MeshBasicMaterial({color: 0x000000}));// No se que hace
  plano.rotation.x = Math.PI / 2;
  ad.rotation.x = -Math.PI / 2;
  plano.position.y =+ 0;


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

  // Funcion para render de cada uno de los modelos
  function render (window) {// recibe un array
    if (window instanceof Array){
      window.forEach(element => {
          scene.add(element)
      });
    }else console.error("nel perro");
  }
  
  
  // Funcion interprete
  function interprete(){// Esta funcion recoje datos de los modelos y tipos y los renderiza mm..
    // Guardando el ojeto de windowsType
    const medidas = JSON.parse(sessionStorage.getItem("windowsFeatures"));

    // Probando nueva estructura
    let asd = windowsType.typeOfWindow(medidas);
    console.log(windowsType.typeOfWindow(medidas))
    render(asd);
    let as = models.cuerpo(medidas);
    render(as)
    
  }


  // Iniciar esta cosa
  document.getElementById("buttonIniciar").addEventListener("click", ()=>{
    interprete();
    //scene.remove(derecha, izquierda, superior, inferior);
  })


  var cube = new THREE.Mesh(geometry, material);
  var cube2 = new THREE.Mesh(geometry1, material);
  scene.position.x = 2 // Esto tiene que ser responsivo
  cube2.position.x = 0.3
  cube2.position.z = 0.2


  scene.add(plano, cuadradoRefencia)


  //animation
  var animate = function () {
    requestAnimationFrame(animate);
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate(); 