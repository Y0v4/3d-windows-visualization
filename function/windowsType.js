// Funcion construvtora
function cuadrado (width, heigth, numeroDeCortes){
    this.width = width;
    this.heigth = heigth;
    this.numeroDeCortes = numeroDeCortes;
}


// Recibiendo datos del session storage
var window, type
window = new cuadrado(
    sessionStorage.getItem("width"),
    sessionStorage.getItem("heigth")
);
type = sessionStorage.getItem("type");


// Expresando medidas
let medidas = {
    width: NaN,
    heigth: NaN,
    subTipo : NaN,
    m : {width : NaN, cantidad : NaN, position : {a : "asdf",  x : NaN, y : NaN, z :NaN}},
    l : [heigth, 0],
    u : [NaN, 0],
    uU : [width, 0],
    h : [NaN, 0],
    portafelpas : [width - 2, 0],
    puente : [width, 0],
    tuboRectangularesApoyo: [NaN, 0],
    tuboRectangularesAncho : [width, 0],
    tuboRectangularesLargo : [NaN, 0],
    vidrioFijo : [NaN, NaN, 0],
    vidrioCoredizo : [NaN, NaN, 0]
}

// Tipos de ventanas
const windowsTypes = [
    functionCoredizo(window.width, window.heigth, medidas),
    "functionCoredizoSinMarcos(window.width, window.heidth, medidas)"
];


// Ventana
medidas.width = Number(window.width);
medidas.heigth = Number(window.heigth);
console.log(medidas.width)
// ojo solo  de pueba
sessionStorage.setItem("medidas", JSON.stringify(medidas));

// Types

function functionCoredizo(width, heigth, medidas) {
    // Definiendo el subTipo
    let newHeigth = heigth;
    if (heigth < 180) {
        medidas.subTipo = "normal";// falta declarar la funcion normal
    }else if (heigth >= 180) {
        medidas.subTipo = "conPuente"
        newHeigth = Math.trunc((heigth / 100)*80);
    }// Aaui falta un elseif de tubo escondido;




    // Definiendo medidas segun el subtipo de ventana
    function normal() { 
        medidas.m.width = width,
        medidas.m.cantidad = 1,
        medidas.l.width = newHeigth,
        medidas.l.cantidad = 1
    }
    function conPuente(){
        medidas.puente.width = width,
        medidas.puente.cantidad = 1,
        medidas.l.width = newHeigth,
        medidas.l.cantidad = 1,
        medidas.uU.width = width,
        medidas.uU.cantidad = 1
    };




    sessionStorage.setItem("medidas", medidas)
};

















    
// Variables de apoyo
let porcentajeTotal = {
    porciento: Math.trunc((width * 100) / heigth),
    condicionHeigth: NaN
}
if (heigth >= width){   // Definiendo condicionHeigth 
     porcentajeTotal.condicionHeigth = 1;
}else porcentajeTotal.condicionHeigth = 0;

let porcentajeHojas = Object;
/*for (let c = 2; width < heigth, c++){
    let a = {
    }
}*/

// Definiendo hojas
// Definiendo posiciones
    




 


/*// Tipos de ventanas
const coretizo = {
    m : fullWindows.width,
    l : fullWindows.width,
    f : fullWindows.heigth,
    u : (fullWindows.width / 3) + 2,
    h : (fullWindows.width / 3) + 2,
}// aqui falatn mas tipos de ventanas



// Funcion para decidir que venta quiere
let a = 0;
for (a; a == windowsTypes.length; a++) {console.log(a)};

console.log(a);*/





















