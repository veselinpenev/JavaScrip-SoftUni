function findMostFreqWord(str) {
    var word = {};
    var key = "";
    var max = 0;
    var out = [];
    str = str.toLowerCase();
    var arr = str.split(/\W+/);
    for (var i = 0; i < arr.length; i++) {
        if (word[arr[i]] == null) {
            word[arr[i]] = 1;
        }
        else {
            word[arr[i]]++;
        }
    }
    for (var k in word) {
        if (max < word[k]) {
            max = word[k];
            key = k;
        }
    }
    Object.keys(word)
      .sort()
      .forEach(function (k) {
        if (word[k] == max) {
            console.log(k + " -> " + word[k] + " times");
        }
    });
}

findMostFreqWord ('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
