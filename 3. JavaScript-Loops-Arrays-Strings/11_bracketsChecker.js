function checkBrackets(str) {
    var openBrackets = 0;
    var correct = true;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            openBrackets++;
        }
        else if (str[i] == ')') {
            openBrackets--;
        }
        if (openBrackets < 0) {
            correct = false;
            break;
        }
    }
    if (openBrackets != 0) {
        correct = false;
    }
    console.log(correct? "correct": "incorrect");
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');

