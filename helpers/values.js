// esta archivo es para ordemar los inputs de la pagina


function cuadrado (width, heigth, numeroDeCortes){
    this.width = width;
    this.heigth = heigth;
    this.numeroDeCortes = numeroDeCortes;
}

var fullWindows = new cuadrado;
// Estableciendo los valores del input
document.getElementById("width").addEventListener("keyup", (event)=>{
    let a = event.path[0].value;
    sessionStorage.setItem("heigth" ,a)
});
document.getElementById("heigth").addEventListener("keyup", (event)=>{
    let a = event.path[0].value;
    sessionStorage.setItem("width" ,a)
});

document.getElementById("typeSelect").addEventListener("change", (event)=>{
    let a = event.path[0].value;
    sessionStorage.setItem("type", a);
})

