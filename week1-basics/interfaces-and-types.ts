// Interfaces and Type Aliases are used to define the "shape" of objects.
// They help ensure that our data structures are consistent.

// 1. Using an Interface to define a Test User
// An interface is like a contract for an object.
// It's common practice to start interface names with 'I' to indicate it's an interface.
interface ITestUser {
    username: string;
    email: string;
    id: number;
    isVerified: boolean;
}

// 2. Using a Type Alias to define Test Configuration
// Type Aliases are generally more flexible and can define more than just object shapes.
type TestConfig = {
    readonly testId: string; // 'readonly' means this property cannot be changed after creation.
    browser: 'Chrome' | 'Firefox' | 'WebKit'; // A literal type - browser must be one of these strings.
    timeout: number;
}; 

// --- Creating objects that conform to our definitions ---
const testUser: ITestUser = {
    username: "test_emily_smith",
    email: "emily.smith@test.com",
    id: 101,
    isVerified: true,
};

const testConfig: TestConfig = {
    testId: "TC-001-Login",
    browser: "Chrome",
    timeout: 5000, // 5000 milliseconds
};

// testConfig.testId = "new-id"; // This would cause an error because testId is readonly.

// --- Using these structures in functions ---

/** 
 * Logs a summart of the test user to the console.
 * @param user - An object that must match the ITestUser interface.
 */
function logUserSummary(user: ITestUser): void { // 'void' means the function doesn't return anything.
    console.log(`User Summary: | Username: ${user.username} | Email: ${user.email} | Verified: ${user.isVerified}`);
}

/**
 * Prints the configuration for the current test run.
 * @param config - An object that must match the TestConfig type.
 */
 function printTestConfig(config: TestConfig): void {
    console.log(`Test Config: | ID: #{config.testId} | Browser: ${config.browser} | Timeout: ${config.timeout}ms`);
 }

 // --- Executing the functions ---

 logUserSummary(testUser);
 printTestConfig(testConfig);

 // This turns the file into a module.
 export {};