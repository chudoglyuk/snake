'use strict';

const gameArea = document.querySelector('.field');
const startButton = document.querySelector('.start-button');

let snakeBodyUIElements = [];
let apple = null;





function addAppleUI(appleObj, fieldObj) {
    apple = document.createElement('div');
    apple.style.width = appleObj.size + 'px';
    apple.style.height = appleObj.size + 'px';
    appleObj.setRandomCoordinateY(0, fieldObj.height - appleObj.size);
    appleObj.setRandomCoordinateX(0, fieldObj.height - appleObj.size);
    apple.style.top = appleObj.y + 'px';
    apple.style.left = appleObj.x + 'px';
    apple.classList.add('apple');
    gameArea.appendChild(apple);

}

function removeAppleUI() {
    gameArea.removeChild(apple);
}


function addSnakeHeadUI(snakeObj) {
    let snakeHead = document.createElement('div');
    snakeHead.style.height = snakeObj.size + 'px';
    snakeHead.style.width = snakeObj.size + 'px';
    snakeHead.style.top = snakeObj.head.y + 'px';
    snakeHead.style.left = snakeObj.head.x + 'px';
    snakeHead.classList.add('snake-head');
    gameArea.appendChild(snakeHead);
    snakeBodyUIElements.push(snakeHead);


}


function addSnakeSegmentUI(snakeObj) {
    let newSnakeSegment = document.createElement('div');
    newSnakeSegment.style.width = snakeObj.size + 'px';
    newSnakeSegment.style.height = snakeObj.size + 'px';
    newSnakeSegment.style.top = snakeObj.tale.y + 'px';
    newSnakeSegment.style.left = snakeObj.tale.x + 'px';
    newSnakeSegment.classList.add('snake-body');
    gameArea.appendChild(newSnakeSegment);
    snakeBodyUIElements.push(newSnakeSegment);
}

function renderSnakeUI(snakeObj) {

    for (let i = 0; i < snakeObj.body.length; i++) {
        snakeBodyUIElements[i].style.top = snakeObj.body[i].y + 'px';
        snakeBodyUIElements[i].style.left = snakeObj.body[i].x + 'px';
    }
}

function resetGameUI() {
    snakeBodyUIElements = []
    while (gameArea.firstChild) {
        gameArea.lastChild.remove();
    }
}


export {
    startButton,
    gameArea,
    addAppleUI,
    removeAppleUI,
    addSnakeHeadUI,
    addSnakeSegmentUI,
    resetGameUI,
    renderSnakeUI,
}