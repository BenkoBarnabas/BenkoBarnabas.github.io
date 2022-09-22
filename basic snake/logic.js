import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, snakeBody} from './snake.js'
import {update as updateFood, draw as drawFood, pont} from './food.js'
import {outsideGrid, touchedGrid, GRID_SIZE} from './grid.js'


let gameOverFut = false
let gameOverNyak = false
let score = document.getElementById('score')

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
    checkWin()
    checkDeath()
    checkScore()
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

function checkScore(){
    score.innerHTML = pont
}

function checkWin(){
    if (Object.keys(snakeBody) == Math.pow(2, GRID_SIZE)){
        score.innerHTML = "Nagyon nagy a kukacod!"
    }
}