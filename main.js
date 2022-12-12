const addStuff = (num1, num2) => {
    const sum = num1 + num2
    return sum
};

const multiplyStuff = (num1) => {
    const res = num1 * 2
    return res
};

const addedNum = addStuff(2, 3)
const timesTwo = multiplyStuff(addedNum)
console.log(timesTwo);