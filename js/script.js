
const userInpunt = document.getElementById("userInput")
const countdown = document.getElementById("countdown")
const result = document.getElementById("result")
const restart = document.getElementById("restart")


intervalJuego = setInterval(evaluarJuego, 6000)

function evaluarJuego() {
    result.classList.remove("explotado", "salvado")
    const userNumero = parseInt(userInpunt.value)
    const jugadaAleatoria = Math.floor(Math.random()*3)+1

    if(!userNumero || userNumero < 1 || userNumero > 3) {
        result.innerText = "Debes introducir un número válido entre 1 y 3"
    }
    
    else if(userNumero===jugadaAleatoria){
        result.innerText = `Has salvado al mundo porque ${jugadaAleatoria} es igual a ${userNumero}`
        result.classList.add("salvado")
    }

    else{
        result.innerText = `La bomba ha explotado porque ${jugadaAleatoria} es diferente a ${userNumero}`
        result.classList.add("explotado")
    }
}


function restartJuego() {
    clearInterval(intervalJuego)
    userInpunt.value = ""
    result.innerText = ""
    intervalJuego = setInterval(evaluarJuego, 6000)
}

restart.addEventListener("click",restartJuego)