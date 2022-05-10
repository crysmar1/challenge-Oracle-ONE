const textInput = document.querySelector('.text-encript');
const btnCript = document.querySelector('.conteiner-cript');
const btnDecript = document.querySelector('.conteiner-decript');
const textOutPut = document.querySelector('.text-decript');
const btnCopy = document.querySelector('.conteiner-button-copy');

function encriptText(){
    var s = textInput.value.toLowerCase().split('');
    for(var x = 0; x < s.length; x++){
        if(s[x] === 'a'){
            s[x] = 'ai';
        } else if(s[x] === 'e'){
            s[x] = 'enter';
        } else if(s[x] === 'i'){
            s[x] = 'imes';
        } else if(s[x] === 'o'){
            s[x] = 'ober';
        } else if(s[x] === 'u'){
            s[x] = 'ufat';
        }
    }
    return s.join('');
}

function decriptText(){
    var msg = textInput.value;
    var msgDecript = msg.replaceAll('ai', 'a').
        replaceAll('enter', 'e').
        replaceAll('imes', 'i').
        replaceAll('ober', 'o').
        replaceAll('ufat', 'u');
    
    return msgDecript;
}

function buttonCript(){
    textOutPut.textContent = encriptText();
    textInput.value = '';
    textInput.focus();
}
function buttonDecript(){
    textOutPut.textContent = decriptText();
    textInput.value = '';
    textInput.focus();
}

btnCopy.addEventListener('click', () =>{
    
    //Copia texto para area de transferencia
    navigator.clipboard.writeText(textOutPut.value);
    console.log('Texto copiado para area de transferencia.');
    
});

btnCript.addEventListener('click', buttonCript);
btnDecript.addEventListener('click', buttonDecript);
//btnCopy.addEventListener('click', buttonCopy);
