 //Задание 2

  function palindrome(str){
    return str.split('').reverse().join('') == str
  }
  console.log(palindrome('topot'));