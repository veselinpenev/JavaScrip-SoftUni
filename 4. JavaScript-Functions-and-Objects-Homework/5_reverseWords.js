function reverseWordsInString(str) {
    var word = str.split(' ');
    var reverseStr = "";
    for (var i = 0; i < word.length; i++) {
        var reverseWord = word[i];
        reverseWord = reverseWord.split("").reverse().join("");
        reverseStr += reverseWord+ " ";
    }
    console.log(reverseStr);
}

reverseWordsInString("Hello, how are you.");
reverseWordsInString("Life is pretty good, isn’t it?");
