function findMostFreqNum(arr) {
    var number = {};
    var key = "";
    var max = 0;
    var more = false;
    var arrNoRepeat = [];
    for (var i = 0; i < arr.length; i++) {
        if (number[arr[i]] == null) {
            number[arr[i]] = 1;
            arrNoRepeat.push(arr[i]);
        }
        else {
            number[arr[i]]++;
        }
    }
    for (var k in number) {
        if (max < number[k]) {
            max = number[k];
            key = k;
        }
        else if (max == number[k]) {
            more = true;
        }
    }
    if (!more) {
        console.log(key + " (" + number[key] + " times)");
    }
    else {
        for (var i = 0; i < arrNoRepeat.length; i++) {
            if (number[arrNoRepeat[i]] == max) {
                console.log(arrNoRepeat[i] + " (" + number[arrNoRepeat[i]] + " times)");
                break;
            }
        }
    }
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
findMostFreqNum([15,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

