window.sr = ScrollReveal({ reset: true});

sr.reveal('.item1', {rotate:{x: 0, y:80, z: 0}, duration: 2000});
sr.reveal('.imgVertical', {rotate:{x: 0, y:180, z: 0}, duration: 2000});
sr.reveal('#imgVertical', {rotate:{x: 0, y:30, z: 0}, duration: 2000});
sr.reveal('#pageInstructor', { duration: 2000});
sr.reveal('.cursos', {rotate:{x: 0, y:80, z: 0}, duration: 1000});




document.addEventListener('DOMContentLoaded', function () {
    var audioElement = document.getElementById('audioElement');
    var buttonPlay = document.getElementById('buttonPlay');

    buttonPlay.addEventListener('click', function () {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.currentTime = 0; // Volta o áudio para o início
        }
    });
});
