var a = document.getElementById('tot');
var b = document.getElementById('att');

document.getElementById('result').addEventListener("click", function () {
    var c = Math.floor(a.value * 0.75) + 1;
    console.log(c);
    document.getElementById('req').innerHTML = c - b.value;
    document.getElementById('bunk').innerHTML = a.value - c;
})