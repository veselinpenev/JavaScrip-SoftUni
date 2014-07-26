function area(){
    var r = document.getElementById('radius').value;
    var areaSum = Math.PI * r * r;
    document.getElementById("areaP").innerText = "r = "+r + "; area = "+ areaSum;
}