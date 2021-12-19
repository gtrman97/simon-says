

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

    const squares = document.getElementsByClassName("square"); 

    if(document.getElementById("container1").style.display != "none"){

        setTimeout(() => {

            let square = squares[getRandomInt(3)];
            square.style.backgroundColor = "rgb(255, 255, 255)";
            // square.style.backgroundColor += 1;

            setTimeout(() => {
                squares[getRandomInt(3)].style.backgroundColor = "lightgreen";
            }, 350);         
            }, timePassed);


    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }