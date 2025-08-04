// JavaScript to make the game interactive

const spaceship = document.getElementById('spaceship');
const star = document.getElementById('star');
const asteroid = document.getElementById('asteroid');
const scoreDisplay = document.getElementById('score');

let spaceshipPosition = 180; // Starting position
let score = 0;

// Move the spaceship
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && spaceshipPosition > 0) {
        spaceshipPosition -= 20;
    } else if (event.key === 'ArrowRight' && spaceshipPosition < 360) {
        spaceshipPosition += 20;
    }
    spaceship.style.left = spaceshipPosition + 'px';
});

// Generate random positions for star and asteroid
function randomPosition() {
    return Math.floor(Math.random() * 380);
}

// Move star and asteroid down the screen
function moveObject(object) {
    let position = -50; // Start above the game area
    object.style.left = randomPosition() + 'px';

    const interval = setInterval(() => {
        position += 5;
        object.style.top = position + 'px';

        // Check for collision with spaceship
        const objectLeft = parseInt(object.style.left);
        if (
            position > 540 &&
            objectLeft > spaceshipPosition - 20 &&
            objectLeft < spaceshipPosition + 40
        ) {
            if (object === star) {
                score++;
                scoreDisplay.textContent = 'Score: ' + score;
            } else if (object === asteroid) {
                alert('Game Over! Final Score: ' + score);
                clearInterval(interval);
                window.location.reload();
            }
            position = -50; // Reset object position
            object.style.left = randomPosition() + 'px';
        }

        // Reset position when object leaves the screen
        if (position > 600) {
            position = -50;
            object.style.left = randomPosition() + 'px';
        }
    }, 50);
}

// Start the game
moveObject(star);
moveObject(asteroid);
