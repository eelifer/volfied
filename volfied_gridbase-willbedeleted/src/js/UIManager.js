// src/js/UIManager.js

export class UIManager {
    constructor() {
        this.scoreElement = document.getElementById("scoreVal");
        this.livesElement = document.getElementById("livesVal");
        this.timerElement = document.getElementById("timerVal");
    }

    updateScore(percentage) {
        this.scoreElement.textContent = `%${percentage.toFixed(1)}`;
    }

    updateLives(livesCount) {
        const hearts = "❤️ ".repeat(Math.max(0, livesCount)).trim();
        this.livesElement.textContent = hearts || "💀 GAMEOVER";
    }

    updateTimer(seconds) {
        this.timerElement.textContent = seconds;
    }
}