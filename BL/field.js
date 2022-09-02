'use strict';

class Field {
    constructor(height = 500, width = 500) {
        this.height = height;
        this.width = width;
    }

    childObjects = [];

    clearChildObjects() {
        this.childObjects.splice(0, this.childObjects.length)
    }



}

export { Field }