var pathToSounds = "sounds/";
var userClickedPattern = [];

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

$(".btn").on("click", function () {
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
});