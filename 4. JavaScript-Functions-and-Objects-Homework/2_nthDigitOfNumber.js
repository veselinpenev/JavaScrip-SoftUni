function findNthDigit(arr) {
    var str = arr[1].toString().replace('.', '');
    for (var i = 0; i < arr[0]-1; i++) {
        str = str / 10;
    }
    str = Math.abs(str);
    str = Math.floor(str) % 10;
    
    if (str != 0) {
        console.log(str);
    }else {
        console.log(undefined);
    }
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);
