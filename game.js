var pathToSounds = "sounds/";
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var isStarted = false;

var gamePattern = [];
var userClickedPattern = [];

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length == level) {
            setTimeout(function () {
                nextSequence();
                incrementLevel();
            }, 1000);
        }
    } else {
        gameOver();
    }
}

function gameOver() {
    $("#level-title").text("Game Over!\nPress A Key to Start!");
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    isStarted = false;
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    userClickedPattern = [];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    animatePatternPress(randomChosenColor);
}

function incrementLevel() {
    level++;
    $("#level-title").text("Level " + level);
}

function playSound(color) {
    var audio = new Audio(pathToSounds + color + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    var pressedButton = $("#" + currentColor)

    pressedButton.addClass("pressed");

    setTimeout(function () {
        pressedButton.removeClass("pressed");
    }, 100);
}

function animatePatternPress(currentColor) {
    var nextButton = $("#" + currentColor)
    nextButton.fadeIn(100).fadeOut(100).fadeIn(100);
}

$(".btn").on("click", function () {
    if (isStarted == true) {
        userClickedPattern.push(this.id);
        playSound(this.id);
        animatePress(this.id);
        checkAnswer(userClickedPattern.length - 1);
    }
});

$(document).keypress(function () {
    if (isStarted == false) {
        isStarted = true;
        incrementLevel();
        nextSequence();
    }
})