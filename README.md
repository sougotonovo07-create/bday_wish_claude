# 🎂 Birthday Surprise Website — Bhumika 💕

A romantic, interactive birthday surprise website built with pure HTML, CSS, and JavaScript.
Designed with love. No backend, no database — just beautiful web pages she'll never forget.

---

## 🌸 Pages

| Page | File | Description |
|------|------|-------------|
| 1. Landing | `index.html` | Animated welcome with floating hearts |
| 2. Gallery | `gallery.html` | Swiper.js photo carousel with captions |
| 3. Letter | `letter.html` | Love letter with falling petals |
| 4. Surprise | `surprise.html` | Click the gift box → confetti + balloons |
| 5. Forever | `final.html` | Countdown timer + fireworks + "I Love You" button |

---

## 📁 Folder Structure

```
birthday-project/
│
├── index.html
├── gallery.html
├── letter.html
├── surprise.html
├── final.html
│
├── css/
│   ├── style.css       ← Global shared styles
│   ├── page1.css
│   ├── page2.css
│   ├── page3.css
│   ├── page4.css
│   └── page5.css
│
├── js/
│   └── script.js       ← Shared JavaScript
│
├── images/
│   ├── photo1.jpg      ← Add your photos here
│   ├── photo2.jpg
│   └── photo3.jpg
│
└── music/
    └── birthday-song.mp3   ← Add your music here
```

---

## 🖼️ How to Add Your Photos

1. Put your photos inside the `images/` folder
2. Name them `photo1.jpg`, `photo2.jpg`, `photo3.jpg` (or anything you like)
3. Open `gallery.html`
4. Find the comment: `<!-- REPLACE ABOVE WITH: <img src="..."> -->`
5. Replace the placeholder div with: `<img src="images/photo1.jpg" alt="Caption"/>`

---

## 🎵 How to Add Music

1. Find a romantic/birthday MP3 (e.g. from YouTube to MP3 converter)
2. Rename it to `birthday-song.mp3`
3. Place it in the `music/` folder
4. The player button at the bottom-right of every page will work automatically

---

## ✏️ How to Customize

- **Name**: Search & replace `Bhumika` in all HTML files with her name
- **Letter**: Edit the love letter text inside `letter.html` in the `<!-- EDIT THE LETTER BELOW -->` section
- **Captions**: Edit `gallery.html` — find `.caption-text` and `.caption-sub` inside each slide
- **Birthday Date**: In `final.html`, find:
  ```js
  const BIRTHDAY_MONTH = 6; // July (0-indexed: Jan=0, Jul=6)
  const BIRTHDAY_DAY = 21;
  ```
  Change the month and day if needed.
- **Colors**: All colors are CSS variables in `css/style.css` under `:root { ... }`

---

## 🚀 How to Put on GitHub & Host Online (Step-by-Step)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Install Git
Download from: https://git-scm.com/downloads  
Install it. Then open **Command Prompt** (Windows) or **Terminal** (Mac/Linux).

### Step 3 — Set up Git (first time only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Step 4 — Create a new repository on GitHub
1. Go to github.com → click the **+** button → **New repository**
2. Name it: `bhumika-birthday` (or anything)
3. Keep it **Public**
4. Click **Create repository**

### Step 5 — Upload your project
Open terminal/command prompt in your project folder, then run:
```bash
git init
git add .
git commit -m "Birthday surprise website for Bhumika 💕"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bhumika-birthday.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your GitHub username.

### Step 6 — Enable GitHub Pages (free hosting!)
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** (left sidebar)
4. Under "Source", select `main` branch and `/ (root)` folder
5. Click **Save**
6. Wait 1-2 minutes — your site will be live at:
   **`https://YOUR_USERNAME.github.io/bhumika-birthday`**

### Step 7 — Share with Bhumika 🎁
Copy that link and send it to her!

---

## 🧪 Test Locally (Before Uploading)

Just open `index.html` directly in your browser (Chrome recommended).
Everything works locally — no server needed for HTML/CSS/JS.

> **Note**: Background music may not autoplay due to browser policies. She just needs to click the 🎵 button.

---

## 💡 Libraries Used (loaded from CDN — no installation needed)

| Library | Used For |
|---------|----------|
| [Typed.js](https://github.com/mattboldt/typed.js/) | Typewriter animation (Page 1) |
| [Swiper.js](https://swiperjs.com) | Photo carousel (Page 2) |
| [Canvas Confetti](https://github.com/catdad/canvas-confetti) | Confetti animation (Pages 4 & 5) |
| [Google Fonts](https://fonts.google.com) | Playfair Display, Lato, Dancing Script |

---

Made with 💕 for Bhumika's birthday.
