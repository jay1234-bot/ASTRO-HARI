// Loading Screen Animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = loadingScreen.querySelector('.progress-bar');
    let progress = 0;

    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 30);

    // Bubble Animation
    const bubbleContainer = document.getElementById('bubbleContainer');
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 4 + 4}s`;
        bubbleContainer.appendChild(bubble);

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    setInterval(createBubble, 500);
}); 