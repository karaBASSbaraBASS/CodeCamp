const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    let squaredIntegers = arr.filter((number) => (number ^ 0) === number && number > 0 );
    squaredIntegers = squaredIntegers.map( (number) => Math.pow(number,2) );

    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Math.pow(base, exponent) - возведение в степень
//(num ^ 0) === num - целое ли число
//number > 0 - позитивное число
//arr.filter((number) => создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback возвратит true.
//arr.map((number) => создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.