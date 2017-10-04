// initialized variables
var randomNumber;
var bcNumber; // value for black crystal
var dNumber; // value for diamond
var gcNumber; // value for green crystal
var rcNumber; // value for rose crystal
var counter;
var rockNumber = [bcNumber, dNumber, gcNumber, rcNumber]; // array for crystals
var max = 120; // max value for randomNumber
var min = 19 // min value for randomNumber
var maxRock = 12; // max value for crystal
var minRock = 1; // min value for cystal
var win = 0;
var loss = 0;

// function to reset variables
function reset() {
    // generates a new randomNumber
    randomNumber = Math.floor(Math.random() * (max-min)) + min;
    // shows randomNumber on web page
    $("#random-number").text(randomNumber);
    // sets styles
    $("#random-number").css({
        "font-size": "300%", 
        "color": "red"
    });

    // gets values for each crystal
    for (var i=0; i < rockNumber.length; i++) {
        rockNumber[i] = Math.floor(Math.random() * maxRock) + minRock;
        
        // for developer to keep track of actual crystal values
        if (i === 0) {
            console.log("Value of Black Cystal: " + rockNumber[i]);
        } else if (i === 1) {
            console.log("Value of Diamond: " + rockNumber[i]);
        } else if (i === 2) {
            console.log("Value of Green Crystal: " + rockNumber[i]);
        } else {
            console.log("Value of Rose Crystal: " + rockNumber[i]);
            console.log("------------------------");
        }
    }

    counter = 0; // sets counter to 0 
    $("#score").text(counter); // prints score to the web page

    return rockNumber;
}

// calculates win
function wins() {
    if (counter === randomNumber) {
        win++;
        $("#winNum").text(win);
        alert("Winner! Your total score was " + counter + ". Press Okay to play again!");
        reset();
    }
}

// calculates losses
function losses() {
    if (counter > randomNumber) {
        loss++;
        $("#lossNum").text(loss);
        alert("Sorry, you lost! Your total score was " + counter + ". You were over by " + (counter - randomNumber) + ". Press Okay to play again!");
        reset();
    }
}

// adds black crystal value to counter
function blackCrystal() {
    $("#black-cry").on("click", function() {
        counter += rockNumber[0];
        wins();
        losses();
        $("#score").text(counter); // prints score to the web page
        return counter;
    })
}

// adds diamond value to counter
function diamond() {
    $("#diamond").on("click", function() {
        counter += rockNumber[1];
        wins();
        losses();
        $("#score").text(counter); // prints score to the web page
        return counter;
    })
}

// adds green crystal value to counter
function greenCrystal() {
    $("#green-cry").on("click", function() {
        counter += rockNumber[2];
        wins();
        losses();
        $("#score").text(counter); // prints score to the web page
        return counter;
    })
}

// adds rose crystal value to counter
function roseCrystal() {
    $("#rose-cry").on("click", function() {
        counter += rockNumber[3];
        wins();
        losses();
        $("#score").text(counter); // prints score to the web page
        return counter;
    })
}

// compiles all crystal counters
function crystalCounter() {
    blackCrystal();
    greenCrystal();
    diamond();
    roseCrystal();
}

// plays the game
function initialize() {
    reset();
    crystalCounter();
}

initialize(); // initailizes the game