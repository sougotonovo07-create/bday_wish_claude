/* ============================================================
   script.js — Shared JavaScript
   Birthday Surprise Website for Bhumika 💕
   ============================================================ */

/* =============================================
   MUSIC PLAYER
   ============================================= */
let isMusicPlaying = false;

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');
  if (!music) return;

  if (isMusicPlaying) {
    music.pause();
    isMusicPlaying = false;
    btn.textContent = '🎵';
    btn.title = 'Play music';
  } else {
    music.play().then(() => {
      isMusicPlaying = true;
      btn.textContent = '⏸️';
      btn.title = 'Pause music';
    }).catch(() => {
      // Autoplay blocked – user must interact first (already handled via button click)
      console.log('Music autoplay blocked by browser. User can click the button.');
    });
  }
}

function updateMusicBtn(playing) {
  isMusicPlaying = playing;
  const btn = document.getElementById('musicToggle');
  if (btn) btn.textContent = playing ? '⏸️' : '🎵';
}

/* =============================================
   FLOATING HEARTS (Page 1)
   ============================================= */
function generateHearts() {
  const container = document.getElementById('heartsContainer');
  if (!container) return;

  const symbols = ['❤️', '💕', '💗', '🌸', '✨', '💖', '💝'];

  for (let i = 0; i < 22; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Random horizontal position
    heart.style.left = Math.random() * 100 + 'vw';
    // Random size
    heart.style.fontSize = (0.9 + Math.random() * 1.4) + 'rem';
    // Random speed
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    // Random delay so they don't all start at once
    heart.style.animationDelay = '-' + Math.random() * 12 + 's';
    // Random opacity
    heart.style.opacity = 0.4 + Math.random() * 0.5;

    container.appendChild(heart);
  }
}

/* =============================================
   ROSE PETALS (Page 3)
   ============================================= */
function generatePetals() {
  const container = document.getElementById('petalsContainer');
  if (!container) return;

  const petals = ['🌸', '🌷', '🌺', '💮', '🏵️'];

  for (let i = 0; i < 16; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    petal.style.animationDuration = (6 + Math.random() * 10) + 's';
    petal.style.animationDelay = '-' + Math.random() * 10 + 's';
    petal.style.opacity = 0.5 + Math.random() * 0.4;

    container.appendChild(petal);
  }
}

/* =============================================
   PAGE ENTRANCE ANIMATION
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Fade in body content
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
