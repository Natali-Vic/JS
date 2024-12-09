//1. Напишите программу, которая выводит на экран числа от 1 до 15. При этом вместо чисел: 
/*кратных 3, программа должна распечатывать в консоль слово Fizz
вместо чисел, кратных 5 - слово Buzz
если число кратно 3 и 5, то программа должна распечатывать слово FizzBuzz */

function fizzBuzz(begin, end) {
  //создаем цикл для итерации по заданному интервалу чисел, проверяем кратность деления, и выводим в консоль соответствующее слово
  for (let i = begin; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log ("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log ("Fizz");
    } else if (i % 5 === 0) {
      console.log ("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(1,15);

//2.  Необходимо написать функцию, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю.

function alternateCase(string) {
  //определем переменную для вывода результата
  let result = "";
//создаем цикл для итерации по символам в строке, проверяем регистр каждого символа - верхний/нижний и с помощью методов toUpperCase(), toLowerCase() меняем их
  for (const character of string) {
    if (character === character.toUpperCase()) {
      result += character.toLowerCase();
    } else {
      result += character.toUpperCase();
    }
  }
// возвращаем результат
  return result;
}
console.log(alternateCase("QwErTy")); // 'qWeRtY
console.log(alternateCase("qwertY")); // 'QWERTy'
console.log(alternateCase("qWERTY")); // 'Qwerty



//3. Задача. Необходимо найти наименьшее число в массиве.

function findSmallestInt(args) {
  // Инициализируем переменную smal первым элементом массива args.
  let smal = args[0];

  // Проходим по всем элементам массива args, начиная с первого.
  for (let i = 0; i < args.length; i++) {
    // Если текущий элемент args[i] меньше, чем текущее наименьшее значение (smal),обновляем smal, присваивая ему новое минимальное значение.
    if (args[i] < smal) {
      smal = args[i];
    }
  }

  return smal;
}

console.log(findSmallestInt([34, 15, 88, 2])); // 2
console.log(findSmallestInt([34, -345, -1, 100])); // -345

