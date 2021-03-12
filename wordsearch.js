
var container = document.getElementById('wordsearch-container');
var makeButton = document.getElementById('make')



make.addEventListener('click', function() {

    var sizeInput = document.getElementById('sizeInput').value

    if (isNaN(sizeInput) || sizeInput == "") {
        alert('please write a number');
    } else if (0 > sizeInput || sizeInput > 20) {
        alert('please include a size for your wordsearch between 1-20');
    } else {
        drawGrid(sizeInput);
    }
})

function wordListGen() {
    input = document.getElementById('input').val
    input.split(",");
    return input;
}

function drawGrid(sizeInput) {

    for(i=0; i<sizeInput; i++) {
        var row = document.createElement('div');
        row.setAttribute('id', "box" + i);
        row.setAttribute('class', "row")
        container.appendChild(row)

        
        for(j=0; j<sizeInput; j++) 
        {
            var box = document.createElement('div');
            box.setAttribute('id', row.id + j);
            box.setAttribute('class', 'box');
            row.appendChild(box);

        }
     }
}

