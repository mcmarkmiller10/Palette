window.onload = function () {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var mousedown = false;
    document.getElementById("clearid").onclick = function clear() {
        ctx.fillStyle = '#E3B46F';
        ctx.fillRect(0, 0, 750, 600);
    }
    var r = 10;
    var color;
    var circle = true;

    document.getElementById("tensize").onclick = function tensize() {
        r = 10
    };
    document.getElementById("twentysize").onclick = function twentysize() {
        r = 20
    };
    document.getElementById("thirtysize").onclick = function thirtysize() {
        r = 30
    };
    document.getElementById("black").onclick = function black() {
        color = 'black';
    };
    document.getElementById("white").onclick = function white() {
        color = 'white';
    };
 {
        circle = true;
        square = false;
    };
    c.addEventListener("mousemove", function () {
        if (mousedown) {createC(event);}
    });
    c.addEventListener("mouseup", function () {
        mousedown = false;
    });
    c.addEventListener("mousedown", function () {
        mousedown = true;
    });

    function createC(event) {
        var x = event.x;
        var y = event.y;
        x -= c.offsetLeft;
        y -= c.offsetTop;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }

};
