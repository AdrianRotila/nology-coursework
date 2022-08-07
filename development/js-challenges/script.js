// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
const isNumberPositive = (number) => {
    if (number < 0) {
        console.log("false");
    } else if(number >=0 ) {
        console.log("true");
    }
}

isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true

// 2. Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (days) => {
    const age = days/365;
    console.log(age);
}

convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18

// 3. Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = (firstNumber, secondNumber, thirdNumber) => {
    let largestNumber = firstNumber;
    if(largestNumber < secondNumber){
        largestNumber = secondNumber;
    } else if (largestNumber < thirdNumber) {
        largestNumber = thirdNumber;
    }
    console.log(largestNumber);
}

getLargestNumber(2 ,1, 4); // returns 4
getLargestNumber(6, 2, 3); // returns 6

// 4. Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = ([firstName, secondName, thirdName]) => {

    if(secondName == null){
        console.log(firstName);
    } else if(thirdName == null){
        console.log(secondName);
    } else {
        console.log(thirdName);
    }
}

getLastName(["Charlie", "Rob", "Andy"]); // returns “Andy"
getLastName(["Ash","Stu"]); // returns "Stu"

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
const allNumbersPositive = ([first, second, third]) => {

    if(first >= 0 && second >=0 && third >=0){
        console.log("true");
    } else {
        console.log("false");
    }
}

allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false