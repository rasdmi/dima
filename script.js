// script.js
(function () {
  // ====== БУРГЕР / МОБИЛЬНОЕ МЕНЮ =========================================
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const OPEN_CLASS = 'open';
  const DESKTOP_BP = 880; // как в css

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = false;             // показать элемент
    mobileMenu.classList.add(OPEN_CLASS);  // включает display:block в css
    burger?.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';        // блокируем прокрутку фона
    const first = mobileMenu.querySelector('a, button');
    if (first) first.focus?.({ preventScroll: true });
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove(OPEN_CLASS);
    burger?.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
    // чуть ждём, чтобы анимация скрытия отработала, и прячем
    setTimeout(() => {
      if (!mobileMenu.classList.contains(OPEN_CLASS)) {
        mobileMenu.hidden = true;
      }
    }, 200);
  }

  function toggleMenu() {
    if (!mobileMenu) return;
    if (mobileMenu.classList.contains(OPEN_CLASS)) closeMenu();
    else openMenu();
  }

  burger?.addEventListener('click', toggleMenu);

  // Закрыть меню по клику на любую ссылку внутри (включая WhatsApp)
  mobileMenu?.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    closeMenu();
    // якорные ссылки (#id) браузер прокрутит сам; доп. скрипт не нужен
  });

  // Закрыть по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains(OPEN_CLASS)) {
      closeMenu();
    }
  });

  // При ресайзе до десктопа — гарантированно закрыть
  window.addEventListener('resize', () => {
    if (window.innerWidth > DESKTOP_BP && mobileMenu?.classList.contains(OPEN_CLASS)) {
      closeMenu();
    }
  });

  // ====== ВИДЕО: защита от автопаузы в некоторых браузерах ================
  const vid = document.querySelector('.hero video');
  if (vid) {
    const tryPlay = () => vid.play().catch(() => {});
    document.addEventListener('visibilitychange', tryPlay, { passive: true });
    window.addEventListener('focus', tryPlay, { passive: true });
  }

  // ====== МИКРОПАРАЛЛАКС ДЕКОРА В БЛОКЕ "О НАС" ===========================
  const dots = Array.from(document.querySelectorAll('.photo-wrap .dot'));
  const speeds = dots.map((_, i) => (i % 3 === 0 ? 0.25 : i % 3 === 1 ? 0.4 : 0.6));
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        dots.forEach((el, idx) => {
          const dy = Math.sin((y + idx * 80) / 500) * 10 * speeds[idx];
          el.style.transform = `translateY(${dy.toFixed(1)}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ====== АНИМАЦИЯ ПОЯВЛЕНИЯ ЧЛЕНОВ КОМАНДЫ ===============================
  const members = document.querySelectorAll('.member');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  members.forEach((m) => io.observe(m));

  // ====== TAP-TO-TOGGLE ДЛЯ КАРТОЧЕК EXTRAS НА МОБИЛКАХ ==================
  document.querySelectorAll('[data-card]').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });

  // ====== ПУЗЫРЬКИ: автоматическая генерация в секциях ====================
  (function () {
    const sectionIds = ['about', 'life', 'team', 'prices', 'extras', 'contacts'];
    let generated = false;

    function createBubbles() {
      document.querySelectorAll('.bubbles').forEach((el) => el.remove());
      sectionIds.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;
        sec.classList.add('has-bubbles');

        const wrap = document.createElement('div');
        wrap.className = 'bubbles';
        sec.appendChild(wrap);

        const base = window.innerWidth > 1200 ? 7 : window.innerWidth > 680 ? 6 : 5;

        for (let i = 0; i < base; i++) {
          const b = document.createElement('span');
          b.className = 'bubble ' + (Math.random() < 0.55 ? 'ring' : 'soft');

          const size = Math.round(10 + Math.random() * 18);
          b.style.width = size + 'px';
          b.style.height = size + 'px';

          b.style.left = 4 + Math.random() * 92 + '%';
          b.style.top = 6 + Math.random() * 84 + '%';

          const amp = (10 + Math.random() * 16) | 0;
          const shift = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 14);
          b.style.setProperty('--amp', amp + 'px');
          b.style.setProperty('--shift', shift + 'px');

          const dur = (9 + Math.random() * 10).toFixed(1) + 's';
          const delay = (-Math.random() * parseFloat(dur)).toFixed(1) + 's';
          b.style.setProperty('--dur', dur);
          b.style.setProperty('--delay', delay);

          wrap.appendChild(b);
        }
      });
      generated = true;
    }

    createBubbles();

    let t;
    window.addEventListener('resize', () => {
      if (!generated) return;
      clearTimeout(t);
      t = setTimeout(createBubbles, 350);
    });
  })();

  // ====== МОДАЛКА "НАША КОМАНДА" ==========================================
  document.querySelectorAll('.member').forEach((m) => {
    m.addEventListener('click', () => {
      const name = m.dataset.name || '';
      const text = m.dataset.text || '';

      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';

      const card = document.createElement('div');
      card.className = 'modal-card';

      const closeBtn = document.createElement('button');
      closeBtn.className = 'modal-close';
      closeBtn.innerHTML = '&times;';

      const title = document.createElement('h3');
      title.textContent = name;

      const p = document.createElement('p');
      p.textContent = text;

      card.appendChild(closeBtn);
      card.appendChild(title);
      card.appendChild(p);
      overlay.appendChild(card);
      document.body.appendChild(overlay);

      function close() {
        overlay.remove();
      }
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
      });
      closeBtn.addEventListener('click', close);

      // закрываем по Esc
      const escHandler = (e) => {
        if (e.key === 'Escape') {
          close();
          document.removeEventListener('keydown', escHandler);
        }
      };
      document.addEventListener('keydown', escHandler);
    });
  });
})();
