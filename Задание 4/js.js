//Задание 4


  const reqExp = /^[0,1,2]\d{13}/

  function valid(inn){
    if(reqExp.test(inn)){
      console.log('Валидация прошла');
    }else{
      console.log('валидация не прошла');
    }
  }
  valid(11234567891234)