

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

    document.getElementById("square3").style.backgroundColor += 1; 

    const squares = document.getElementsByClassName("square"); 

    if(document.getElementById("container1").style.display != "none"){

        setTimeout(() => {

            let square = squares[getRandomInt(3)];
            square.style.backgroundColor = "lightgreen";
            // squares[1].style.backgroundColor = "tomato";
            // squares[2].style.backgroundColor = "lightyellow";
            // squares[3].style.backgroundColor = "lightblue";
            setTimeout(2000); 
            squares[getRandomInt(3)].style.backgroundColor = "lightgreen";
        
            }, 2000);


    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }