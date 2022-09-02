'use strict';

class Snake {
  constructor(size = 15, step = 1) {
    this.size = size;
    this.step = step;
  }
  body = [{ x: 0, y: 0, lastSteps: [] }];
  head = this.body[0];
  tale = this.body[this.body.length - 1];



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

  addStep(el) {
    let step = {};
    step.x = el.x;
    step.y = el.y;
    return step;
  }

  getLastStepsCoordinates() {
    for (let i = this.body.length - 1; i >= 0; i--) {
      let el = this.body[i];
      el.lastSteps.unshift(this.addStep(el));
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

  moveAllSnake(direction) {
    this.makeStepByDirection(direction);
    this.getLastStepsCoordinates();
    this.moveBody();
  }

  chekCollision(el1, el2) {
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

  chekSelfCollision() {
    if (this.body.length > 2) {
      for (let i = 2; i < this.body.length - 1; i++) {
        if (this.chekCollision(this.head, this.body[i])) {
          return true;
        }
      }
      return false;
    }
  }


  resetSnake() {
    this.body = [{ x: 0, y: 0, lastSteps: [] }]
    this.head = this.body[0];
    this.tale = this.body[this.body.length - 1]
  }
}





export { Snake }