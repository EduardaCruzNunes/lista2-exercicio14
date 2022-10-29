var a = 9;
var b = 1;
var c = 3;
var d = 100;
var e = 1000;

if (a > b && c < a && a > d && e < a) {
    console.log(a, 'É o maior valor');
} else if (a < b && b > c && d < b && e < b) {
    console.log(b, 'É o maior valor!');
} else if (a < c && c > b && c > d && e < c) {
    console.log(c, 'É o maior valor !');
} else if (a < d && d > b && d > c && e < d) {
    console.log(d, 'É o maior valor!');
} else if (a < e && e > b && e > c && d < e) {
    console.log(e, 'É o maior valor!');
} else {
    console.log('Operação inválida tente novamente!');
}
