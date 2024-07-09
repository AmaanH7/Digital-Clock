let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
// let = variable, so the hrs element is gotten from the hrs ID, so we use getElementById


setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();

}, 1000)

// setInterval(() => { ... }, interval) is a JavaScript function that repeatedly executes the code inside the curly braces { ... } at a specified time interval. The interval is provided in milliseconds. The arrow function () => { ... } is an anonymous function that runs the code you place inside it. This method is useful for tasks that need to be repeated, such as updating a clock or fetching data periodically. For example, setInterval(() => { console.log('Hello'); }, 1000); will print "Hello" to the console every second.
// < 10 ? '0' : ''); +currentTime.getHours(); - this code puts a 0 on each section if its less than 10 e.g. if its 7 am, itll be 07am, 7 seconds will be 07 seconds
// by using hrs.innerHTML, we're saying add inside the hrs the current hours by using currentTime.getHours

// Below, I'm retrieving the date and time, both of which are variables as they change, the console.log will display the time in the console section on inspect element


// console.log(currentTime.getHours());
// currentTime.getMinutes will display minutes on the console, same with getSeconds
// inner.HTML for When dealing with HTML content and need to include HTML tags or formatting. inner.Text for dealing with plain text and want to strip out any HTML tags