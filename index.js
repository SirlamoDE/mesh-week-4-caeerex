//Question:1 Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style) year.
function checkScore(score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}


let studentScore = Number(prompt("Enter the Your score: "));
checkScore(studentScore);


//Question:2 Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible to vote".

function checkVotingEligibility() {
    let age = Number(prompt("Enter your age: "));
    // Check if age is a number and not null
    if (age != null && age >= 18) {
        return "You are eligible to vote";
    }
    return "Not eligible";
}

console.log(checkVotingEligibility()); // Call the function and log the result


//Question:3 Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

function GradeStudent(name, score) {
     name= prompt("Enter your name: ");
     score = Number(prompt("Enter your score: "));
    if (score >= 90) {
        return `${name}, Excellent`;
    } else if (score >= 75) {
        return `${name}, Good`;
    } else if (score >= 50) {
        return `${name}, Average`;
    } else {
        return `${name}, Fail`;
    }
}

// call the function and log the result:
console.log(GradeStudent());


// using switch statement to check the grade of a student
function switchGrader() {
    let input = prompt("Enter your score: ");
    let score = Number(input);
    // Using switch statement to determine the grade
    switch (true) {
        case (score >= 90):
            return "Excellent";
        case (score >= 75):
            return "Good";
        case (score >= 50):
            return "Average";
        default:
            return "Fail";
    }
}

console.log(switchGrader()); // Call the function and log the result


// Question:4  Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.
function checkAccess(hasID, isAbove18) {
    hasID = prompt("Do you have an ID? (true/false): ").toLowerCase() === "true";
    isAbove18 = prompt("Are you above 18? (true/false): ").toLowerCase() === "true";

    if (hasID === true && isAbove18 === true) {
        return "Access granted";
    }
    return "Access denied";
}

console.log(checkAccess()); // Call the function and log the result



//Question:5 Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.

let studentScores = [45, 78, 90, 50, 30, 85, 60];
for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > 50) {
        console.log(`Score: ${studentScores[i]} - Pass`);
    }else{console.log(`Score: ${studentScores[i]} - Fail`);
   }
        
}


//Question:6 Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".

const checkPass = (mathScore, englishScore) => {
    mathScore = Number(prompt("Enter your Math score: "));
    englishScore = Number(prompt("Enter your English score: "));
    return (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No";
}

console.log(checkPass()); // Call the function and log the result


// Question:7 . Create a function that checks if a user has either an email or a phone number before signing up.

function signupValidator( email, phoneNumber){
    email = prompt("Enter your email: ");
    phoneNumber = prompt("Enter your phone number: ");
    // Check if either email or phone number is provided

    if (email || phoneNumber) {
        alert("You can sign up") ;
    }
    return "You need to provide either an email or a phone number";
}

console.log(signupValidator()); // Call the function and log the result


// Question:8  Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.
function CredentialsValidator(username, password) {
    //accept username and password from the user
    username = prompt("Enter your username: ");
    password = prompt("Enter your password: ");

    // Check if either username or password is empty
    if (!username || !password) {
        return "Invalid input";
    }
    return "Valid input";

}



console.log(CredentialsValidator()); // Call the function and log the result


// Question:9 Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.
function WorkHours(hoursWorked) {
    hoursWorked = Number(prompt("Enter hours worked: "));
    return (hoursWorked >= 40) ? "Full-time" : "Part-time";
}


console.log(WorkHours()); // Call the function and log the result



//Question: 10  Write an arrow function that takes two numbers and returns the larger one.
const findLargerNumber = (num1, num2) => {
    num1 = Number(prompt("Enter first number: "));
    num2 = Number(prompt("Enter second number: "));
    return (num1 > num2) ? num1 : num2;
}

console.log(findLargerNumber()); // Call the function and log the result