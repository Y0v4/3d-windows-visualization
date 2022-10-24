import * as THREE from "../library/three.module.js";


// Declarando modelos
let cuerpo;

function changePosition(figure, x, y, z){
    if(x)figure.position.x += x;
    if(y)figure.position.y += y;
    if(z)figure.position.z += z;
}

// Funcion para transformar centimetros a centimetros3d
function transform(centimetros){
    centimetros = centimetros / 20; // Dato curioso cualquier division inexacta dara maximo dos decimales
    return centimetros
}


cuerpo = function(tamaño, scene, position, cantidad){ // Recibe objetos
    tamaño.width = transform(tamaño.width);
    tamaño.heigth = transform(tamaño.heigth);
    console.log(tamaño.heigth)

    /*position.x = 0;
    position.z = 0;
    position.y = 0;*/


    let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});


    let derecha = new THREE.Mesh(new THREE.BoxGeometry(5, 6.5+tamaño.heigth, 1.5),material);
    let izquierda = new THREE.Mesh(new THREE.BoxGeometry(5, 6.5+tamaño.heigth, 1.5),material);
    let superior = new THREE.Mesh(new THREE.BoxGeometry(tamaño.width, 1.5, 1.5), material);
    let inferior = new THREE.Mesh(new THREE.BoxGeometry(tamaño.width, 5, 1.5), material);
    
    console.log(changePosition)
    derecha.position.x = -tamaño.width / 2 - 2.5;
    izquierda.position.x = tamaño.width / 2 + 2.5;
    superior.position.y = (tamaño.heigth + 6.5) / 2 - 0.75;
    inferior.position.y =  -(tamaño.heigth + 6.5) / 2 + 2.5;

    function movertodo(x ,y, z){// Falta probar
     changePosition(derecha  , x, y, z);
     changePosition(izquierda, x, y, z);
     changePosition(superior , x, y, z);
     changePosition(inferior , x, y, z);
  }

  // Posicionando modelo
  movertodo(position.x, position.y, position.z);

  scene.add(derecha, izquierda, superior, inferior);
}
















let models = {
    cuerpo: cuerpo
}


export {  models };
 