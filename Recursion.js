

// factorial


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1); 
//     }
// }


// console.log(factorial(5)); 


// recursion that only recurses 5 time
  // function recursionLimitedTime(n){
  //   if(n <= 0){
  //       return;
  //   }

  //   console.log(n)

  //   if(n>5){
  //       recursionLimitedTime(n-1)
  //   }
  // }

  // recursionLimitedTime(10)

  function factorial(data){
     if(data==0 || data==1){
      return 1
     }else{
      return data*factorial(data-1)
     }
  }

  const data = 5
  const result=factorial(data)
  console.log(result)
