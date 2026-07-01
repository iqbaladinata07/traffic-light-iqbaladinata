// Get variable
const redLight = document.getElementById("red")
const yellowLight = document.getElementById("yellow")
const greenLight = document.getElementById("green")
const switchBtn = document.getElementById("switchBtn")

// Initial value
redLight.style.background = "red";
let current = "red";

// reset lights
function resetLight() {
    redLight.style.background = "#444";
    yellowLight.style.background = "#444"
    greenLight.style.background = "#444"
}

// switch lights
function switchLight() {
    switchBtn.disabled = true;
    resetLight();
    yellow.style.background = "yellow";
   
    console.log(current)
    setTimeout(() => {
        resetLight();
    if (current == "red") {
        current = "green";
        greenLight.style.background = "green";
    } else  {
        current = "red";
        redLight.style.backkground = "red";
    }
    }, 1000);

    switchBtn.disabled = false;
}




switchBtn.addEventListener("click", switchLight);