 // script.js

function encriptar() {
    let texto = document.getElementById("input-text").value;
    if (!validarTexto(texto)) return;

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;
    if (!validarTexto(texto)) return;

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function validarTexto(texto) {
    let regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
        document.getElementById("validation-message").innerText = "No se permiten mayúsculas ni caracteres especiales.";
        return false;
    }
    document.getElementById("validation-message").innerText = "";
    return true;
}
