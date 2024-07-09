//    function factorial(n){
//     if( n === 0 | n=== 1 ){
//         return 1
//     }else {
//         return n * factorial(n-1)
         
//     }
//    }

//    const number= 6
//    const result = factorial(number)
//    console.log(`number is ${number} and factorial number is ${result}`)

function factorial(n){
    if(n===0 || n===1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

const n =5
const result= factorial(n)
console.log('result is ' +  result)