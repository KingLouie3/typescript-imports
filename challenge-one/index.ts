// Create a file called index.ts and hello-world.ts
// * In hello-world.ts create a function called **helloWorld** that will return "hello world"
// * Then export the helloWorld function from hello-world.ts.
// * import the function into index.ts
// * invoke the function in index.ts and store the result in an exported variable called **greeting**
// * export **greeting** 
// * Convert the code to javascript by running the following command

import {helloWorld} from "./hello-world";

export const greeting = helloWorld();