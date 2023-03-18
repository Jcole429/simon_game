var pathToSounds = "sounds/";
var userClickedPattern = [];

function playSound(color) {
    var audio = new Audio(pathToSounds + color + ".mp3");
    audio.play();
}

$(".btn").on("click", function () {
    userClickedPattern.push(this.id);
    playSound(this.id);
});