// Funcion construvtora
function cuadrado (width, heigth, numeroDeCortes){
    this.width = width;
    this.heigth = heigth;
    this.numeroDeCortes = numeroDeCortes;
}


// Expresando medidas
let medidas = {
    width: NaN,
    heigth: NaN,
    Tipo : NaN,
    subTipo: NaN,
    colorAluminio: NaN,
    tipoVidrio: NaN,
    colorVidrio: NaN,
    morOrLess: 0,
    m :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    l :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    u :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    uU :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    h :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    portafelpas :  {heigth : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    puente :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    tuboRectangularesApoyo:  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    tuboRectangularesAncho :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    tuboRectangularesLargo :  {width : NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    vidrioFijo :  {width : NaN,heigth: NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}},
    vidrioCoredizo :  {width : NaN,heigth: NaN, cantidad : 0, position : {x : NaN, y : NaN, z :NaN}}
}


// Funcion para transformar centimetros a centimetros3d
function transform(centimetros){
    centimetros = centimetros / 20; // Dato curioso cualquier division inexacta dara maximo dos decimales
    return centimetros
}


// Iniciar 
document.getElementById("buttonIniciar").addEventListener("click", ()=>{
    // Recibiendo datos del session storage
    var window = JSON.parse(sessionStorage.getItem("windowsFeatures"));
    console.log(typeof window.width);

    // Propertis
    medidas.width = Number(window.width);
    medidas.heigth = Number(window.heigth);
    medidas.colorAluminio = window.colorAluminio;
    medidas.tipoVidrio = window.tipoVidrio;
    medidas.colorVidrio = window.colorVidrio;
    medidas.morOrLess = window.morOrLess;
    
    
    // Definiendo funcion
    if (window.type === "coredizo"){
        


    }else if (window.type === "coredizoConMarcos"){

    }



    // ojo solo  de pueba
    sessionStorage.setItem("medidas", JSON.stringify(medidas));
})



// Types

// Type corredizo
function functionCoredizo(medidas) {

    
    // Definiendo el subTipo
    let newHeigth = medidas.heigth;
    if (medidas.heigth < 180) {
        medidas.subTipo = "normal";// falta declarar la funcion normal
        normal(medidas);
    }else if (medidas.heigth >= 180) {
        medidas.subTipo = "conPuente";
        newHeigth = Math.trunc((medidas.heigth / 100)*80);
    }// Aaui falta un elseif de tubo escondido;

 


    // Definiendo medidas segun el subtipo de ventana
    function normal(medidas) {
        // Definiendo numero de hojas
        
        for(let a = 1; Math.trunc(medidas.width / a)  >= 37; a++){
            var e = a;
            console.log(e);
        }
        



        // Estableciendo datos
        medidas.m.width = medidas.width,
        medidas.m.position = {x: 0, y: (6.5+transform(medidas.heigth))/2-1.5 ,z: 0};
        medidas.m.cantidad = 1;

        medidas.l.width = medidas.width;
        medidas.l.position = {x: 0, y: -(6.5+transform(medidas.heigth))+5 ,z: 0};
        medidas.l.cantidad = 1;

        medidas.u.width = medidas.width/3+0.1;
        medidas.u.position = {x: 0, y: -(6.5+transform(medidas.heigth))+5 ,z: 1};
        medidas.u.cantidad = NaN;

        medidas.vidrioFijo.width = medidas.u.width;
        medidas.vidrioFijo.heigth = medidas.width-0.1;
        medidas.vidrioFijo.position = medidas.u.position
        medidas.vidrioFijo.cantidad = 2;

        medidas.vidrioCoredizo.width = medidas.u.width;
        medidas.vidrioCoredizo.heigth = medidas.width-0.15;
        medidas.vidrioCoredizo.position = {x: 0, y: -(6.5+transform(medidas.heigth))+5+1.5 ,z: 0}
        medidas.vidrioCoredizo.cantidad = 1;

        medidas.h.width = medidas.width/3+0.1;
        medidas.h.position = {x: 0, y: -(6.5+transform(medidas.heigth))+5+0.05 ,z: 1};
        medidas.h.cantidad = 1;

        medidas.portafelpas.heigth = medidas.heigth-0.1;
        medidas.portafelpas.position = {x: 0, y: -(6.5+transform(medidas.heigth))+5+0.05 ,z: 0};
        medidas.portafelpas.cantidad = 2;

        // enviando datos
        sessionStorage.setItem("medidas", JSON.stringify(medidas));
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





