function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (const type of allowedTypes) {
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}

let allowedTypes = ["string", "number", "boolean"];
let testValue1 = "Hello";

const test1 = validateUnionType(testValue1, allowedTypes);
console.log(test1);

allowedTypes = ["string", "number", "boolean"];
let testValue2 = {name: 'John'};
const test2 = validateUnionType(testValue2, allowedTypes);
console.log(test2)
