function countSubstringOccur(arr) {
    var keyWord = arr[0].toLowerCase();
    var word = arr[1].toLowerCase().split(keyWord);
    console.log(word.length - 1);
}
countSubstringOccur(['in', "We are living in a yellow submarine. We don'thave anything else.Inside the submarine is very tight.So we are drinking all the day.We will move out of it in 5 days."]);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]);

