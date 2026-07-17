    let currentAudio = null;

    function playAudio(id) {
        const selectedAudio = document.getElementById(id);
        if (currentAudio && currentAudio !== selectedAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        selectedAudio.play();
        currentAudio = selectedAudio;
    }

    function pauseAudio(id) {
        const selectedAudio = document.getElementById(id);
        selectedAudio.pause();
    }

    function stopAudio(id) {
        const selectedAudio = document.getElementById(id);
        selectedAudio.pause();
        selectedAudio.currentTime = 0;
        if (currentAudio === selectedAudio) {
            currentAudio = null;
        }
    }