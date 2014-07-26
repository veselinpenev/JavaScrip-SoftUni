function extractContent(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "<" && str[i+1] == "a") {
            str = str.substr(0, i) + "[URL" + str.substring(i + 2, str.length);
            for (var w = i + 2; w < str.length; w++) {
                if (str[w] == ">") {
                    str = str.substr(0, w) + "]" + str.substring(w + 1, str.length);
                    break;
                }
            }
        }
        if (str[i] == "<" && str[i + 1] == "/" && str[i + 2] == "a") {
            str = str.substr(0, i) + "[/URL]" + str.substring(i + 4, str.length);
        }
    }
    console.log(str);
}

extractContent ("<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>");
