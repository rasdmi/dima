// Бургер (без падений, если меню отсутствует)
const burger = document.querySelector('.burger');
const mobile = document.getElementById('mobile-menu');
function toggleMenu(){
  if(!mobile) return;
  const opened = mobile.classList.toggle('open');
  if (burger) burger.setAttribute('aria-expanded', opened);
  mobile.hidden = !opened;
}
burger?.addEventListener('click', toggleMenu);

// Защита от автопаузы видео в некоторых браузерах
const vid = document.querySelector('.hero video');
if (vid) {
  const tryPlay = () => vid.play().catch(()=>{});
  document.addEventListener('visibilitychange', tryPlay, {passive:true});
  window.addEventListener('focus', tryPlay, {passive:true});
}

// Микропараллакс для кружочков при скролле
const dots = Array.from(document.querySelectorAll('.photo-wrap .dot'));
const speeds = dots.map((_,i)=> (i%3===0? 0.25 : i%3===1? 0.4 : 0.6));
let ticking=false;
function onScroll(){
  if(!ticking){
    window.requestAnimationFrame(()=>{
      const y=window.scrollY||window.pageYOffset;
      dots.forEach((el,idx)=>{
        const dy=Math.sin((y+idx*80)/500)*10 * speeds[idx];
        el.style.transform=`translateY(${dy.toFixed(1)}px)`;
      });
      ticking=false;
    });
    ticking=true;
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Анимация появления карточек команды (если нужно)
const members = document.querySelectorAll('.member');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:0.25});
members.forEach(m=>io.observe(m));

// tap-to-toggle для карточек extras на мобилках
document.querySelectorAll('[data-card]').forEach(card=>{
  card.addEventListener('click', ()=>{
    card.classList.toggle('open');
  });
});

/* ===== ПУЗЫРЬКИ: автоматическая генерация в секциях ===== */
(function(){
  const sectionIds = ['about','life','team','prices','extras','contacts'];
  let generated = false;

  function createBubbles(){
    // очистка
    document.querySelectorAll('.bubbles').forEach(el => el.remove());
    sectionIds.forEach(id=>{
      const sec = document.getElementById(id);
      if(!sec) return;
      sec.classList.add('has-bubbles');

      const wrap = document.createElement('div');
      wrap.className = 'bubbles';
      sec.appendChild(wrap);

      const base = window.innerWidth > 1200 ? 7 : (window.innerWidth > 680 ? 6 : 5);

      for(let i=0;i<base;i++){
        const b = document.createElement('span');
        b.className = 'bubble ' + (Math.random()<0.55 ? 'ring' : 'soft');

        const size = Math.round(10 + Math.random()*18);
        b.style.width = size+'px';
        b.style.height = size+'px';

        b.style.left = (4 + Math.random()*92) + '%';
        b.style.top  = (6 + Math.random()*84) + '%';

        const amp = (10 + Math.random()*16) | 0;
        const shift = (Math.random()<.5?-1:1) * (6 + Math.random()*14);
        b.style.setProperty('--amp', amp+'px');
        b.style.setProperty('--shift', shift+'px');

        const dur = (9 + Math.random()*10).toFixed(1)+'s';
        const delay = (-Math.random()*parseFloat(dur)).toFixed(1)+'s';
        b.style.setProperty('--dur', dur);
        b.style.setProperty('--delay', delay);

        wrap.appendChild(b);
      }
    });
    generated = true;
  }

  // первичный запуск
  createBubbles();

  // дебаунс на ресайз
  let t;
  window.addEventListener('resize', ()=>{
    if(!generated) return;
    clearTimeout(t);
    t = setTimeout(createBubbles, 350);
  });
})();
