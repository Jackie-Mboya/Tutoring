const gameContainer = document.getElementById("game-container");
const spaceship = document.getElementById("spaceship");
const star = document.getElementById("star");
const asteroid = document.getElementById("asteroid");
const scoreDisplay = document.getElementById("score");

let score = 0;
let spaceshipPosition = 180; // Initial position of spaceship
const gameWidth = 400;

// Move spaceship with arrow keys
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && spaceshipPosition > 0) {
        spaceshipPosition -= 20;
    } else if (event.key === "ArrowRight" && spaceshipPosition < gameWidth - 40) {
        spaceshipPosition += 20;
    }
    spaceship.style.left = spaceshipPosition + "px";
});

// Start the game
function startGame() {
    moveObject(star, "collect");
    moveObject(asteroid, "avoid");
}

// Move stars and asteroids
function moveObject(element, type) {
    let position = Math.floor(Math.random() * (gameWidth - 30));
    element.style.left = position + "px";
    element.style.top = "-50px";

    const interval = setInterval(() => {
        const top = parseInt(element.style.top.replace("px", "")) + 5;
        element.style.top = top + "px";

        // Check for collision
        if (detectCollision(element)) {
            clearInterval(interval);
            if (type === "collect") {
                score += 10;
                scoreDisplay.textContent = `Score: ${score}`;
            } else if (type === "avoid") {
                alert("Game Over! Final Score: " + score);
                location.reload(); // Restart the game
            }
            element.style.top = "-50px";
        }

        // Reset position after leaving the game area
        if (top > 600) {
            clearInterval(interval);
            moveObject(element, type);
        }
    }, 30);
}

// Collision Detection
function detectCollision(element) {
    const elementRect = element.getBoundingClientRect();
    const spaceshipRect = spaceship.getBoundingClientRect();

    return !(
        elementRect.bottom < spaceshipRect.top ||
        elementRect.top > spaceshipRect.bottom ||
        elementRect.right < spaceshipRect.left ||
        elementRect.left > spaceshipRect.right
    );
}

// Initialize the game
startGame();
