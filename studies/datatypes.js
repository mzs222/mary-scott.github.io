/**
 * 
 * DATATYPES
 * 
 * 0. Datatypes tell us how to operate on a certain variable. 
 *      a. PRIMITIVE DATATYPES are all immutable, meaning their values cannot change once they are assigned.
 *          They are also known as built-in datatypes.
 *          ex: NUMBERS, STRINGS, BOOLEANS, NULL, UNDEFINED
 *      b. NON-PRIMITIVE DATATYPES are derived from primitive datatypes. OBJECTS and ARRAYS are non-primitive datatypes.
 * 
 * 
 * 1. SIMPLE DATATYPES - *These datatypes have a definitive size when stored in memory and
 *                        *They cannot store or collect other values besides themselves
 *      a. NUMBERS - This datatype is a number of numerical value you can work with. 
 *          var num = 12
 *      b. STRINGS - A string is a sequence of characters in quotes.
 *      c. BOOLEANS - A value based on true or false events. A boolean is like an on-off switch.
 * 
 * 2. ARRAYS - An array is a zero-indexed list or a collection that allows us to store a listt of values of any data type
 *  and store them as one variable.
 *      ex: var arrayLiteral = [];
 * 
 * 3. OBJECTS - Objects collect data in the form of {"key": value} pairs called properties.
 *      ex: var myObject = {key1: 'a', key2: 'b'};
 * 
 * 4. FUNCTIONS - A function is a block of code that is created to execute a certain task.
 *  A function needs to be "called" by something in order to execute the task. The values in the parentheses may include parameters.
 *      ex: function myFunction(a, b) {
 *              return a * b; //the function returns the result of a * b
 *              }
 * 
 * 5. UNDEFINED - A variable without a value has the value undefined. The type is also undefined.
 *      ex: var thing; //thing has no value and is undefined
 *      NOTE: A variable with no value is different than an empty value.
 *      ex: var thing = ""; //this is an empty string, not undefined
 * 
 * 6. NULL - Null represents the intentional absence of any object value. Unlike undefined, null does not point to any object.
 *      ex: var foo = null; //foo is known to exist but has no type or value
 * 
 * 7. NaN - NaN is short for "Not-a-Number". NaN is a property of the global object. NaN is a non-configurable, non-writeable property.
 *      NaN can be used to determine whether a value is NaN; it will compare unequal to any other value.
 *      ex: NaN === NaN; //false
 *          isNaN(NaN); //true
 * 
 * 8. INFINITY AND -INFINITY - Infinity is a global property representing infinity. Infinity is not writable, enumerable, or configurable.
 *      -Infinity results in negative infinity.
 *      ex: console.log(Infinity); //prints Infinity
 * 
 * 
 */