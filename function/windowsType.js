import * as THREE from "../library/three.module.js"// import library

// DECLARANDO MODELOS
// basicos
let cube, planchaVidrio
// complejos
let cuerpo  
// types
let vidrioMarco, coredizo

// FUNCTION
// Funciones de apoyo
function cuadrado (width, heigth, numeroDeCortes){// Funcion constructora
    this.width = width;
    this.heigth = heigth;
    this.numeroDeCortes = numeroDeCortes;
}
function transform(centimetros){// Funcion para transformar centimetros a centimetros3d
    centimetros = centimetros / 20; // Dato curioso cualquier division inexacta dara maximo dos decimales
    return centimetros;
}
// Funcion de cambiar posicion
function changePosition(figure, x, y, z){
    if(x)figure.position.x += x;
    if(y)figure.position.y += y;
    if(z)figure.position.z += z;
}
// funcion mover
function moverTodo(models, x, y, z) {// El parametro models recibe un arrauy
    models.forEach((element, index)=>{
        changePosition(element, x, y, z);
    })
}
// Funcion material
function material(color, wireframe){
    let a = new THREE.MeshBasicMaterial({color: color, wireframe: wireframe});
    return a;
}

// Funcion para clasificar el type
function typeOfWindow (window){ // deve de reptornar el typo
    let defaultType = window.type;
    let width = window.width;
    let heigth = window.heigth;

    if (window.type == "normal"){
        if (width <= 20 && heigth <= 20 ){
            return windowsType.vidrioMarco(window);
        }
    }if (window.type == "coredizo"){
        console.log("type == coredizoasd");// what
    }else return windowsType.defaultType(window);
}


// MODELS
// modelo de un cubo prueba
cube = function(x, y, z, positionX, positionY, positionZ, color, wireframe){
    // Material interno
    let material = new THREE.MeshBasicMaterial({color: color, wireframe: wireframe});
    // Generado modelo
    let modelCube = new THREE.Mesh(new THREE.BoxGeometry(x, y, z),material);
    // Position
    modelCube.position.x = positionX;
    modelCube.position.y = positionY;
    modelCube.position.z = positionZ;

    return modelCube
}
planchaVidrio = function(x, y, z){
    let vidrio = cube(x, y, z, 0, 0, 0, 0x00ff00, true); 
    return vidrio
}

// Modelo cuerpo
cuerpo = function (tamaño) { // Recibe objetos
    // los datos que recibe son en centimetros asi lo combertimos a centimetros3d
    tamaño.width = transform(tamaño.width);
    tamaño.heigth = transform(tamaño.heigth);
    
    // Creando modelo cuerpo
    let derecha = cube(5, 6.5+tamaño.heigth, 1.5, -tamaño.width / 2 - 2.5, 0,0, 0x808080, true);
    let izquierda = cube(5, 6.5+tamaño.heigth, 1.5, tamaño.width / 2 + 2.5, 0,0, 0x808080, true);
    let superior = cube(tamaño.width, 1.5, 1.5, 0, (tamaño.heigth + 6.5) / 2 - 0.75,0, 0x808080, true);
    let inferior = cube(tamaño.width, 5, 1.5, 0, -(tamaño.heigth + 6.5) / 2 + 2.5,0, 0x808080       , true);
    // array para mover el modelo en conjunto
    let arrayCuerpo = [derecha, izquierda, superior, inferior];

    moverTodo(arrayCuerpo, 0, (tamaño.heigth+6.5) / 2, 0);
   return arrayCuerpo;
}
// vidrio comun con marco
vidrioMarco = (tamaño)=>{// No se considera milimetros
    // los datos que recibe son en centimetros asi lo combertimos a centimetros3d
    let width = transform(tamaño.width);
    let heigt = transform(tamaño.heigth);
    // Definiendo modelos
    let aluminio = cube(width, 0.1, 0.1, 0, 0, 0, 0x00ff00, true);
    let vidrio = planchaVidrio(width, heigt, 0.06);
    aluminio.position.y = (heigt/2);
    // Crando el arreglo
    let arreglo = [aluminio, vidrio];
    
    moverTodo(arreglo, 0, (heigt+10)/2);
    return arreglo;
}
// Coredizo
coredizo = (tamaño)=>{
    // los datos que recibe son en centimetros asi lo combertimos a centimetros3d
    let width = transform(tamaño.width);
    let heigt = transform(tamaño.heigth);
    // FUNCIONES DE SUBTYPE
    function coredizoBaño(tamaño){// Funcion corredizo baño
        alert("sub tipo coredizo baño no disponible");
    }
    function tuboEscondido(tamaño){
        alert("sub tipo tubo coredizo no disponible");// Funciontubo escondido
    }
    function coredizoNormal(tamaño){// Funcion de coredizo normal
        // FUNCIONES SUB-SUBTYPE DE COREDIZO NORMAL
        function coredizoNormal_normal(tamaño){
            if (tamaño.sub_subType){
                console.error("sub-subtype presionado");
            }
            if (tamaño.changeStyle){
                console.error("changeStyle presionado");
            }
            alert("sub-subtipo normal no disponible");  
        }
        function coredizoNormal_conPuente(tamaño){
            alert("sub-subtype conPuente");
        }
    }
    // Definir el SUB-TIPO de coredizo segun la medida




}


// Agrupando modelos en un objeto
const models = {
    cuerpo: cuerpo,
    cube: cube
}
// Agrupando funciones para exportar
const windowsType = {
    typeOfWindow: typeOfWindow,
    vidrioMarco: vidrioMarco
}

// EXPORT
export { windowsType, models }