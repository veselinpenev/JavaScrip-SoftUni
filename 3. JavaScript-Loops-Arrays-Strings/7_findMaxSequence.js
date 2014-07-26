function maxSequenceFinder(arr)  {
    var index = 0;
    var max = 0;
    var momentIndex = 0;
    var momentMax = 0;
    var momentStr = arr[0];
    if (arr.length > 1) {
        for (var i = 1; i < arr.length; i++) {
            if (momentStr < arr[i] && i==arr.length-1) {
                momentMax++;
                if (max <= momentMax) {
                    max = momentMax;
                    index = arr.length - max;
                }
            }
            else if (momentStr < arr[i]) {
                momentMax++;
            }
            else if (i == arr.length - 1 && max == 0) {
                break;
            }
            else {
                    if (max <= momentMax) {
                        max = momentMax;
                        index = i - max;
                    }
                    momentMax =1;
                    momentStr = arr[i];
            }
        }
    }
    if (max == 0) {
        console.log("no");
    }
    else {
        var out = new Array(max);
        for (var i = 0; i < max; i++) {
            out[i] = arr[index];
            index++;
        }
        console.log(out);
    }
}
maxSequenceFinder([3, 2, 3, 4, 2, 2, 4]);
maxSequenceFinder([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
maxSequenceFinder([3, 2, 1]);

