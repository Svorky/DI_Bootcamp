function validateUnionType(value, allowedTypes) {
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}
var allowedTypes = ["string", "number", "boolean"];
var testValue1 = "Hello";
var test1 = validateUnionType(testValue1, allowedTypes);
console.log(test1);
allowedTypes = ["string", "number", "boolean"];
var testValue2 = { name: 'John' };
var test2 = validateUnionType(testValue2, allowedTypes);
console.log(test2);
