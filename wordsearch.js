
var container = document.getElementById('wordsearch_container');
var makeButton = document.getElementById('make')
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



make.addEventListener('click', function() {

    var sizeInput = document.getElementById('sizeInput').value
    var input = document.getElementById('input').value
    inputstring = toString(input);
    console.log(input)
    if (sizeInput == "" || input == "") {
        alert("fields are empty.")
    } else if (isNaN(sizeInput)) {
        alert('please write a number');
    } else if (8 > sizeInput || sizeInput > 20) {
        alert('please include a size for your wordsearch between 8-20');
    } else {
        drawGrid(sizeInput);
        var wordArray = wordListGen();
        for(i=0;i<wordArray.length;i++) {
            random = Math.floor(Math.random()*sizeInput);
            let row = document.getElementById(random);
            for(j=0;j<wordArray[i].length;j++) {
                
                    let box = document.getElementById(row.id + j);
                    console.log(box.id)
                    box.innerHTML = wordArray[i][j];
            }
        }
    }
})

function wordListGen() {
    var input = document.getElementById('input').value
    
    var output;
    if (input != "") {
    output = input.split(",");
    }
    return output;
}

function drawGrid(sizeInput) {

   container.innerHTML = "";

    for(i=0; i<sizeInput; i++) {
        var row = document.createElement('div');
        row.setAttribute('id',  i);
        row.setAttribute('class', "row")
        container.appendChild(row)

        
        for(j=0; j<sizeInput; j++) 
        {
            letter = Math.floor(Math.random() * 26);
            var box = document.createElement('div');
            box.setAttribute('id', "" + i + j);
            box.setAttribute('class', 'box');
            box.innerHTML = alphabet[letter];
            row.appendChild(box);


        }
     }
}

