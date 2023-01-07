let cookieValue = document.cookie
  ?.split('=')[1];
let x = cookieValue;
if (cookieValue == null) {
    document.cookie = "value = 0;"
    reload();
}
document.getElementById('count').innerHTML = x;
function increase() {
   document.getElementById('count').innerHTML = ++x;
   document.cookie = "value = " + x + ";"
   reload();
}
function decrease() {
    document.getElementById('count').innerHTML = --x
    document.cookie = "value = " + x + ";"
    reload();
}
function reset() {
    document.cookie = "value = 0;"
    reload();
}
function neunundsechzig() {
    window.open("https://youtu.be/A1UhABiAfVk", '_blank');
}
if (x == 69) {
    document.getElementById('sixtyninelol').style = "display = flex;"
}
if (x > 0) {
    document.getElementById('count').style = "color: rgb(0, 181, 0);"
}
else if (x < 0) {
    document.getElementById('count').style = "color: red;"
}
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        increase()
    }
    else if (e.keyCode == '40') {
        decrease()
    }
    else if (e.keyCode == '37') {
        decrease()
    }
    else if (e.keyCode == '39') {
       increase()
    }

}
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      increase()
    }
  })



