/**
 * 
 * OPERATORS
 * 
 * An operator performs a type of operation on a data value/s (a.k.a. operand/s) and produces a result.
 * 
 * 1. ASSIGNMENT OPERATOR - Assigns values to variables.
 *      = //assigns right operand to left operand
 *      += //sums up left and right operand values and assigns the result to the left operand
 *      -= //subtracts right operand from left operand and assigns result to the left operand
 *      *= //multiples right and left operands and assigns result to the left operand
 *      /= //divides left operand by right operand and assigns result to the left operand
 *      %= //gets the MODULUS of left operand divides by right operand and assigns resulted modulus to the left operand
 * 
 * 2. ARITHMETIC OPERATOR - performs mathematical operations between operands
 *      + //adds operands
 *      - //subtracts right operand from left
 *      * //multiples numeric operands
 *      / //divides left operand by right operand
 *      % //MODULUS returns remainder of two operands
 *      ++ //increment operand, increase operand value by one
 *      -- //decrement operand, decrease operand value by one
 * 
 * 3. COMPARISON OPERATORS - compares two operands and returns a boolean value true or false
 *      == //compares the equality of two operands without type
 *      === // 'strictly equal'; compares equality of two operands with type
 *      != //'bang operator'; compares inequality of two operands
 *      > //returns boolean true if left operand is greater than right
 *      < //returns boolean true if left operand is lesser than right
 *      >= //returns boolean true if left operand is greater than or equal to right 
 *      <= //returns boolean true if left operand is lesser than or equal to right
 * 
 * 4. LOGICAL OPERATORS - logical operators combine two or more conditions
 *      && //AND operator checks whether two operators are non-zero or not (0, false, undefined, null, "" are zero)
 *      || //OR operator checks whether ANY of two operators are non-zero or not
 *      
 * 
 * 5. UNARY OPERATORS - unary operators only use one operand
 *      + //attempts to convert operand to a number
 *      - //attempts to convert operand to a number and negates it after
 *      ! //NOT operator reverses the boolean result of the condition or operand 
 *          ex: !false returns true; !true returns false;  
 *      typeOf //returns a string which is a type of operand
 * 
 * 6. TERNARY OPERATORS - ternary operators are like if else conditions. They assign a value to a variable based on a condition.
 *      <condition> ? <value1> : <value2> //The second part will continue if the first part is true. If the second part is false,
 *          the third part will not execute.
 *          ex: var a = 10, b = 5;
 *              var c = a > b? a : b; //value of c would be 10
 *              var c = a > b? b : a; //value of c would be 5
 *      
 * 
 */