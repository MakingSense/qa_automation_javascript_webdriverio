/**
 * List are handler as arrays in javascript, here is a helper to work with them
 */
class Array {
    constructor(array){
        this.array = array;
    }

/**
 * returns the value of the first element in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 * @param functionToEvaluate
 * @returns {*[]}
 */
    findFirst(functionToEvaluate){
        return this.array.find( (element) => {
            return functionToEvaluate(element);
        });
    }

/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 * @param condition
 * @returns {*[]}
 */
    filterByCondition(condition){
        return this.array.filter( (element) => {
            return condition(element);
        });
    }

/**
 * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
 * It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
 * @param functionToEvaluate
 * @returns {boolean}
 */
    hasSome(functionToEvaluate){
        return this.array.some( (element) => {
            return functionToEvaluate(element);
        });
    }

/**
 *  Method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 * @param functionToEvaluate
 * @returns {boolean}
 */
    allAppliedCondition(functionToEvaluate){
        return this.array.every( (element) => {
            return functionToEvaluate(element);
        });
    }

/**
 * Executes a provided function once for each array element.
 * @param functionToApply
 */
    forEach(functionToApply){
        this.array.forEach((element) => {
            functionToApply(element);
        });
    }

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * Offical Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * @param value
 * @returns {boolean}
 */
    contains(value){
        return this.array.includes(value);
    }
}
module.exports = Array;