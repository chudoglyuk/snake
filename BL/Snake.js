'use strict';

class Snake {
  body = [{ x: 0, y: 0, lastSteps: [] }];
  head = this.body[0];
  tale = this.body[this.body.length - 1];


  constructor(size = 15, step = 1) {
    this.size = size;
    this.step = step;
  }



  makeStepByDirection(direction) {
    switch (direction) {
      case "down":
        this.head.y += this.step;
        break;
      case "up":
        this.head.y -= this.step;
        break;
      case "right":
        this.head.x += this.step;
        break;
      case "left":
        this.head.x -= this.step;
    }
  }

  getStepCoordinates(el) {
    let step = {};
    step.x = el.x;
    step.y = el.y;
    return step;
  }

  makeLastStepsCollection() {
    for (let i = this.body.length - 1; i >= 0; i--) {
      let el = this.body[i];
      el.lastSteps.unshift(this.getStepCoordinates(el));
      if (el.lastSteps.length > this.size / this.step) {
        el.lastSteps.pop();
      }
    }
  }

  createNewSegment() {
    let newSegment = { x: 0, y: 0, lastSteps: [] };
    newSegment.x = this.tale.lastSteps[this.tale.lastSteps.length - 1].x;
    newSegment.y = this.tale.lastSteps[this.tale.lastSteps.length - 1].y;
    return newSegment;
  }

  increaseBodyByOneSegment() {
    this.body.push(this.createNewSegment());
  }



  moveBody() {
    if (this.body.length > 1) {
      for (let i = 1; i < this.body.length; i++) {
        let el = this.body[i];
        let previosEl = this.body[i - 1];
        let previosElLastStep =
          previosEl.lastSteps[previosEl.lastSteps.length - 1];
        el.x = previosElLastStep.x;
        el.y = previosElLastStep.y;
      }
    }
  }

  move(direction) {
    this.makeStepByDirection(direction);
    this.makeLastStepsCollection();
    this.moveBody();
  }


  resetSnake() {
    this.body = [{ x: 0, y: 0, lastSteps: [] }]
    this.head = this.body[0];
    this.tale = this.body[this.body.length - 1]
  }
}





export { Snake }