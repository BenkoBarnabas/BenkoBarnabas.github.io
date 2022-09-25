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
    if(pont >= GRID_SIZE**2 - 1){
        score.innrHTML = "Hatalmas kukacod van!"
    } else{
        score.innerHTML = pont
    }
    

}
