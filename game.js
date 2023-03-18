var pathToSounds = "sounds/";
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    animatePatternPress(randomChosenColor);
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
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
});

$(document).keypress(function () {
    nextSequence();
})