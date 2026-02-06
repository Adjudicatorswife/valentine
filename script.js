// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);

// Drawing trails on mouse move
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail-heart';
    trail.innerHTML = '💛';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.getElementById('trails').appendChild(trail);
    setTimeout(() => trail.remove(), 2000); // Remove after fade
});

// Message sequence
document.getElementById('btn1').addEventListener('click', () => {
    document.getElementById('message1').style.display = 'none';
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('message2').style.display = 'block';
    document.getElementById('btn2').style.display = 'block';
});

document.getElementById('btn2').addEventListener('click', () => {
    document.getElementById('message2').style.display = 'none';
    document.getElementById('btn2').style.display = 'none';
    document.getElementById('message3').style.display = 'block';
    document.getElementById('btn3').style.display = 'block';
});

document.getElementById('btn3').addEventListener('click', () => {
    document.getElementById('message3').style.display = 'none';
    document.getElementById('btn3').style.display = 'none';
    document.getElementById('message4').style.display = 'block';
    document.getElementById('btn4').style.display = 'block';
});

document.getElementById('btn4').addEventListener('click', () => {
    document.getElementById('message4').style.display = 'none';
    document.getElementById('btn4').style.display = 'none';
    document.getElementById('message5').style.display = 'block';
    document.getElementById('btn5').style.display = 'block';
});

document.getElementById('btn5').addEventListener('click', () => {
    document.getElementById('message5').style.display = 'none';
    document.getElementById('btn5').style.display = 'none';
    document.getElementById('pictures').style.display = 'block';
    setTimeout(() => {
        document.getElementById('songModal').style.display = 'flex';
    }, 2000);
});

// Song panel controls
document.getElementById('showAlbumBtn').addEventListener('click', () => {
    document.querySelector('.song-content').style.display = 'none';
    document.getElementById('albumView').style.display = 'block';
});

document.getElementById('backToSongBtn').addEventListener('click', () => {
    document.getElementById('albumView').style.display = 'none';
    document.querySelector('.song-content').style.display = 'block';
});

document.getElementById('exitPanelBtn').addEventListener('click', () => {
    document.getElementById('songModal').style.display = 'none';
    document.getElementById('showPanelBtn').style.display = 'block'; // Show floating button
});

document.getElementById('showPanelBtn').addEventListener('click', () => {
    document.getElementById('songModal').style.display = 'flex';
    document.getElementById('showPanelBtn').style.display = 'none';
});

// Mobile touch prevention
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault(); // Disable pinch zoom if unwanted
    }
}, { passive: false });