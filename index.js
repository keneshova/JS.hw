// Напишите функцию, которая выводит ваше имя и фамилию.

function myName(Name) {
  console.log("My name is " + Name);
}
myName("Nestana");

// Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).

let a = 3.14;
function coneVolume(height, radius) {
  console.log("Обьем конуса " + (height * a * radius ** 4) / 2);
}
coneVolume(8, 5);

// Напишите функцию, которая принимает строку и возвращает ее длину.

function stringlength(string){
  console.log("Длина строки равна " + string.length);
}
stringlength("Never stop dreaming");

//Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.

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
