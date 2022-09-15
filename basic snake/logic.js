import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid, touchedGrid} from './grid.js'


let gameOverFut = false
let gameOverNyak = false

let ido = 0
let time = document.getElementById('eltelt-ido')

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if (gameOverFut){
        if(confirm('Elszökött a kukac!')){
            window.location = '../'
        }
        return
    }

    if (gameOverNyak){
        if(confirm('A kukac eltörte a nyakát!')){
            window.location = '../'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
    checkIdo()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOverFut = outsideGrid(getSnakeHead()) 
    gameOverNyak = touchedGrid(getSnakeHead()) || snakeIntersection()
}

function checkIdo(){
    time.innerHTML = ido
    ido++
}