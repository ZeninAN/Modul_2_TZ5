// 1 задание
function findMedian(numbers: number[]): number {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
  } else {
    return sortedNumbers[middle];
  }
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const median = findMedian(numbers);
console.log(median);
//2 задание
function countNonZeroElementsInRange(matrix: number[][]): number {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i]?.[j] !== 0) {
        count++;
      }
    }
  }
  return count;
}
const matrix: number[][] = [
  [1, 0, 3],
  [2, 4, 0],
  [0, 5, 6]
];
const result = countNonZeroElementsInRange(matrix);
console.log(result);
// 3 задание 
enum Vitamins {
  A = "A",
  B3 = "B3",
  B6 = "B6",
  B12 = "B12"
}
console.log(Vitamins.B3);
// 4 задание
class Pet {
  name: string = 'Some pet';
  age: number = -1;
  speak() {
    return "No speak. I am fish!";
  }
}

class Dog extends Pet {
  label: string = "AngryHunter";
  age: number = 8;
  speak() {
    return "Yaw-Gaw!";
  }
}

class Cat extends Pet {
  name: string = 'Barsik';
  age: number = 2;
  speak() {
    return "Miyau!";
  }
}
function printType<T extends Pet>(pet: T): void {
  console.log(`Имя: ${pet.name}`);
  console.log(`Возраст: ${pet.age}`);
  console.log(`Звук: ${pet.speak()}`);
}
let dog: Dog = new Dog();
printType(dog);
console.log();
//5 задание 
interface Vitamin {
  name: string,
  type: Vitamins,
  price: number
}
let vitamin: Vitamin = {
  name: "B3",
  type: Vitamins.B3,
  price:199
}
const vit: string = JSON.stringify(vitamin);
console.log(vit);