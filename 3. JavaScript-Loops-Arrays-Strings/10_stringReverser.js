function reverseString(str) {
    var out = "";
    for (var i = str.length - 1; i >= 0; i--) {
        out += str[i];
    }
    console.log(out)
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');

