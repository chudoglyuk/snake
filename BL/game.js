'use strict';

import { Snake } from "./Snake.js";
import { chekCollision } from "./helpers.js";
import { Apple } from "./apple.js";
import { Field } from "./field.js";
import {
    startButton,
    gameArea,
    addAppleUI,
    removeAppleUI,
    addSnakeHeadUI,
    addSnakeSegmentUI,
    resetGameUI,
    renderSnakeUI,
} from "../UI/UI.js";


const snake1 = new Snake(15, 1);
const apple1 = new Apple(15);
const field1 = new Field(400, 400);

let direction = 'down';
let gameStarted = false;
let gameInterval = null;



gameArea.style.height = field1.height + 'px';
gameArea.style.width = field1.width + 'px';


startButton.addEventListener('click', () => {
    startGame();
})


document.addEventListener("keydown", (ev) => {
    let pressedKey = ev.key.replace("Arrow", "").toLowerCase();
    let directions = ["up", "down", "left", "right"];
    if (directions.includes(pressedKey)) {
        direction = pressedKey;
    }
});


function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        direction = 'down';
        addSnakeHeadUI(snake1);
        addAppleUI(apple1, field1);
        gameInterval = setInterval(() => {
            moveSnake(snake1);
            if (chekLoose(snake1, field1)) {
                stopGameByLoose(snake1);
            }
        }, 5);

    }
}



function chekAppleSnakeCollision(snakeObj, appleObj) {
    for (let segment of snakeObj.body) {
        if (snakeObj.chekCollision(segment, appleObj)) {
            return true;
        }
    }
    return false;
}

function chekSnakeSelfCollision(snakeObj) {
    if (snakeObj.body.length > 2) {
        for (let i = 2; i < snakeObj.body.length - 1; i++) {
            if (snakeObj.chekCollision(snakeObj.head, snakeObj.body[i])) {
                return true;
            }
        }
        return false;
    }
}


function eatApple() {
    if (chekAppleSnakeCollision(snake1, apple1)) {
        removeAppleUI();
        increaseSnake(snake1);
        addAppleUI(apple1, field1);
    }
}

function increaseSnake(snakeObj) {
    snakeObj.increaseBodyByOneSegment();
    addSnakeSegmentUI(snake1);
}

function moveSnake(snakeObj) {
    snakeObj.move(direction);
    renderSnakeUI(snake1);
    eatApple();
};

function chekLoose(snakeObj, fieldObj) {
    if (
        snakeObj.head.x > fieldObj.width - snakeObj.size ||
        snakeObj.head.x < 0 ||
        snakeObj.head.y > fieldObj.height - snakeObj.size ||
        snakeObj.head.y < 0 ||
        chekSnakeSelfCollision(snake1)
    ) {
        return true;
    }
    return false;
}

function stopGameByLoose(snakeObj) {
    removeAppleUI();
    clearInterval(gameInterval);
    resetGameUI();
    snakeObj.resetSnake();
    gameStarted = false;
}

