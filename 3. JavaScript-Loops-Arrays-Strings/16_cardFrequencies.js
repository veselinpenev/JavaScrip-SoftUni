function findCardFrequency(str) {
    var number = {};
    var arr = str.split(/\W+/);
    var arrNoRepeat = [];
    arr.pop();
    for (var i = 0; i < arr.length; i++) {
        if (number[arr[i]] == null) {
            number[arr[i]] = 1;
            arrNoRepeat.push(arr[i]);
        }
        else {
            number[arr[i]]++;
        }
    }

    for (var i = 0; i < arrNoRepeat.length; i++) {
        var percent= number[arrNoRepeat[i]] / arr.length * 100
        console.log(arrNoRepeat[i] + " -> " + percent.toFixed(2) + "%");
    }
    
}

findCardFrequency ('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');
