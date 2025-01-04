document.getElementById('tuto-sound').addEventListener('mouseenter', function() {
    const audio = document.getElementById('tuto-talk');
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play();
});
