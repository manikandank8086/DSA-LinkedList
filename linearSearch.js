function search(arr,target){
    for(let i = 0; i<arr.length;i++){
        if(arr[i]==target){
            return i
        } 
    } return -1
}

console.log(search([3,4,5,7,8],5))
console.log(search([6,4,5,7,8],8))
console.log(search([3,4,5,7,8],10))