// 1.Напишите функцию, которая выводит ваше имя и фамилию.

function myName(Name) {
  console.log("My name is " + Name);
}
myName("Nestana");

//2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).

let a = 3.14;
function coneVolume(height, radius) {
  console.log("Обьем конуса " + (height * a * radius ** 4) / 2);
}
coneVolume(8, 5);

//3. Напишите функцию, которая принимает строку и возвращает ее длину.

function stringlength(string){
  console.log("Длина строки равна " + string.length);
}
stringlength("Never stop dreaming");

// 4.Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.

function number(v) {
  if( v % 2 === 0){
    console.log(v + " even");
  }
  else if( v % 2 === 1){
    console.log(v + "odd");
  }
  else{
    console.log( v + " is not a number");
  }
}
number("2")

// 5.Напишите функцию, которая возвращает квадрат числа
function san(a) {
  total = a ** 2;
  console.log(" Квадрат данного числа равен на " + total);
}
san(4);

//6. Напишите функцию, которая возвращает корень числа.

function num(b) {
  console.log("Корень равен на " + Math.sqrt(b));
}
num(9);

//7.Напишите функцию, которая возвращает периметр пятиугольника.
function perimeterOfPentagon(a, b, c, d, e) {
  perimeter = a + b + c + d + e;
  console.log(" Периметр пятиугольника равна " + perimeter);
}
perimeterOfPentagon(3, 4, 2, 6, 8);

//8.Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.

let number1 = 33;
for(let i = 0; i <= number1; i++) {
  if (i % 3 === 0){
    console.log(i);
  }
}

//9.Напишите цикл, вычисляющий факториал числа 8. (8!)

function factorial(n){
  let result = 1;
  while(n){
    result *= n--;
  }
  return result;
}

//10.Напишите цикл, который выводит квадраты чисел от 1 до 10.

let number2 = 10;
for (let i = 0; i <= number2; i++) {
  result = i ** 2;
  console.log(result);
}

//11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
//12. Напишите цикл, который печатает четные числа от 0 до 20.
for (a = 0; a <= 20; a++ ){
  if (a % 2 === 0){
    console.log(a);
  }
}
//13.Напишите цикл, который печатает нечетные числа от 1 до 15.
for (b = 0; b <= 15; b++) {
  if (b % 2 ==! 0) {
    console.log(b);
  }
}