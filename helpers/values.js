// Caracteristicas
let windowsFeatures = {
    width: NaN,
    heigth: NaN,
    type: NaN,
    subType: NaN,
    colorAluminio: NaN,
    tipoVidrio: NaN,
    colorVidrio: NaN,
    morOrLess: 0,
}
sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures))


// Estableciendo los valores del input
document.getElementById("width").addEventListener("keyup", (event)=>{
    let a = event.path[0].value;
    windowsFeatures.width = a;
    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
});

document.getElementById("heigth").addEventListener("keyup", (event)=>{
    let a = event.path[0].value;
    windowsFeatures.heigth = a;
    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
});

document.getElementById("typeSelect").addEventListener("change", (event)=>{
    // Estableciendo el tipo 
    let a = event.path[0].value;
    windowsFeatures.type = a;

    // Deshacer cada vez que cambies de opcion
    document.getElementById("sub-type-conMarco").style.display = 'none';
    document.getElementById("sub-type-corredizo").style.display = 'none';
    document.getElementById("sub-type-corredizo").style.display = 'none';

    // condicion para el problema el subtipo no se autoselesciona con el checkqed
    // if (a === "0")a = "normal"


    if (a === "coredizo"){
        document.getElementById("sub-type-corredizo").style.display = 'block';

        // condicion para el problema el subtipo no se autoselesciona con el checkqed
        windowsFeatures.subType = "normal";// Eleccion por de fecto
        sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
        
        document.getElementById("sub-type-corredizo").addEventListener("click", (i)=>{
            windowsFeatures.subType = i.path[0].value;
            sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
        })
    }else if (a ==="coredizoConMarcos"){// Falta
        document.getElementById("sub-type-conMarco").style.display = 'block';
        document.getElementById("sub-type-conMarco").addEventListener("click", (e)=>{
            windowsFeatures.subType = e.path[0].value;
            sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
        })
    }


    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
});

document.getElementById("conteiner-optionColors").addEventListener("click", (e)=>{
    windowsFeatures.colorAluminio = e.target.value;
    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
    console.log(windowsFeatures.colorAluminio);
});

document.getElementById("conteiner-typeWindow").addEventListener("click", (e)=>{
    windowsFeatures.tipoVidrio = e.target.value;
    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
});

document.getElementById("conteiner-opcionColor").addEventListener("click", (e)=>{
    windowsFeatures.colorVidrio = e.target.value;
    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
});

document.getElementById("conteiner-moreOrLess").addEventListener("click", (e)=>{
    if(e.target.value == "+")windowsFeatures.morOrLess++;
    if(e.target.value == "-")windowsFeatures.morOrLess--;
    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
});

// if ((Math.trunc(160 / a) + 2)  >= 37){

// }   

// for(let a = 1; (Math.trunc(160 / a) + 2)  >= 37; a++){
//     var e = a;
//     console.log(e);
// }

