'use strict';
import { getRandomInt } from "./helpers.js";

class Apple {
    constructor(size = 10) {
        this.size = size;
    }

    x = 0;
    y = 0;

    setRandomCoordinateX(min, max) {
        this.x = getRandomInt(min, max);
    }

    setRandomCoordinateY(min, max) {
        this.y = getRandomInt(min, max);
    }
}

export { Apple }