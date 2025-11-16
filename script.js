
// --- Темная тема ---
function toggleTheme() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.theme-toggle');
  if (document.body.classList.contains('dark')) {
    btn.textContent = "☀️ Light";
  } else {
    btn.textContent = "🌙 Dark";
  }
}

// --- Анимация появления секций ---
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// --- Плавная навигация для всех ссылок ---
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.getAttribute('href');
      const targetPage = hash.split('#')[0];
      if (window.location.pathname.endsWith(targetPage)) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = hash;
      }
    }
  });
});

// --- Анимация прогресс-баров при видимости ---
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = width; // Запуск анимации через CSS transition
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));
