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


// Constantes del formlario
const form  = document.getElementById("form-conteiner");
const inputs = document.querySelectorAll("#form-conteiner input")// ho vengo

// Capturando datos del formulario
inputs.forEach( (input) => { /* todavia se puede optimizar mucho */
    input.addEventListener("keyup", (event)=>{ // only number properitys
        windowsFeatures.width = inputs[0].value;/* Ojo con los carecteres especiales ..--+++ */
        windowsFeatures.heigth = inputs[1].value;

        // Enviando datos a session storage
         sessionStorage.setItem("windows", JSON.stringify(windowsFeatures));
    })

    input.addEventListener("click", ()=>{ // full properitys
        inputs.forEach( (i, index)=>{ // mucho ojo con los el orden de los inputs
            if (i.checked == true) {
                if(inputs[index].name == "opcionSubType") windowsFeatures.type = inputs[index].value;
                if(inputs[index].name == "opcionSubType1") windowsFeatures.subType = inputs[index].value;
                if(inputs[index].name == "optionColor-aluminio") windowsFeatures.colorAluminio = inputs[index].value;
                if(inputs[index].name == "opcionWindows") windowsFeatures.tipoVidrio = inputs[index].value;
                if(inputs[index].name == "opcionColor-window") windowsFeatures.colorVidrio = inputs[index].value;
                if(inputs[index].name == "moreOrLess") windowsFeatures.morOrLess = inputs[index].value;
            }
        })
        // Enviando datos a session storage
        sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
    })
})
