
var b = document.querySelector("#move-random");
b.addEventListener("click", change);

function change() {
    b.style.position = "absolute"
    
    var i = Math.floor(Math.random() * 300) + 1;
    var j = Math.floor(Math.random() * 300) + 1;
    
    b.style.left = i + "px";
    b.style.top = j + "px";
}