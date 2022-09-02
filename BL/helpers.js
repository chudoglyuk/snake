'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chekCollision(el1, el2) {

    if (
        el1.x - el2.x > -(el1.size) &&
        el1.x - el2.x < el1.size &&
        el1.y - el2.y > -(el1.size) &&
        el1.y - el2.y < el1.size
    ) {
        return true;
    }
    return false;
}

export {
    getRandomInt,
    chekCollision,
}