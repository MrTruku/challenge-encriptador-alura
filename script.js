const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector('btnCopiar');


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}


function encriptar(stringEncriptada){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a' , 'ai'], ['o', 'ober'],['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada 

}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = 'none'

}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a' , 'ai'], ['o', 'ober'],['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada 

}


function Copiar(){
    const mensaje = document.querySelector('.mensaje');
        if (mensaje.value.trim() === "") {
            mensaje.style.backgroundImage = 'none'
            document.getElementById('mensaje-copiar').textContent='Ningun mensaje fue encontrado.'
            document.getElementById('mensaje-copiar-subtitulo').textContent='Ingresa el texto que desees encriptar o desencriptar.'
            return;
        }
        mensaje.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }