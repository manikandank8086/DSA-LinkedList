// // function binarySearch(arr, target) {
// //     let firstIndex = 0;
// //     let lastIndex = arr.length - 1;

// //     while (firstIndex <= lastIndex) {
// //         let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
// //         console.log(middleIndex)

// //         if (arr[middleIndex] === target) {
// //             return middleIndex;
// //         }

// //         if (target < arr[middleIndex]) {
// //             lastIndex = middleIndex - 1;
// //         } else {
// //             firstIndex = middleIndex + 1;
// //         }
// //     }
// //     return -1;
// // }

// // console.log( 'result is '+  binarySearch([2, 3, 4, 5, 6, 7, 8, 9],4));



//  function binarySearch(arr,target){
//     let firstIndex = 0
//     let lastIndex = arr.length-1

//     while(firstIndex <= lastIndex){
//          let middleIndex = Math.floor((firstIndex+lastIndex)/2)
//          if(arr[middleIndex]=== target){
//             return middleIndex
//          }
//          if( target < arr[middleIndex]){
//               lastIndex = middleIndex -1
//          }else {
//             firstIndex = middleIndex +1
//          }
//     }
//     return -1
//  }

//  console.log(binarySearch([1,2,3,4,5,6,7],4))




// function binarySearch(arr,target){
//     let first = 0
//     let last = arr.length-1

//     while(first<=last){
//       let midd = Math.floor((first+ last)/2)
//       if(target=== arr[midd]){
//         return midd
//       }
//       if(target < arr[midd]){
//         first = midd+1
//       }else{
//         last = midd -1
//       }
//     }
// }

// const array = ['manu','apple','manog']
// const target = 'manu'
// console.log(binarySearch(array,target))


function reverseString(data){
  if(data.length==0 || data.length==1){
    return data
  }else{
     return data.slice(-1)+reverseString(data.slice(0,-1))
  }
}

const strign = 'Haloo'
const result=reverseString(strign)
console.log(result)
 