// TASK # 1
var first_name = prompt("Enter Your First Name"); 
var last_name = prompt("Enter Your Last Name");
var full_name = "Hello " + first_name + " " + last_name + "!";
alert(full_name)


// TASK # 2
var mobile = prompt("Enter Your Favorite Mobile Phone Model");
var char_mobile = mobile.length;
document.write(
  `My Favorite phone is ${mobile} <br> Length of Strings: ${char_mobile}`
);


// TASK # 3
var string ="Paksitani";
var check = string.indexOf("n",0)
document.write(
    `String: ${string} <br> Index of 'n': ${check} `
);


// TASK # 4
var string1 ="Hello World";
var check1 = string1.indexOf("l", 5)
document.write(
    `String: ${string1} <br> Last index of 'l': ${check1} `
);


// TASK # 5
var string2 = "Pakistani";
var check2 = string2.charAt(3)
document.write(
    `String: ${string2} <br> Character at index 3: ${check2} `
)


// TASK # 6
var first_name = prompt("Enter Your First Name "); 
var last_name = prompt("Enter Your Last Name");
var full_name = first_name.concat(" "+last_name);
alert(full_name)


// TASK # 7
var cityname = "Hyderabad";
var rep = cityname.replace("Hyder", "Islam");
document.write(
    `City: ${cityname} <br> After Replacement: ${rep} `
);
    

// TASK # 8
var message = "Ali and Sami are best friends. They play cricket and football together."
var rep1 = message.replace(/and/g, "&");
document.write(rep1)


// TASK # 9
var value = "472";
var type = Math.floor(value)
document.write(
    `value: ${value} <br> Type: String <br> value: ${type} <br> type: number `
)


// TASK # 10
var input = prompt("Enter Any Word for Uppercase");
var upcon = input.toUpperCase();
document.write(
    `User Input: ${input} <br> Upper Case: ${upcon}`
)


// TASK # 11
var input1 = prompt("Enter Any Word for Title Case");
var firstchar = input1.slice(0,1);
firstchar = firstchar.toUpperCase();
var otherchar = input1.slice(1)
otherchar = otherchar.toLowerCase()
var title = firstchar + otherchar
document.write(
    `User Input: ${input1} <br> Title Case: ${title}`
)


// TASK # 12
var num = prompt("Enter any number for convert into String");
var con = num.replace('.', "");
document.write(
    `Number: ${num} <br> Result: ${con}`
)


//Task # 13
var username = prompt('Enter username');
for (let i = 0; i < username.length; i++) {
  if (
    username.charCodeAt(i) === 33 ||
    username.charCodeAt(i) === 44 ||
    username.charCodeAt(i) === 46 ||
    username.charCodeAt(i) === 64
  ) {
    alert('Please enter a valid username');
  }
}


//Task # 14
const foodItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const order = prompt(
  "Welcome to ABC backery. What do you want to order sir/ma'am"
);
const result = [];
document.write('<br/><br/>');
foodItems.forEach((food, index) => {
  if (food === order) {
    result.push(food, index);
  }
});

if (result.length !== 0) {
  document.write(
    `${result[0]} is available at index ${result[1]} in our bakery`
  );
} else {
  document.write(`We are sorry ${order} is not available in our bakery`);
}


//Task # 15
const pass = prompt('Enter Password');
let check = true;
document.write('<br/><br/>');
if (pass.length >= 6) {
  if (pass.charCodeAt(0) < 48 || pass.charCodeAt(0) > 57) {
    if (pass.match(/^[0-9a-zA-Z]+$/)) {
      document.write('Valid password');
    } else {
      document.write('Password should contain alphabets and numbersr<br/>');
      document.write('Please enter a valid password');
    }
  } else {
    document.write('Password cannot begin wit a number<br/>');
    document.write('Please enter a valid password');
  }
} else {
  document.write('Password must at least 6 characters long<br/>');
  document.write('Please enter a valid password');
}


// TASK # 16
var uni = 'University of Karachi';
var brk = uni.split('');
var res = brk.join(" <br> ")
document.write(res)
  

// TASK # 17 
var input3 = prompt("Enter input for last character");
var check3 = input3.charAt(input3.length-1)
document.write(
    `User input : ${input3} <br> last character of input: ${check3} `
)


// TASK # 18
var string3 = "The quick brown fox jumps over the lazy dog";
var strlc = string3.toLowerCase();
str = (strlc.match(/the/g) || []).length;
document.write(
`Text : ${string3} <br> There are ${str} occurances of word 'the'  `
)