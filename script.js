//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const aumenta = document.getElementById('increase')
const diminui = document.getElementById('decrease')
const tamEl = document.getElementById('size')
const corEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

let tamanho = 20
let isPressed= false
let cor = 'black'
let x
let y

canvas.addEventListener('mousedown', (eve) => {/*EVENTO LISTENER QUANDO MOUSEDOWN, PARA DESENHAR AO ARRASTAR */
    isPressed = true

    x = eve.offsetX
    y = eve.offsetY

    console.log(isPressed, x, y)//console log se clicado true e coordenadas
})

canvas.addEventListener('mouseup', () => {
    isPressed = false

    x = undefined
    y = undefined

    console.log(isPressed, x, y)//console log false e undefined undefined quando se larga o botao do rato
})

canvas.addEventListener('mousemove', (eve) => {
    if (isPressed) {
        const x2= eve.offsetX
        const y2= eve.offsetY
        console.log(x2,y2)

        desenhaCirculo(x2, y2)  /*O TRAÇO DE DESENHAR, VAI SER UM DESENHAR DE CIRCULOS CONTINUO COM AS COORDENADAS PASSADAS À FUNÇÃO*/
        desenhaLinha( x, y , x2, y2)

        x = x2
        y = y2
    }
})

function desenhaCirculo(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, tamanho, 0, Math.PI * 2);
    ctx.fillStyle = cor
    ctx.fill()
}

function desenhaLinha(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = cor
    ctx.lineWidth = tamanho * 2
    ctx.stroke()
}

function mudaTamanho(){
    tamEl.innerText = tamanho
}

aumenta.addEventListener('click', ()=> {
    tamanho +=5
    if ( tamanho > 50) {
        tamanho=50
    }
    mudaTamanho()
})
diminui.addEventListener('click', ()=> {
    tamanho -=5
    if ( tamanho < 5) {
        tamanho=5
    }
    mudaTamanho()
})

corEl.addEventListener('change', (eve) => cor = eve.target.value)
clearEl.addEventListener('click', () => ctx.clearRect ( 0, 0, canvas.width, canvas.height))

// desenhaCirculo(100,200)
// desenhaLinha(300,300,300,400)