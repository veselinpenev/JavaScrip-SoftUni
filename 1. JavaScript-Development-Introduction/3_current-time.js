var time = new Date();
var hours = time.getHours();
var min = time.getMinutes();
if (min < 10)
    min = "0" + min;
console.log(hours + ":" + min);