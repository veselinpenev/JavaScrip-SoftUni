function printNumbers(n) {
    var str = "";
    if (n > 0) {
        for (var i = 1; i <= n; i++) {
            if (i % 4 == 0 || i % 5 == 0) {
                continue;
            }
            else {
                str += i + ", ";
            }
        }
        console.log(str.substring(0,str.length-2));
    }
    else {
        console.log("no");
    }
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);