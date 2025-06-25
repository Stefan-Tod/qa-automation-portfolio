"use strict";
// A class is a blueprint for crating objects. It bundles data (properties) 
// and functions (methods) that work on that data.
Object.defineProperty(exports, "__esModule", { value: true });
// Now, let's create our class.
var TestRun = /** @class */ (function () {
    // The constructor is a special method that is called when we create a new instance of the class.
    // It's used to set up the initial state of the object.
    function TestRun(config) {
        this.status = 'Not Started';
        console.log("Initializing test run for: \"".concat(config.testName, "\"..."));
        this.testName = config.testName;
        this.browser = config.browser;
        this.startTime = new Date(); // Set start time to now
    }
    // Methods: These are the functions that belong to the class.
    // This is a 'public' method (public by default), so it can be called from outside the class.
    TestRun.prototype.startTest = function () {
        this.status = 'Running';
        console.log("Test \"".concat(this.testName, "\" started at ").concat(this.startTime.toLocaleTimeString(), " on ").concat(this.browser, "."));
    };
    TestRun.prototype.endTest = function (wasSuccessful) {
        this.status = wasSuccessful ? 'Passed' : 'Failed';
        var endTime = new Date();
        var duration = (endTime.getTime() - this.startTime.getTime()) / 1000; // duration in seconds
        console.log("Test \"".concat(this.testName, "\" finished with status: ").concat(this.status, ". Duration: ").concat(duration, "s"));
    };
    TestRun.prototype.getStatus = function () {
        return "Current status of \"".concat(this.testName, "\": ").concat(this.status);
    };
    return TestRun;
}());
// --- Using our class to create objects (instances) ---
// 1. Define the configuration for our test
var loginTestConfig = {
    testName: "TC-001: User Login",
    browser: "Chrome"
};
// 2. Create a new instance of the TestRun class
var loginTest = new TestRun(loginTestConfig);
// 3. Call the methods on our new object
console.log(loginTest.getStatus()); // Should show "Not Started"
loginTest.startTest();
console.log(loginTest.getStatus()); // Should show "Running"
// Simulate a test duration and outcome
setTimeout(function () {
    loginTest.endTest(true); // Simulate a successful test
    console.log(loginTest.getStatus()); // Should show "Passed"
}, 2000); // Wait 2 seconds before ending the test
