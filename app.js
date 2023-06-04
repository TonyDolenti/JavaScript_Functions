console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    
    if (count < 0){
      for (let i = -1; i >= count; i--){
        if (i % 2 != 0){
            console.log(i);
        } 
      }  
    } else {
        for (let i = 1; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        } 
      }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = 'Congrats, you can drive!';
    let belowSixteen = "Sorry but you need to wait until you're 16.";

    if (age < 16){
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y){
    if (x > 0 && y > 0) {
        return 'Quadrant 1';
    } else if (x < 0 && y > 0){
        return 'Quadrant 2';
    } else if (x < 0 && y < 0){
        return 'Quadrant 3';
    } else if (x > 0 && y < 0){
        return 'Quadrant 4';
    } else if (x == 0 && y != 0) {
        return "Y Axis"
    } else {
        return "Origin";
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isTriangle(a, b, c){
 if(a + b > c && a + c > b && b + c > a){
    return true;
 } else {
    return false;
 }
}

function triangleType(a, b, c){
    let isValid = isTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return 'Equilateral';
        } else if (a == b || b == c || a == c) {
            return 'Iscosceles';
        } else {
            return 'Scalene';
        }
    } else {
        return "Not valid triangle.";
    }
}

console.log(triangleType(1, 2, 2));
console.log(triangleType(1, 1, 2));
