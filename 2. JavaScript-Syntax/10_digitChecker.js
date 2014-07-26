function checkDigit(number){
    var n = Math.floor(number / 100);
    n = n % 10;
    if (n == 3)
        return true;
    else
        return false;
}
console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));