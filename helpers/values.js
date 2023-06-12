// Caracteristicas
const windowsFeatures = {
    width: NaN,
    heigth: NaN,
    type: "normal",
    subType: NaN,
    sub_SubType: NaN,
    changeStyle: NaN,
    colorAluminio: NaN,
    tipoVidrio: NaN,
    colorVidrio: NaN,
    morOrLess: 0,
}
// Constantes del formlario
const inputs = document.querySelectorAll("#form-conteiner input")// ho me vengo
const options = document.querySelector("#typeSelect")//

// Capturando datos del formulario
inputs.forEach( (input) => { /* todavia se puede optimizar mucho */
    input.addEventListener("keyup", (event)=>{ // only number properitys
        windowsFeatures.width = inputs[0].value;/* Ojo con los carecteres especiales ..--+++ */
        windowsFeatures.heigth = inputs[1].value;

        // Enviando datos a session storage
         sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
    })

    input.addEventListener("click", ()=>{ // full properitys
        inputs.forEach( (element, index)=>{ // mucho ojo con los el orden de los inputs
            if (element.checked == true) {
                switch (inputs[index].name) {
                    case "opcionSubType1":
                        windowsFeatures.subType = inputs[index].value;
                    break
                    case "optionColor-aluminio":
                        windowsFeatures.colorAluminio = inputs[index].value;
                    break
                    case "opcionType-windows":
                        windowsFeatures.tipoVidrio = inputs[index].value;
                    break
                    case "opcionColor-window":
                        windowsFeatures.colorVidrio = inputs[index].value;
                    break
                    case "moreOrLess":
                        windowsFeatures.morOrLess = inputs[index].value;
                    break
                }
            }
        })
        // Enviando datos a session storage
        sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures));
    })
})
// Opstion
options.addEventListener("change",  (event)=>{
    windowsFeatures.type = event.target.value;
    sessionStorage.setItem("windowsFeatures", JSON.stringify(windowsFeatures))
})
