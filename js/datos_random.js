const datosRandom = [
    "Estudió escultura: Se licenció en Bellas Artes en la Universidad de Columbia.",
    "Escribió para enciclopedias: En sus inicios, redactaba críticas de arte para subsistir en Nueva York.",
    "Directora de cine: Dirigió el aclamado documental Heart of a Dog (2015).",
    "Aficionada al Tai Chi: Practica y promueve esta disciplina marcial desde hace décadas.",
    "El violín digital: Co-diseñó un violín electrónico de 6 cuerdas capaz de lanzar muestras MIDI.",
    "Trabajó en una granja: Antes de ser famosa, recolectó algodón en una comuna hippie.",
    "Ilustradora de libros: Ha dibujado e ilustrado varios de sus propios libros de relatos.",
    "Conciertos sorpresa: Solía tocar el violín en el subte de Nueva York sin que nadie la reconociera.",
    "Activista del código: Defiende el software libre y el código abierto en el arte digital."

];
const boton = document.getElementById('btn-Random');
function mostrarDatoAlAzar(){
const indiceAleatorio = Math.floor(Math.random() * datosRandom.length);
const contenedorTexto = document.getElementById ('textoRandom');
contenedorTexto.textContent = datosRandom[indiceAleatorio];
}
boton.addEventListener('click', mostrarDatoAlAzar);
    