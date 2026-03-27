
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

  function showError(input) {
    const msg = input.closest('.flex.flex-col, .float-group')?.querySelector('.validation-msg');
    if (msg) msg.classList.remove('hidden');
    input.classList.add('border-red-400');
    input.classList.remove('border-stone-200');
  }
  function clearError(input) {
    const msg = input.closest('.flex.flex-col, .float-group')?.querySelector('.validation-msg');
    if (msg) msg.classList.add('hidden');
    input.classList.remove('border-red-400');
    input.classList.add('border-stone-200');
  }
  function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const alert = document.getElementById('successAlert');
    const btn   = contactForm.querySelector('#submitBtn');

    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      let valid = true;

      const first = contactForm.querySelector('#firstName');
      if (first && !first.value.trim()) { showError(first); valid = false; } else if (first) clearError(first);

      const last = contactForm.querySelector('#lastName');
      if (last && !last.value.trim()) { showError(last); valid = false; } else if (last) clearError(last);

      const email = contactForm.querySelector('#email');
      if (email && !validateEmail(email.value.trim())) { showError(email); valid = false; } else if (email) clearError(email);

      const subject = contactForm.querySelector('#subject');
      if (subject && !subject.value) { showError(subject); valid = false; } else if (subject) clearError(subject);

      const message = contactForm.querySelector('#message');
      if (message && message.value.trim().length < 10) { showError(message); valid = false; } else if (message) clearError(message);

      if (!valid) return;

      btn.textContent = 'Sending…';
      btn.disabled = true;
      try {
        const res = await fetch(contactForm.action, {
          method: 'POST', body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          if (alert) { alert.classList.remove('hidden'); alert.scrollIntoView({ behavior:'smooth', block:'nearest' }); }
          contactForm.reset();
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

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    const pw = document.getElementById('signupPassword');
    const bars = [document.getElementById('str1'), document.getElementById('str2'), document.getElementById('str3'), document.getElementById('str4')];
    const label = document.getElementById('strengthLabel');

    if (pw && bars[0]) {
      pw.addEventListener('input', () => {
        const v = pw.value;
        let score = 0;
        if (v.length >= 8) score++;
        if (/[A-Z]/.test(v)) score++;
        if (/[0-9]/.test(v)) score++;
        if (/[^A-Za-z0-9]/.test(v)) score++;

        const colors = ['bg-stone-200', 'bg-red-400', 'bg-amber', 'bg-amber-light', 'bg-green-500'];
        const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

        bars.forEach((b, i) => {
          b.className = 'h-1 flex-1 rounded-full transition-colors duration-300 ' + (i < score ? colors[score] : 'bg-stone-200');
        });
        if (label) { label.textContent = v.length ? labels[score] : ''; }
      });
    }

    signupForm.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      const first = signupForm.querySelector('#signupFirst');
      if (!first.value.trim()) { showError(first); valid = false; } else clearError(first);

      const last = signupForm.querySelector('#signupLast');
      if (!last.value.trim()) { showError(last); valid = false; } else clearError(last);

      const email = signupForm.querySelector('#signupEmail');
      if (!validateEmail(email.value.trim())) { showError(email); valid = false; } else clearError(email);

      const password = signupForm.querySelector('#signupPassword');
      if (password.value.length < 8) { showError(password); valid = false; } else clearError(password);

      const confirm = signupForm.querySelector('#signupConfirm');
      if (confirm.value !== password.value || !confirm.value) { showError(confirm); valid = false; } else clearError(confirm);

      const terms = signupForm.querySelector('#signupTerms');
      if (terms && !terms.checked) {
        valid = false;
        terms.classList.add('ring-2', 'ring-red-400');
        setTimeout(() => terms.classList.remove('ring-2', 'ring-red-400'), 2000);
      }

      if (!valid) return;

      const btn = signupForm.querySelector('#signupBtn');
      btn.textContent = 'Creating Account…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Account Created ✓';
        signupForm.reset();
        bars.forEach(b => { if (b) b.className = 'h-1 flex-1 rounded-full bg-stone-200 transition-colors duration-300'; });
        if (label) label.textContent = '';
        setTimeout(() => {
          btn.textContent = 'Create Account →';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      const email = signinForm.querySelector('#signinEmail');
      if (!validateEmail(email.value.trim())) { showError(email); valid = false; } else clearError(email);

      const password = signinForm.querySelector('#signinPassword');
      if (!password.value) { showError(password); valid = false; } else clearError(password);

      if (!valid) return;

      const btn = signinForm.querySelector('#signinBtn');
      btn.textContent = 'Signing In…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Signed In ✓';
        signinForm.reset();
        setTimeout(() => {
          btn.textContent = 'Sign In →';
          btn.disabled = false;
        }, 3000);
      }, 1500);
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

  document.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('input', () => {
      if (el.classList.contains('border-red-400')) {
        clearError(el);
      }
    });
  });

});
