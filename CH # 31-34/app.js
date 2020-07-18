// TASK # 1
const date = new Date();
document.write(
    `<br> ${date} <br>`
)


// TASK # 2
const date1 = new Date()
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

document.write(
    `<br> Current Month: ${month[date1.getMonth()]} <br>`
)


// TASK # 3
const date2 = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
alert("Today is " +weekday[date2.getDay()])


// TASk # 4
const date3 = new Date();
const day = date3.getDay();
const weekday1 = new Array(7);
weekday1[0] = "Sunday";
weekday1[1] = "Monday";
weekday1[2] = "Tuesday";
weekday1[3] = "Wednesday";
weekday1[4] = "Thursday";
weekday1[5] = "Friday";
weekday1[6] = "Saturday";
if (day === weekday1[0,6]){
    alert("It's Fun Day")
}else {
    alert("No Fun Day")
}
console.log(weekday1,day)


// TASK # 5
const date4 = new Date();
const monthdays = date4.getUTCDate()
console.log(monthdays)
var matchfound = false;
for(var i = 0; i = monthdays; i++ ){
    if (monthdays < 16){
        matchfound = true
        alert("First Fifteen days of Month")
    
    }break
}
if(matchfound === false) {
    alert("Last days of month")
}



// TASk # 6
const date5 = new Date();
const mili = date5.getTime();
document.write(
    `<br> Current Date: ${date5} <br> Elapsed milliseconds since january : ${mili} <br>
    Elapsed minutes since january : ${mili / 60000}   <br> `
)


// TASK # 7
const date6 = new Date();
const time = date6.getHours();
if (time >= 12 ) {
    alert("Its AM")
}else{
    alert("Its PM")
}


// TASK # 8
const date7 = new Date();
date7.setFullYear(2020, 11, 31);
document.write(`<br> Later Date : ${date7} <br> `)


// TASK # 9 
const date8 = new Date();
date8.setFullYear(2020, 3, 23);
const today = new Date();
document.write(
    `<br> ${(today.getTime() - date8.getTime()) / (1000 * 60 * 60 * 24)
    } days have passed since 1st ramzan,2020 <br> `
)


// TASK # 10
const date9 = new Date();
date9.setFullYear(2015, 1, 1);
const todayDate = new Date();
document.write(
    `<br> On reference date ${todayDate}, ${
        (todayDate.getTime() - date9.getTime()) / 1000
      } seconds had passed since beginning of 2015 <br>`
)


//Task # 11
const date10 = new Date();
date10.setHours(date10.getHours() - 1);
document.write(`<br> current date ${new Date()} 1 hour ago, it was ${date10} <br>`);


//Task # 12
const dateBack100 = new Date();
dateBack100.setFullYear(dateBack100.getFullYear() - 100);
document.write(
  `<br/> current date ${new Date()} 100 years back, it was ${dateBack100} <br/>`
);


//Task # 13
const userAge = Number(prompt('Enter your age'));
const brithYear = new Date();
brithYear.setFullYear(brithYear.getFullYear() - userAge);
document.write(
  `<br/> Your age is ${userAge}<br/>Your birth year is ${brithYear.getFullYear()} <br/>`
);


//Task # 14
const customerName = prompt('Enter Customer Name');
const numUnits = Number(prompt('Enter the units'));
document.write('<br/><br/>');
document.write(`<h1>K-Electric Bill</h1>
                Customer Name: <span style="font-weight:bold">${customerName}</span><br/>
                Month: <span style="font-weight:bold">${new Date().getMonth()}</span><br/>
                Number of units: <span style="font-weight:bold">${numUnits}</span><br/>
                Charges per unit: <span style="font-weight:bold">16</span><br/><br/>,
                Net Amount Payable (within Due Date): <span style="font-weight:bold">${
                  numUnits * 16
                }</span><br/>
                Late payment surcharge: <span style="font-weight:bold">350</span><br/>
                Gross Amount Payable (after Due Date): <span style="font-weight:bold">${
                  numUnits * 16 + 350
                }</span>`);