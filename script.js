const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var time = 0;
let interval;
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer() {
    
    let stringTime = Math.round(time*100)/100+"s"
    theTimer.innerHTML = stringTime;
    time += .01;
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let textLength = textEntered.length;
    let originTextMatch = originText.substring(0,textLength);
    
    
    if(originTextMatch == textEntered && textEntered.length != originText.length) {
        testWrapper.style.borderColor = "blue";
        
    } else if(originTextMatch == textEntered && textEntered.length == originText.length){
        testWrapper.style.borderColor = "green";
        clearInterval(interval)
    } else {
        testWrapper.style.borderColor = "red"
    }
    
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if(textEnteredLength === 0) {
        
       interval = setInterval(runTimer, 10);
        console.log("inStart")
        
    }

}

// Reset everything:
function reset() {
    time = 0;
    theTimer.innerHTML = time+"s";
    clearInterval(interval)
    interval = null;
    testArea.value = "";
    testWrapper.style.borderColor = "grey"
    
}

// Event listeners for keyboard input and the reset button:

testArea.addEventListener("keypress", start, false)
testArea.addEventListener("keyup", spellCheck, false)
resetButton.addEventListener("click", reset, false)