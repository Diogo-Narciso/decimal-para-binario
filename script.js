window.onload=()=>{
    console.log('carregou')
    let input = document.querySelector('#numeroBinario')
    input.addEventListener('input', validadorDeNumeroDigitado)

}

function eBinario(str){
    if(!str || !str.length){
        document.querySelector('#resultado').innerText='Texto não binario '
        return false;
    }

    for(let i = 0, len = str.length; i < len; i += 1){
        let letra = str[i]
        if(letra !== '0' && letra !== '1'){
            window.alert('Texto não binário');
            document.querySelector('#numeroBinario').value = str.slice(0,str.length-1)
            return false;
        }
    } 
    return true;
}


function conversorDecimal (str){
    return  parseInt(str,2).toString(10)
    
}
function numeroDecimal(novoNumero){
    document.querySelector('#resultado').innerText=novoNumero
}



function validadorDeNumeroDigitado (event) {
    const valorBinario =  eBinario(event.target.value)
    if (valorBinario) {
        const numeroConvertido = conversorDecimal(event.target.value)
        numeroDecimal(numeroConvertido)
    }
    
}








