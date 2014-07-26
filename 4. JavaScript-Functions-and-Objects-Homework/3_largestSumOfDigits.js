function findLargestBySumOfDigits(arr) {
    var position;
    var maxSum = 0;
    var correct = true;
    if (arr.length === 0) {
        correct = false;   
    }
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        if (arr[i] > Math.floor(arr[i])){
            correct = false;
            break;   
        }
        var number = Math.abs(arr[i]);
        for (var a=0; a < number.toString().length; a++) {
            var digit = number.toString();
            sum += parseInt(digit[a]);
        }
        if (maxSum < sum) {
            maxSum = sum;
            position = i;
        }
    }
    if (correct) {
        console.log(arr[position]);
    }else {
        console.log(undefined);
    }
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);
