// Lazy initialization pattern. Create a function that implements lazy initialization. The first time a function is called, it should perform a certain task, but on subsequent calls, it should skip the task and return the cached result instead.

// Given function
const expensiveFunction = () =>
{
    console.log('Performing expensive operation');
    return 42;
};

// Solution
const lazyInit = (fn) =>
{
    let result;
    return () =>
    {
        return result || (result = fn());
    };
};


const lazy = lazyInit(expensiveFunction);

console.log(lazy()); // Function call, executes expensiveFunction entirely
console.log(lazy()); // Function call, returns cached result only because lazyInit is not calling expensiveFunction again

// Solution Explanation: Instead of calling expensiveFunction every time, we are calling lazyInit. lazyInit is returning a function that is checking if the result is already calculated or not. If it is calculated, it returns the cached result, otherwise it calls expensiveFunction and caches the result for future calls.