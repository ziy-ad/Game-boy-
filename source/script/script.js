const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Game Loop Placeholder
function gameLoop() {
    // Example: Draw a rectangle moving across the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'lime';
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 10, 10);
    requestAnimationFrame(gameLoop);
}

gameLoop();

// Button interactions
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Button ${button.textContent} clicked!`);
    });
});
