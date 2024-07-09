// function reverse(str){
//     if(str.length<=1){
//         return str
//     }else{
//         return str.slice(-1)+reverse(str.slice(0,-1))
//     }
// }
// const string='manu'
// const result=reverse(string)
// console.log(result)


// function reverse(str){
//     if(str.length===0){
//         return str
//     }else{
//         return str.slice(-1)+reverse(str.slice(0,-1))
//     }
// }
// const strnf='manu'
// const result= reverse(strnf)
// console.log(result)


// function reverse(n){
//     if(n==0  || n==1){
//         return n
//     }else{
//         return n.slice(-1)+reverse(n.slice(0,-1))
//     }
// }
// const string = 'manu'
// const result=reverse(string)
// console.log(result)


// function binarySearch(array,target){
//     let first=0
//     let last=array.length-1
//     while(first<=last){
//         let midd=Math.floor((first+last)/2)
//         if(array[midd]=== target){
//             return midd
//         }
//         if(target<array[midd]){
//             last=midd-1
//         }else{
//             first=midd+1
//         }
//     }
// }

// const array=['apple','banana','mango']
// const target='apple'
// console.log(binarySearch(array,target))



function binarySearch(array,target){
    console.log('h')
    let first=0
    let last=array.length-1
    while(first<=last){
        let midd= Math.floor((first+last)/2)
        if(target==array[midd]){
            return midd
        }
        if(target<array[midd]){
            last=midd-1
        }else{
            first=midd+1
        }

    }
}
const array=['Manu','apple','mango']
const target='Manu'
const result=binarySearch(array,target)
console.log(result)
