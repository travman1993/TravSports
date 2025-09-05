// Year in footer
const yEl = document.getElementById('y');
if (yEl) yEl.textContent = new Date().getFullYear();

// Tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(tab => {
tab.addEventListener('click', () => {
tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
panels.forEach(p => p.hidden = true);
tab.classList.add('active');
tab.setAttribute('aria-selected','true');
document.getElementById(tab.dataset.target).hidden = false;
});
});

// Carousels
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(c => {
const track = c.querySelector('.track');
const slides = [...c.querySelectorAll('.slide')];
const prev = c.querySelector('.prev');
const next = c.querySelector('.next');
let i = 0;
const go = n => { i = (n + slides.length) % slides.length; track.style.transform = `translateX(-${i*100}%)`; };
prev.addEventListener('click', () => go(i-1));
next.addEventListener('click', () => go(i+1));
// swipe support
let sx = 0; c.addEventListener('touchstart', e => sx = e.touches[0].clientX);
c.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); });
});

// Year in footer
const yEl = document.getElementById('y');
if (yEl) yEl.textContent = new Date().getFullYear();

// Tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(tab => {
tab.addEventListener('click', () => {
tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
panels.forEach(p => p.hidden = true);
tab.classList.add('active');
tab.setAttribute('aria-selected','true');
document.getElementById(tab.dataset.target).hidden = false;
});
});

// Carousels
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(c => {
const track = c.querySelector('.track');
const slides = [...c.querySelectorAll('.slide')];
const prev = c.querySelector('.prev');
const next = c.querySelector('.next');
let i = 0;
const go = n => { i = (n + slides.length) % slides.length; track.style.transform = `translateX(-${i*100}%)`; };
prev.addEventListener('click', () => go(i-1));
next.addEventListener('click', () => go(i+1));
// swipe support
let sx = 0; c.addEventListener('touchstart', e => sx = e.touches[0].clientX);
c.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); });
});
