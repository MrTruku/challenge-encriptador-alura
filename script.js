const textArea = document.querySelector('.text-area')
const mensaje = document.querySelector('.mensaje')
const btnCopiar = document.querySelector('btnCopiar')


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ''
    mensaje.style.backgroundImage = 'none'
}

function encriptar(stringEncriptado){
    
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a' , 'ai'], ['o', 'ober'],['u', 'ufat']]

    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i< matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptado
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ''
    mensaje.style.backgroundImage = 'none'

}

function desencriptar(stringDesencriptado){
    
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a' , 'ai'], ['o', 'ober'],['u', 'ufat']]

    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i< matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
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
