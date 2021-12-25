let answers = [];
let choices = [];
let options = Array.from(document.getElementsByClassName("square"));

options.forEach(function(element) {
    element.addEventListener("click", function(){
        choices.push(element);
        console.log(choices[0].classList);
    })
})


function displayEasy() {

    document.getElementById("container1").style.display = "grid"; 
    document.getElementById("container2").style.display = "none"; 
    document.getElementById("container3").style.display = "none";

}

function displayMedium() {

    document.getElementById("container1").style.display = "none"; 
    document.getElementById("container2").style.display = "grid"; 
    document.getElementById("container3").style.display = "none"; 

}

function displayHard() {

    document.getElementById("container1").style.display = "none"; 
    document.getElementById("container2").style.display = "none"; 
    document.getElementById("container3").style.display = "grid"; 

}

function start() {

    let index = -1; 

    if(document.getElementById("container1").style.display != "none"){

        const squares = document.getElementsByClassName("board1square"); 

        do {
            ++index; 

            setTimeout(() => {

                let square = squares[getRandomInt(squares.length)];
                square.style.backgroundColor = "white";
    
                setTimeout(() => {
                    square.style.backgroundColor = square.classList[2];
                }, 250);
                
                setTimeout(() => {
                    // if(choices[0].classList[2] == square.classList[2]) {
                    //     console.log("correct!");
                    // }
                    // else {
                    //     console.log("incorrect!");
                    // }
                }, 3500);           
    
                }, 2000);

        } while (choices[index].classList[2] == square.classList[2]);
    }


}

function isCorrect(event) {

    // console.log(event.target.classList);

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }