function lastDigitAsText(number) {
    var lastDigit = Math.abs(number % 10);
    var output = "";
    switch (lastDigit) {
        case (0): output = "Zero"; break;
        case (1): output = "One"; break;
        case (2): output = "Two"; break;
        case (3): output = "Three"; break;
        case (4): output = "Four"; break;
        case (5): output = "Five"; break;
        case (6): output = "Six"; break;
        case (7): output = "Seven"; break;
        case (8): output = "Eight"; break;
        case (9): output = "Nine"; break;
    }
    console.log(output);
}

lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);
