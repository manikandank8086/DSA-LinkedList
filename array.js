
function calculateAverage(array) {

    if (array.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let average = sum / array.length;
    return average;
}
let numbers = [10, 20, 30, 40, 50]; 
let avg = calculateAverage(numbers)
console.log("Average:", avg); 