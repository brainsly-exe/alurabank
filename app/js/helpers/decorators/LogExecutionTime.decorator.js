"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logExecutionTime = void 0;
function logExecutionTime(timeInSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        const timeType = timeInSeconds ? 's' : 'ms';
        const divider = timeInSeconds ? 1000 : 1;
        descriptor.value = function (...args) {
            const initialTime = performance.now();
            const result = originalMethod.apply(this, args);
            const finalTime = performance.now();
            console.log(`Tempo de execução do método ${propertyKey}: ${(finalTime - initialTime) / divider} ${timeType}`);
            return result;
        };
        return descriptor;
    };
}
exports.logExecutionTime = logExecutionTime;
