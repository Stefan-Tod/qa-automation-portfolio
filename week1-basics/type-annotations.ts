// 1. Basic Type Annotations in TypeScript
// We explicitly tell TypeScript the type of our variables
let framework: string = "Cypress";
let version: number = 13.7;
let isLearning: boolean = true;

// This would cause an error, which is good!
// framework = 10;

console.log(`I am learning ${framework}") version ${version}. Is it true? $(isLearning)`);

// 2. Type Annotations for function parameters and return values
/**
 * A simple funkction to create a user greeting
 * @param username - The name of the user (must be a string!)
 * @returns A personalized greeting string
 */
function greetUser(username: string): string {
    return `Hello, ${username}! Welcome to our test application.`;
}
console.log(greetUser("Emily"));

// 3. Optional Parameters
/**
 * Generates a user profile summary. The user's age is optional.
 * @param username - The user's mandatory username.
 * @param age - The user's optional age.
 * @returns A summary string.
 */
function createUserProfile(username: string, age?: number): string {
    if (age) {
        return `User: ${username}, Age: ${age}`;
    } else {
        return `User: ${username}, Age: Not provided`;
    }
}

console.log(createUserProfile("Emily"));
console.log(createUserProfile("Emily", 25));

// 4. Avoiding 'any' (and understanding it)
// While 'any' is flexible, it disables type-checking. We use it only when absolutely necessary.
let someDataFromApi: any;
someDataFromApi = "This could be a string";
someDataFromApi = 50; // or a number
someDataFromApi = { key: "value" }; // or an object

// A better approach is to use 'unknown' or specific type if possible.
export {};