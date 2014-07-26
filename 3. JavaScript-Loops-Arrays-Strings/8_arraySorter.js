function sortArray(arr) {
    var secondArr = new Array(arr.length);
    var min = Number.MAX_VALUE;
    var index = 0;
    while (arr.length != 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        arr.splice(arr.indexOf(min), 1);
        secondArr[index] = min;
        index++;
        min = Number.MAX_VALUE;
    }
    console.log(secondArr);
}
sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);


