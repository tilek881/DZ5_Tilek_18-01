//Задание 1



  function reverse (str){
  let splitStr = str.split('')
  let reverseArr = splitStr.reverse()
  let joinArr = reverseArr.join('')
  return console.log(joinArr);
  }
  reverse('Tilek')




//   let number = 123456789
// let reverse = number.toString().split('').reverse().join('');
// if (reverse.endsWith('-')) {
//   reverse = '-' + reverse;
// }
//
// reverse = parseInt(reverse);
// // Вывод: 987654321
// console.log(reverse);