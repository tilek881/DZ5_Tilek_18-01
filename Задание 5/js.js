 //Задание 5


  let str = 'Abrakadabra'
  let letter = 'Hello world'

  let lettersFoundd = 0

  function countChar(str, toll){
    for(let i = 0; i < str.length; i++){
      if(str[i] === toll){
        lettersFoundd++
        console.log(lettersFoundd);
      }
    }
  }
  countChar(str,letter)