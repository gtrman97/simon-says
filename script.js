

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

    let timePassed = 2000; 

    if(document.getElementById("container1").style.display != "none"){

        const squares = document.getElementsByClassName("board1square"); 
        console.log(squares[0].classList[1]);

        setTimeout(() => {

            let square = squares[getRandomInt(3)];
            square.style.backgroundColor = "white";
            // square.style.backgroundColor += 1;

            setTimeout(() => {
                square.style.backgroundColor = square.classList[1];
            }, 250);         
            }, timePassed);


    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }