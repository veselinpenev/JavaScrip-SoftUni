function replaceSpaces(str) {
    var reg = new RegExp(" ","g");
    str = str.replace(reg,'');
    console.log(str);
}

replaceSpaces("But you were living in another world tryin' to get your message through");

