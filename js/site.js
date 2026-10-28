// Progressive enhancement only: every page works with JavaScript turned off.
(function () {
  document.documentElement.classList.add('js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var mq = window.matchMedia('(min-width: 56rem)');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.setAttribute('data-open', String(open));
  }

  setOpen(mq.matches);

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Escape closes the menu and returns focus to the button (WCAG 2.1.2 / 3.2.1)
  nav.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mq.matches) {
      setOpen(false);
      toggle.focus();
    }
  });

  mq.addEventListener('change', function (e) { setOpen(e.matches); });
})();
