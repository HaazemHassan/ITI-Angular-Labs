class Shape {
  constructor(shapeName) {
    if (this.constructor.name === "Shape") {
      throw new Error("can't inherit");
    }
    this.shapeName = shapeName;
  }

  getArea() {
    throw new Error("you must implement this method first");
  }

  getPerimeter() {
    throw new Error("you must implement this method first");
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `shape: ${
      this.shapeName
    }, area: ${this.getArea()}, perimeter: ${this.getPerimeter()}`;
  }
}

export class Rectangle extends Shape {
  constructor(width, height) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `shape: ${
      this.shapeName
    }, area: ${this.getArea()}, perimeter: ${this.getPerimeter()}`;
  }
}

export class Square extends Rectangle {
  constructor(width) {
    super(width, width);
    this.shapeName = "square";
  }
}
