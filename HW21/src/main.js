
/*TASK 0
Сделайте валидацию кредитной карты, валидация происходит используя алгоритм Луна
Начиная с последнего правого числа, двигаясь влево, умножайте каждое второе число на 2,
если результат умножения > 9, то суммируем получившиеся числа (16: 1 + 6 = 7).
Потом получить сумму всех чисел.
Если сумма кратна 10, то число является подходящим

*/
const  solution = str => {
  let arr = str.split('').reverse();
  arr = arr.map((elem,ind)  => {
    if (ind % 2 != 0) {
      if (elem * 2 > 9){ 
        return  1 + elem * 2 % 10;
      } else { 
        return elem * 2;
      }
    }
    return +elem;
  })
  let sum = arr.reduce((prev,cur) => {
   return prev += cur;
  }, 0);
  return sum%10===0;
}

console.log(solution("4408041234567893")); // true
console.log(solution("1234567890123456")); // false
console.log(solution("4408042234567893")); // false
console.log(solution("38520000023237")); // true
console.log(solution("4222222222222")); // true
