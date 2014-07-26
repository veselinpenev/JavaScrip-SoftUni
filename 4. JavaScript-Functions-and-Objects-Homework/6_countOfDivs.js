function countDivs(str) {
    var counter = 0;
    for (var i = 0; i < str.length - 3; i++) {
        if (str[i] === '<' && str[i + 1] === 'd' && str[i + 2] === 'i' && str[i + 3] === 'v') {
            counter++;
        }
    }
    console.log(counter);
}

countDivs("<!DOCTYPE html>"+
"<html>"+
'<head lang="en">'+
'<meta charset="UTF-8">'+
'<title>index</title>'+
'<script src="/yourScript.js" defer></script>'+
'</head>'+
'<body>'+
'<div id="outerDiv">'+
'<div'+
'class="first">'+
'<div><div>hello</div></div>'+
'</div>'+
'<div>hi<div></div></div>'+        
'<div>I am a div</div>'+
'</div>'+
'</body>'+
'</html>');
