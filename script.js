

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

    const sqaures = document.getElementsByClassName("square"); 
    console.log(sqaures);

    setTimeout(() => {

    sqaures[0].style.backgroundColor = "lightgreen";
    sqaures[1].style.backgroundColor = "tomato";
    sqaures[2].style.backgroundColor = "lightyellow";
    sqaures[3].style.backgroundColor = "lightblue";

    // document.getElementById("square1").style.backgroundColor = "green";


    }, 2000);


}