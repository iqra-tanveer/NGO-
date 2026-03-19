
document.addEventListener('DOMContentLoaded', function () {


  const nav = document.getElementById('siteNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('shadow-lg', window.scrollY > 20);
    });
  }


  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('hidden');
      burger.classList.toggle('open', !open);
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        burger.classList.remove('open');
      });
    });
  }

  
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const body  = this.nextElementSibling;
      const arrow = this.querySelector('.faq-arrow');
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('rotate-180'));
      if (!isOpen) {
        body.classList.add('open');
        if (arrow) arrow.classList.add('rotate-180');
      }
    });
  });

  const form = document.getElementById('contactForm');
  if (form) {
    const alert = document.getElementById('successAlert');
    const btn   = form.querySelector('#submitBtn');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      btn.textContent = 'Sending…';
      btn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: 'POST', body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          if (alert) { alert.classList.remove('hidden'); alert.scrollIntoView({ behavior:'smooth', block:'nearest' }); }
          form.reset();
          btn.textContent = 'Message Sent ✓';
          setTimeout(() => {
            if (alert) alert.classList.add('hidden');
            btn.textContent = 'Send Message →';
            btn.disabled = false;
          }, 6000);
        } else {
          btn.textContent = 'Error — Try Again';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
      }
    });
  }


  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target, target = +el.dataset.count, dur = 1800, start = performance.now();
          const tick = now => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * ease);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => obs.observe(el));
  }

});
