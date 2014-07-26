function extractContent(str) {
    var out = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ">") {
            for (var w = i + 1; w < str.length; w++) {
                if (str[w] == "<") {
                    break;
                }
                else {
                    out += str[w];
                }
            }
        }
    }
    console.log(out);
}

extractContent ("<p>Hello</p><a href='http://w3c.org'>W3C</a>");
