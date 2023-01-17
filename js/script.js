function espacioVista(frase) {
    document.getElementById("vista-mensaje").innerHTML = `
        <textarea id="salida" class="salida" rows="8" readonly></textarea>
        <button class="btn_copiar" onclick="copiar()">Copiar</button>
    `;
}

function validacion(frase) {
    let regex = /[A-ZÀ-ú]/;
    return (!regex.test(frase) && frase != '');
}

function encriptar(frase) {
    let textoEncriptado = frase.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        return textoEncriptado;
}

function desencriptar(frase) {

    let textoDesencriptado = frase.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
   
        return textoDesencriptado;
}

function mostrarEncriptado() {
    
    let frase = document.getElementById("texto-encriptado").value;

    if(validacion(frase)) {
        espacioVista(frase);

        document.getElementById("salida").value = encriptar(frase);
    } else {
       alert('Su mensaje es incorrecto, Evite dejar el campo vacío o utlizar mayúsculas y/o acentos.', true);
    }
}

function mostrarDesencriptado() {
    
    let frase = document.getElementById("texto-encriptado").value;

    if(validacion(frase)) {
        espacioVista(frase);

        document.getElementById("salida").value = desencriptar(frase);
    } else {
        alert('Su mensaje es incorrecto, Evite dejar el campo vacío o utlizar mayúsculas y/o acentos.', true);
    }
}

function copiar() {
   
    let copiartexto = document.getElementById("salida").value;
    navigator.clipboard.writeText(copiartexto);

    alert('Mensaje copiado', true);

}








