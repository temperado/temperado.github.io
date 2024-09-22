document.addEventListener('DOMContentLoaded', () => {
    // Changing words animation
    const words = ["hands-on", "engaged", "skilled", "efficient"];
    let wordIndex = 0;
    const changingWord = document.getElementById('changing-word');

    function changeWord() {
        // Fade out
        changingWord.style.opacity = 0;
        setTimeout(() => {
            // Change word after fade out
            changingWord.textContent = words[wordIndex];
            // Fade in
            changingWord.style.opacity = 1;
            // Increment word index
            wordIndex = (wordIndex + 1) % words.length;
        }, 500); // Match this delay to the transition duration in CSS
    }

    // Initialize the first word
    changingWord.textContent = words[wordIndex];
    wordIndex++;

    // Start the loop
    setInterval(changeWord, 2000); // Change word every 2 seconds
});

