function findMaxSequence(arr) {
    var index = 0;
    var max = 1;
    var momentIndex = 0;
    var momentMax = 1;
    var momentStr = arr[0];
    if (arr.length > 1) {
        for (var i = 1; i < arr.length; i++) {
            if (momentStr === arr[i] && i == arr.length - 1) {
                momentMax++;
                if (max <= momentMax) {
                    max = momentMax;
                    index = arr.length - max;
                }
            }
            else if (momentStr === arr[i]) {
                momentMax++;
            }
            else {
                    if (max <= momentMax) {
                        max = momentMax;
                        index = i - max;
                    }
                    momentMax = 1;
                    momentStr = arr[i];
            }
        }
    }
    var out = new Array(max);
    for (var i = 0; i < max; i++) {
        out[i] = arr[index];
        index++;
    }
    console.log(out);
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2,1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);


