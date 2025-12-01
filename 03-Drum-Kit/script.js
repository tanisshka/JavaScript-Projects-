const keys = Array.from(document.querySelectorAll(".key"));
const volumeControl = document.getElementById("volume");

function playSound(keyElement) {
    if (!keyElement) return;
    keyElement.classList.add("playing");
    const parent = keyElement.parentElement;
    parent.classList.add("active");

    const keyPressed = keyElement.dataset.key;
    const sound = document.querySelector(`audio[data-key="${keyPressed}"]`);
    if (sound) {
        sound.currentTime = 0;
        sound.volume = volumeControl.value;
        sound.play();
    }
}

function removeAnimation(keyElement) {
    if (!keyElement) return;
    keyElement.classList.remove("playing");
    const parent = keyElement.parentElement;
    parent.classList.remove("active");
}

// Keyboard events
document.addEventListener("keydown", (e) => {
    const keyPressed = e.key.toUpperCase();
    const keyElement = document.querySelector(`.key[data-key="${keyPressed}"]`);
    playSound(keyElement);
});

document.addEventListener("keyup", (e) => {
    const keyReleased = e.key.toUpperCase();
    const keyElement = document.querySelector(`.key[data-key="${keyReleased}"]`);
    removeAnimation(keyElement);
});

// Mouse click events
keys.forEach((key) => {
    key.addEventListener("click", () => {
        playSound(key);
        setTimeout(() => removeAnimation(key), 200);
    });
});
