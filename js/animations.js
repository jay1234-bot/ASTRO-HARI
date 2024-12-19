// Wait for all content to load before starting animations
window.addEventListener('load', () => {
    // Loading Screen Animation
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = loadingScreen.querySelector('.progress-bar');
    let progress = 0;

    // Function to update progress bar
    const updateProgress = () => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
            setTimeout(updateProgress, 30);
        } else {
            // When loading is complete, fade out the loading screen
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    };

    // Start progress animation
    updateProgress();

    // Bubble Animation
    const bubbleContainer = document.getElementById('bubbleContainer');
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 4 + 4}s`;
        bubbleContainer.appendChild(bubble);

        // Remove bubble after animation ends
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Create bubbles at regular intervals
    setInterval(createBubble, 500);
});

// Add initial loading indication
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = '5%';
    }
}); 
