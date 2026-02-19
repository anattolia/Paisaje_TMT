const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const textos = ["uno", "dos", "tres", "cuatro", "cinco"];

// Variable de tipo booleano: dos valores posibles, true o false
let textoInicial = true; 
let iTxt = 0;

varTitulo.addEventListener("click", () => {
    if(textoInicial === true) {
        varTitulo.innerText = "y solitario";
    } else {
        varTitulo.innerText = "un lugar muy verde";
    }
    textoInicial = !textoInicial;
});

varTexto.addEventListener("click", () => {
    varTexto.innerText = textos[iTxt];
    iTxt += 1; // iTxt = iTxt + 1;
})
