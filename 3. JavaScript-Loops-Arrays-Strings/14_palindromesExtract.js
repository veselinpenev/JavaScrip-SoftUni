function findPalindromes(str) {
    str = str.toLowerCase();
    var word = str.split(/\W+/);
    var palindromes = "";
    var add = true;
    for (var i = 0; i < word.length; i++) {
        for (var c = 0; c < word[i].length/2; c++) {
            if (word[i][c] != word[i][word[i].length -1- c]) {
                add = false;
                break;
            }
        }
        if (add && word[i]!="") {
            palindromes+=word[i]+", ";
        }
        add = true;
    }
    console.log(palindromes.substring(0, palindromes.length - 2));
}

findPalindromes ('There is a man, his name was Bob.');

