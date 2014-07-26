function compareChars(arr,arr2)  {
    var equal = true;
    if (arr.length == arr2.length) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != arr2[i]) {
                equal = false;
                break;
            }
        }
    }
    else {
        equal = false;
    }
    console.log(equal? "Equal" : "Not Equal");
}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'] , ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'] , ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);