function calcCylinderVol(r,h){
    var vol = Math.PI*Math.pow(r,2)*h;
    return vol.toFixed(3);
}
console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));