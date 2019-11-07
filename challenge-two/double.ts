// ##### Instructions
// * Create  two files named index.ts and double.ts
// * In double.ts create a function named **double** that takes in a number and returns it doubled
// * Export the function double
// * In index.ts import the function double from double.ts
// * invoke the function in index.ts, with an input of **15** and store the value in an exported variable named **result**
// * Convert the code to javascript by running the following command
// ```
// $ tsc index.ts
// ```
// * Now test your code with:
// ```
// $ npm test -- challenge-two

export const double = number => {
    return number * 2;
}

