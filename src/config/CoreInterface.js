const HealthCheck = require("./HealthCheck");
const ExampleClass = require("./ExampleClass");

/**
 *
 */
class CoreInterface extends HealthCheck, ExampleClass {
    constructor() {
        super();

        console.log('In... CoreInterface')
    }

    init() {

    }
}
module.exports = CoreInterface;