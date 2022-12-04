"use strict";

// Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу

// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

class RangeValidator {
  constructor(from = FROM, to = TO) {
    this.from = from;
    this.to = to;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("from must be a number!");
    } else if (from > this._to) {
      throw new RangeError("from must be 0..10 ");
    }
    this._from = from;
  }
  get from() {
    return this.to._from;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("from must be a number!");
    } else if (to < to._from) {
      throw new RangeError("to must be 0..10 ");
    }
    this._to = to;
  }
  get to() {
    return this._to;
  }
  get Range() {
    return [this._from, this._to];
  }
  isValidate(value) {
    if (typeof value !== "number") {
      throw new TypeError("value must be a number!");
    }
    return value >= this._from && value <= this._to;
  }
}

try {
  const val = new RangeValidator();
  console.log(val);
  console.log(val.Range);
  console.log(val.isValidate(5));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Type error!");
  } else if (error instanceof RangeError) {
    console.log("Range error!");
  }
  console.log(error);
}
console.log("************");
