
function allowDroponCanvas(ev) {
    ev.preventDefault();
}

function allowDroponElement(ev) {
    ev.preventDefault();
}

function dragItem(ev) {
    //ev.preventDefault();
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragElement(ev) {
    //ev.preventDefault();
    console.log('dragElement: ',ev.target);
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropItem(ev) {
    ev.preventDefault();

    //console.log(ev.target.classList.contains('element'));
    var data = ev.dataTransfer.getData("text");
    var dragObj = document.getElementById(data);
    //console.log();

    if (dragObj.classList.contains('element')) {
        ev.target.appendChild(document.getElementById(data));
    }
    else {
        var el = document.createElement('div');
        el.className = 'element';
        el.setAttribute('id', uniqueId());
        el.setAttribute('ondragstart', "dragElement(event)");
        el.setAttribute('draggable', "true");
        el.setAttribute('dropElement', "true");
        el.setAttribute('ondrop', 'dropElement(event)');

        ev.target.appendChild(el);
    }

    
}

function dropElement(ev) {
    // ev.preventDefault();
    // var data = ev.dataTransfer.getData("text");
    // console.log(data);
    // ev.target.appendChild(document.getElementById(data));
    //console.log(dragObj.nodeName);
}

var uniqueId = function () {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

