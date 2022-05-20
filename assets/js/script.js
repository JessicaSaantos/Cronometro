// ============= TABELA DE CONVERSÃO ===========================
const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

let total;
let dataFinal;
let intervalId;
let res = document.querySelector('h1') 

// ============= VERIFICANDO SE O TIMER JÁ ESTÁ RODANDO ===========================
if (localStorage.getItem('timer')) {
    dataFinal = localStorage.getItem("timer")
    intervalId = setInterval(timer , 1000)
}


function start() {
    const dataInput = document.querySelector("input").value
    dataFinal = new Date(dataInput).getTime()
    localStorage.setItem("timer" , dataFinal ) // mantendo os dados salvos no navegador
    // mesmo fechando a pgn
    

    intervalId = setInterval(timer , 1000) // chamar a função a cada 1 segundo
}

function timer () {
    let now = new Date().getTime()
    total = dataFinal - now
    
    const days = Math.floor(total / day) 
    const hours = Math.floor((total % day) / hour + 3) 
    const mints = Math.floor((total % hour) / minute) 
    const seconds = Math.floor((total % minute) / second) 

    res.innerText = `${days} Dias , ${hours}H:${mints}M e ${seconds}S`

}

function stop() {
    res.innerText = '🧐⌛'
    clearInterval(intervalId)
    localStorage.removeItem("timer")
}