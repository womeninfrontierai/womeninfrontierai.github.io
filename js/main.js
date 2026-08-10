// Women in Frontier AI — shared site behavior

(function themeToggle() {
  var btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme');
    var isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('wifai-theme', next); } catch (e) {}
  });
})();

(function mobileNav() {
  var toggle = document.querySelector('[data-nav-toggle]');
  var menu = document.querySelector('[data-mobile-nav]');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
    var expanded = menu.classList.contains('open');
    toggle.setAttribute('aria-expanded', String(expanded));
  });
})();

(function scrollReveal() {
  var targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.setAttribute('data-revealed', 'true'); });
    return;
  }

  document.documentElement.classList.add('has-reveal');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(function (el, i) {
    el.style.setProperty('--reveal-delay', (i % 6) * 70 + 'ms');
    observer.observe(el);
  });
})();

(function footerYear() {
  var el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
})();
