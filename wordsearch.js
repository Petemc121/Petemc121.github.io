
var container = document.getElementById('wordsearch_container');
var makeButton = document.getElementById('make')
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var input1 = document.getElementById('input')


input1.innerHTML = "";



make.addEventListener('click', function() {


    var sizeInput = document.getElementById('sizeInput').value
    var input = document.getElementById('input').value
    inputstring = toString(input);
    var wordArray = wordListGen();
    if (sizeInput == "" || input == "") {
        alert("fields are empty.")
    } else if (isNaN(sizeInput)) {
        alert('please write a number');
    } else if (8 > sizeInput || sizeInput > 20) {
        alert('please include a size for your wordsearch between 8-20');
    } else {
        drawGrid(sizeInput);
        console.log(wordArray.length)
        startArray =[];
        for(i=0;i<wordArray.length;i++) {

            if (wordArray[i].length > sizeInput) {
                container.innerHTML = ""
                alert("Make sure your word length is less than the size of your container");
            } 
            else {
            if (i == 0 ) {
                random = Math.floor(Math.random() * sizeInput);
                row = document.getElementById(random);
               startArray.push(random);
               
               for(j=0;j<wordArray[i].length;j++) {
                let box = document.getElementById(row.id + j);
                box.innerHTML = wordArray[i][j];
               }

            }else {
             
            do {
            random =  Math.floor(Math.random() * sizeInput);
            }
            while (startArray.includes(random));
                
            row = document.getElementById(random);
            startArray.push(random)
            let FBDRandom = Math.floor((Math.random() * 2) + 1);


            if (FBDRandom == 1) {
                var startPos = Math.floor(Math.random() * (sizeInput - wordArray[i].length));
            
                for(let j = 0; j < wordArray[i].length; j++) {
                        // forwards
                    if (j != 0){
                        startPos++
                    }

                    let box = document.getElementById(row.id + "" + startPos);
                    box.innerHTML = wordArray[i][j];
    
                 }
                } else if (FBDRandom == 2) {
                    // backwards
                    var startPos = Math.floor((Math.random() * sizeInput - wordArray[i].length) + wordArray[i].length);
                    for(let j = 0; j < wordArray[i].length; j++) {
                        if (j !=0 ) {
                            startPos--
                        }

                        let box = document.getElementById(row.id + "" + startPos)
                        box.innerHTML = wordArray[i][j];
                    }  
                } else if (FBDRandom == 3) {
                    //vertical 
                    do {
                        startPos = Math.floor((Math.random() * sizeInput - wordArray[i].length) + wordArray[i].length);
                    } while ()
                }

                
                
    }
    console.log(startArray)
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

        
        for(j=0; j<sizeInput ; j++) 
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

