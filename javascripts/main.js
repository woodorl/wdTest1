var scene;

var init = function() {
    scene = document.querySelector('#scene');
};

window.onload = function() {
    init();
};

window.onmousemove = function(e) {
    var dx = (window.innerWidth / 2 - e.pageX) * 0.05;
    scene.style['-webkit-transform'] = 'rotateY(' + dx + 'deg)';
};