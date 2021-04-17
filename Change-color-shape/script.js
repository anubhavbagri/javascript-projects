var cir = document.getElementById('chcolor');
var color = ["red", "orange", "green", "maroon", "royalblue", "violet"];

var prev = "square";
var sh = document.getElementById('chshape');
var shape = ["square", "rectangle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

cir.addEventListener('click', function () {
    //console.log(Math.floor(Math.random() * color.length));
    var randColor = color[Math.floor(Math.random() * color.length)];
    console.log(randColor);
    document.getElementById('circle').style.backgroundColor = randColor;
});

sh.addEventListener('click', function () {
    var randShape = shape[Math.floor(Math.random() * shape.length)];
    console.log(randShape);
    document.getElementById(prev).setAttribute("id", randShape);
    prev = randShape;
});