function convertKWtoHP(hp) {
    var kw = hp / 0.745699872;
    return kw.toFixed(2);
}
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));