var slideInterval = 3500;

function getFigures() {
    return document.getElementById("car").getElementsByTagName('figure');
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var j = 0; j < figures.length; j++) {
        if (figures[j].className == 'i') {
            figures[j].className = '';
            pointer = j;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'i';
    setTimeout(moveForward, slideInterval);
}

function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();