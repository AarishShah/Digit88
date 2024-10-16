// Reverse an object structure. You are given an object where each key maps to a single value. Write a function that reverses the object, such that the values become keys and the keys become values.
// However, the object may have multiple keys with the same value, and the reversed object should store these as arrays of keys.

// Example:
// Input: { a: 1, b: 2, c: 1 }
// Output: { 1: ['a', 'c'], 2: ['b'] }

const reverse = (grapes) =>
{
    let reversedObj = {};
    for (const key in grapes)
    {
        if (reversedObj[grapes[key]])
        {
            reversedObj[grapes[key]].push(key);
        } else
        {
            reversedObj[grapes[key]] = [key];
        }
    }
    return reversedObj;
};

const apple = { a: 1, b: 2, c: 1 };

console.log(reverse(apple));