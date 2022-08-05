// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.


function CheckOdd(Number) {
    if (Number % 2 == 1)
        return 1;
    else
        return 0;
}
function FindOddSum(Numbers) {
    let OddSum = 0;
    for (let i of Numbers)
        if (CheckOdd(i))
            OddSum += i;
    return OddSum;
}
const Numbers = [5, 7, 8, 10, 45, 30];
console.log("Sum of Odd Numbers: ", FindOddSum(Numbers));