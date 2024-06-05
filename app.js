// Q1 add the sum of two numbers
function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 5));


// Q2 convert hours into seconds
function hourToSeconds(hours) {
    return hours * 3600;
}

console.log(hourToSeconds(2));


// Q3 Calculate the Perimeter of a Rectangle
function perimeter(length, width) {
    return length * 2 + width * 2;
}

console.log(perimeter(6, 7));


// Q4 Calculate the Area of a Triangle
function areaOfTriangle(base, height) {
    return 0.5 * (base * height);
}

console.log(areaOfTriangle(10, 10));


// Q5 Extend a String
function addFrontend(word) {
    return word + 'Frontend';
}

console.log(addFrontend('Apple'));


// Q6 Greater than 100
function sumGreaterThan100(number1, number2) {
    if (number1 + number2 > 100) {
        return true;
    }
    else {
        return false;
    }
}

console.log(sumGreaterThan100(50, 60));


// Q7 Less than or Equal to Zero
function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(1));


// Q8 Opposite boolean
function oppostieBoolean(opposite) {
    return !opposite;
}

console.log(oppostieBoolean(true));


// Q9 Is not the number 0
function isNotZero(number) {
    return number !== 0;
}

console.log(isNotZero(5));


// Q10 Calculate the remainder
function calcRemainder(n1, n2) {
    return n1 % n2;
}

console.log(calcRemainder(7, 8));


// Q11 Is the number odd
function isOdd(number1, number2) {
    return (number1 + number2) % 2 !== 0;    
}

console.log(isOdd(3, 2));


// Q12 If a number is even, return 1 otherwise return -1
function booleanInteger(num) {
    if (num % 2 === 0) {
        return 1;
    }
    return -1;
}

console.log(booleanInteger(4));

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(3));


// Q13 Check is a user is logged in AND subscribed
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === "logged_in") && (subscribed === "subscribed");
}

console.log(isLoggedInAndSubscribed("logged_in", "subscribed"));


// Q14 Check if a user is logged in OR subscribed
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === "logged_in") || (subscribed === "subscribed");
}

console.log(isLoggedInAndSubscribed("logged_in", "unsubscribed"));

