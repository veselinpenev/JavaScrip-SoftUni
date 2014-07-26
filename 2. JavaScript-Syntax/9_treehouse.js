function treeHouseCompare(a,b){
    var houseArea = a * a + (a * (a*2/3) / 2);
    var treeArea = b * (b/3) + (Math.PI * Math.pow((b*2/3), 2));
    if (houseArea > treeArea) {
        return ("house/" + houseArea.toFixed(2));
    }
    else {
        return ("tree/" + treeArea.toFixed(2));
    }

}
console.log(treeHouseCompare(3,2));
console.log(treeHouseCompare(3,3));
console.log(treeHouseCompare(4,5));