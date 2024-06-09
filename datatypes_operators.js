var num1 = 12;
var num2 = 3.5;

//sum
var sumResult = num1 + num2;
//difference
var differenceResult = num1 - num2;
//product
var productResult = num1 * num2;
//quotient
var quotientResult = num1 / num2;
//modulus
var modulusResult = num1 % num2;
//exponentiation
var exponentResult = Math.pow(num1, num2);


console.log("sum is:", sumResult);

console.log("difference is:", differenceResult);

console.log("product is:", productResult);

console.log("quotient is:", quotientResult);

console.log("modulus is:", modulusResult);

console.log("exponent is:", exponentResult);

//Exercise 2: Boolean and Operators
//1.

//equality
var equal = 4 == 2;
var stricklyEqual = 4 === 2;
//not equal
var notEqual = 4 != 2;
var stricklyNotEqual = 4 !== 2;
//less than
var lessthan = 4 < 2;
var lessthanOrEqual = 4 <= 2;
//greaterthan
var greaterthan = 4 > 2;
var greaterthanOrEqula = 4 > 2;



//comparing two values using if statement
var x = 8;
var y = 12;
if (x > y)
{
    console.log("x:",x,"is greater than ","y:",y)
}
if (x <= y)
{
    console.log("x:",x,"is less than or equal to","y:",y)
}
if (x == y)
{
    console.log("x:",x,"is equal to","y:",y)
}
if (x != y)
{
    console.log("x:",x,"is not equal to ","y:",y)
}
    
//printing the results of logical operators
var a = true;
var b = false;
//and operator
console.log(`a(${a}) AND b(${b}) = ${a&&b}`)

//OR operator
console.log(`a(${a}) OR b(${b}) = ${a || b}`)

//NOT a
console.log(`Not a(${a}) = ${!a}`)


// using assignment operators to modify the value of p

var p = 10;

// using +=
p += 4;

console.log("p += 4: ",p);

// using -=
p -= 4;

console.log("p -= 4: ",p);

// using *=
p *= 4;

console.log("p *= 4: ",p);

// using /=
p /= 4;

console.log("p /= 4: ",p);

// using %=
p %= 4;

console.log("p %= 4: ",p);






