// TASK # 1
var int = prompt("Enter Positive Integers");
var roundoff = Math.round(int);
var floor = Math.floor(int);
var ceil = Math.ceil(int);
document.write(
    `Number : ${int} <br>
    Round off value: ${roundoff} <br>
    Floor value: ${floor} <br>
    Ceil value: ${ceil} <br> `
)


// TASk # 2
var int1 = prompt("Enter Negative floating point number");
var roundoff1 = Math.round(int1);
var floor1 = Math.floor(int1);
var ceil1 = Math.ceil(int1);
document.write(
    `<br>
    Number : ${int1} <br>
    Round off value: ${roundoff1} <br>
    Floor value: ${floor1} <br>
    Ceil value: ${ceil1} <br> `
)


// TASK # 3
var input = prompt("Enter any integer for absolute value");
var abs = Math.abs(input)
document.write(
    `<br>
    The Absolute value of ${input} is ${abs} 
    <br> `
)


// TASK # 4
var random = Math.random(10);
document.write(
    `<br>
    Random Dice value ${random} 
    <br> `
)


// TASK # 5
var toss = Math.random() * 2;
var floor2 = Math.floor(toss);
if (floor2 === 0) {
    alert("random coin value: Heads")
} else {
    alert("random coin value: Tails")
}



// TASK # 6
var random1 = Math.random() * 100;
var ans = Math.floor(random1);
alert("random number between 1 to 100; " + ans)


// TASk # 7
var weight = prompt("Enter your Weight");
var wgth = parseInt(weight)
document.write(
    `<br>` + "The weight of user is " + wgth + " kilograms" 
)


// TASk # 8
var randm = Math.random() * 10;
var floor3 = Math.floor(randm);
console.log(floor3);
var input2 = prompt("Input Number between 1-10");
if (floor3 == input2) {
    alert("Congratulation you are Right")
}else {
    alert("Sorry try again")
}