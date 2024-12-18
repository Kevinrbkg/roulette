function random() {
    document.getElementById("roulette").style.visibility = "hidden";
    let number = Math.floor(Math.random()*36)+1;
    document.getElementById("result").innerText = number;
    document.getElementById("button").style.visibility = "hidden";    
}