
const userInpunt = document.getElementById("userInput")
const countdown = document.getElementById("countdown")
const result = document.getElementById("result")
/* const resart = getElementById("restart") */


const jugadaAleatoria = new Promise((resolve) => {
    setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random()*3)+1
        resolve(numeroAleatorio)
    }, 5000)
})

setInterval(evauarJuego, 5000)

function evauarJuego() {
    const userNumero = parseInt(userInpunt.value)
    jugadaAleatoria.then((jugada)  => {
    if(userNumero===jugada){
        result.innerText = `Has salvado al mundo porque ${jugada} es igual a ${userNumero}`
    }
    else{
        result.innerText = `La bomba ha explotado porque ${jugada} es diferente a ${userNumero}`
    }
})

}