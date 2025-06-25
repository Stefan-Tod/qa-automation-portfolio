// A class is a blueprint for crating objects. It bundles data (properties) 
// and functions (methods) that work on that data.

// First, let's define the shape of the data our class will use.
interface ITestConfig {
    testName: string;
    browser: 'Chrome' | 'Firefox';
}

// Now, let's create our class.
class TestRun {
    // Properties: These are the variables that belong to  the class.
    // 'private' means they can only be accessed from within this class.
    private testName: string;
    private browser: string;
    private startTime: Date;
    private status: 'Not Started' | 'Running' | 'Passed' | 'Failed' = 'Not Started';

    // The constructor is a special method that is called when we create a new instance of the class.
    // It's used to set up the initial state of the object.
    constructor(config: ITestConfig) {
        console.log(`Initializing test run for: "${config.testName}"...`);
        this.testName = config.testName;
        this.browser = config.browser;
        this.startTime = new Date(); // Set start time to now
    }

    // Methods: These are the functions that belong to the class.
    // This is a 'public' method (public by default), so it can be called from outside the class.
    public startTest(): void {
        this.status = 'Running';
        console.log(`Test "${this.testName}" started at ${this.startTime.toLocaleTimeString()} on ${this.browser}.`);
    }

    public endTest(wasSuccessful: boolean): void {
        this.status = wasSuccessful ? 'Passed' : 'Failed';
        const endTime = new Date();
        const duration = (endTime.getTime() - this.startTime.getTime()) / 1000 // duration in seconds
        console.log(`Test "${this.testName}" finished with status: ${this.status}. Duration: ${duration}s`);
    }

    public getStatus(): string {
        return `Current status of "${this.testName}": ${this.status}`;
    }
}


// --- Using our class to create objects (instances) ---

// 1. Define the configuration for our test
const loginTestConfig: ITestConfig = {
    testName: "TC-001: User Login",
    browser: "Chrome"
};

// 2. Create a new instance of the TestRun class
const loginTest = new TestRun(loginTestConfig);

// 3. Call the methods on our new object
console.log(loginTest.getStatus()); // Should show "Not Started"
loginTest.startTest();
console.log(loginTest.getStatus()); // Should show "Running"

// Simulate a test duration and outcome
setTimeout(() => {
    loginTest.endTest(true); // Simulate a successful test
    console.log(loginTest.getStatus()); // Should show "Passed"
}, 2000); // Wait 2 seconds before ending the test


export{};