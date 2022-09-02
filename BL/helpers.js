'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chekCollision(el1, el2) {
    let collision = false;
    if (
        el1.x - el2.x > -(this.size) &&
        el1.x - el2.x < this.size &&
        el1.y - el2.y > -(this.size) &&
        el1.y - el2.y < this.size
    ) {
        return (collision = true);
    }
    return collision;
}

export {
    getRandomInt,
    chekCollision,
}