var pathToSounds = "sounds/";

function playButton(color) {
    var audio = new Audio(pathToSounds + color + ".mp3");
    audio.play();
}

$(".btn").on("click", function () {
    playButton(this.id);
});