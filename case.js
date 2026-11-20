(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var top_=document.getElementById('top'),prog=document.getElementById('prog'),cover=document.querySelector('.cs-cover'),toc=document.querySelector('.ctoc');
var links=[].slice.call(document.querySelectorAll('.ctoc a')),secs=links.map(function(a){return document.querySelector(a.getAttribute('href'));});
function onScroll(){
  top_.classList.toggle('s',scrollY>8);
  var h=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?scrollY/h:0)+')';
  if(cover&&!reduce){var r=cover.getBoundingClientRect();var p=Math.min(1,Math.max(0,1-r.top/innerHeight));cover.style.setProperty('--cp',p.toFixed(3));}
  var cur=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<innerHeight*.35)cur=i;});
  links.forEach(function(a,i){a.classList.toggle('on',i===cur);});
  if(toc){var f=secs[0],l=secs[secs.length-1];if(f&&l){var a0=f.getBoundingClientRect().top+scrollY-innerHeight*.35,a1=l.getBoundingClientRect().bottom+scrollY-innerHeight;toc.style.setProperty('--sp',Math.min(1,Math.max(0,(scrollY-a0)/Math.max(1,a1-a0))).toFixed(3));}}
  var on=links[cur];if(on&&on.dataset.vis!=='1'){links.forEach(function(x){x.dataset.vis='';});on.dataset.vis='1';var ol=on.parentNode.parentNode;ol.scrollTo({left:on.offsetLeft-ol.clientWidth/2+on.clientWidth/2,behavior:reduce?'auto':'smooth'});}
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
/* split headings into words */
document.querySelectorAll('.cs-body>.h2').forEach(function(h){var t=h.textContent.trim().split(/\s+/);h.setAttribute('aria-label',h.textContent.trim());h.innerHTML=t.map(function(w,i){return '<span class="lw" aria-hidden="true"><span style="--wi:'+i+'">'+w.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span></span>';}).join(' ');});
/* reveal targets */
var sel='.cs-body>p,.cs-body>h3,.cs-body>.blist,.cs-body>.tbl,.cs-body>.note,.panel,.pair>blockquote,.grid>blockquote,.glance div,.cs-facts .meta>div,.stats>div,.phones figure,.figs figure';
var rv=[].slice.call(document.querySelectorAll(sel));rv.forEach(function(el){el.classList.add('rv');});
document.querySelectorAll('.figs .frame').forEach(function(f){f.classList.add('rvi');});
var anim=[].slice.call(document.querySelectorAll('.rv,.rvi,.cs-body>.h2,.bars,.timeline'));
if(cover)cover.classList.add('pre');
if(!('IntersectionObserver' in window)||reduce){anim.forEach(function(el){el.classList.add('in');});if(cover)cover.classList.remove('pre');}
else{
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');if(e.target.classList.contains('stat-b'))count(e.target);io.unobserve(e.target);}});},{threshold:0,rootMargin:'0px 0px -8% 0px'});
  anim.forEach(function(el){io.observe(el);});
  requestAnimationFrame(function(){requestAnimationFrame(function(){if(cover)cover.classList.remove('pre');});});
  /* count up numbers in stats */
  document.querySelectorAll('.stats b').forEach(function(b){b.classList.add('stat-b');io.observe(b);});
  var sweep=function(){var lim=innerHeight*.94;anim.concat([].slice.call(document.querySelectorAll('.stat-b'))).forEach(function(el){if(el.classList.contains('in'))return;var r=el.getBoundingClientRect();if(r.top<lim&&r.bottom>0){el.classList.add('in');if(el.classList.contains('stat-b'))count(el);io.unobserve(el);}});};
  addEventListener('scroll',sweep,{passive:true});addEventListener('load',sweep);setTimeout(sweep,600);
}
function count(b){var txt=b.textContent,m=txt.match(/^([^\d£]*)(£?)(\d+(?:\.\d+)?)(.*)$/);if(!m||reduce)return;var to=parseFloat(m[3]),dec=(m[3].split('.')[1]||'').length,t0=performance.now();
  (function st(now){var p=Math.min(1,(now-t0)/1200),e=1-Math.pow(1-p,3);b.textContent=m[1]+m[2]+(to*e).toFixed(dec)+m[4];if(p<1)requestAnimationFrame(st);else b.textContent=txt;})(t0);}
/* lightbox */
var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Image preview');lb.innerHTML='<button type="button" aria-label="Close">×</button><img alt=""><p></p>';document.body.appendChild(lb);
var li=lb.querySelector('img'),lp=lb.querySelector('p'),lc=lb.querySelector('button'),last=null;
function close(){lb.classList.remove('on');if(last)last.focus();}
document.querySelectorAll('.figs .frame img,.phones .frame img').forEach(function(img){var fr=img.parentNode;fr.setAttribute('tabindex','0');fr.setAttribute('role','button');fr.setAttribute('aria-label','Enlarge: '+img.alt);
  function open(){last=fr;li.src=img.currentSrc||img.src;li.alt=img.alt;var c=fr.parentNode.querySelector('figcaption');lp.textContent=c?c.textContent:'';lb.classList.add('on');lc.focus();}
  fr.addEventListener('click',open);fr.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
lb.addEventListener('click',close);addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('on'))close();});
})();

/* case video: plays muted while on screen, with sound and pause toggles */
(function(){document.querySelectorAll('.vid').forEach(function(f){var v=f.querySelector('video'),s=f.querySelector('.vsnd'),p=f.querySelector('.vplay'),user=false,red=matchMedia('(prefers-reduced-motion: reduce)').matches;
function st(){p.classList.toggle('paused',v.paused);p.setAttribute('aria-label',v.paused?'Play video':'Pause video');}
v.addEventListener('play',st);v.addEventListener('pause',st);st();
p.addEventListener('click',function(){user=true;if(v.paused)v.play();else v.pause();});
s.addEventListener('click',function(){v.muted=!v.muted;s.setAttribute('aria-pressed',String(!v.muted));s.setAttribute('aria-label',v.muted?'Turn sound on':'Turn sound off');if(v.paused){user=true;v.play();}});
if('IntersectionObserver' in window&&!red){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){if(!user||!v.paused){var r=v.play();if(r&&r.catch)r.catch(function(){});}}else if(!v.paused){v.pause();}});},{threshold:.35}).observe(v);}
});})();
/* Ask Beta: auto-playing flow, tap hints, and a live prototype tab */
(function(){var pm=document.getElementById('pm');if(!pm)return;
var S=[].slice.call(pm.querySelectorAll('.pm-s')),B=[].slice.call(pm.querySelectorAll('.pm-step')),tap=pm.querySelector('.pm-tap'),cur=0,tm=null,DUR=3800,vis=false,hover=false;
var TAPS=[[83,23],[50,30],[50,14],[50,30]];
pm.style.setProperty('--dur',DUR+'ms');
function go(i){var prev=cur;cur=(i+S.length)%S.length;S.forEach(function(s,k){s.classList.remove('on','out');if(k===prev&&k!==cur)s.classList.add('out');});S[cur].classList.add('on');
  B.forEach(function(b,k){b.classList.toggle('on',k===cur);b.setAttribute('aria-current',k===cur?'step':'false');var bar=b.querySelector('.pm-bar');bar.style.animation='none';bar.offsetWidth;bar.style.animation='';});
  var t=TAPS[cur];tap.style.left=t[0]+'%';tap.style.top=t[1]+'%';tap.classList.remove('go');setTimeout(function(){tap.offsetWidth;tap.classList.add('go');},DUR-1100);
  sched();}
function sched(){clearTimeout(tm);if(vis&&!hover&&pm.dataset.mode==='story')tm=setTimeout(function(){go(cur+1);},DUR);}
B.forEach(function(b){b.addEventListener('click',function(){go(+b.dataset.i);});});
pm.querySelector('.pm-stage').addEventListener('pointerenter',function(){hover=true;pm.classList.add('hold');clearTimeout(tm);});
pm.querySelector('.pm-stage').addEventListener('pointerleave',function(){hover=false;pm.classList.remove('hold');go(cur);});
if('IntersectionObserver' in window){new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis)go(cur);else clearTimeout(tm);},{threshold:.3}).observe(pm);}else{vis=true;go(0);}
var tabs=[].slice.call(pm.querySelectorAll('.pm-tabs button')),ifr=pm.querySelector('iframe'),dev=pm.querySelector('.pm-dev');
ifr.addEventListener('load',function(){if(ifr.src)dev.classList.add('ok');});
tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(x){x.setAttribute('aria-pressed',String(x===t));});pm.dataset.mode=t.dataset.m;
  if(t.dataset.m==='live'){clearTimeout(tm);if(!ifr.src)ifr.src=ifr.dataset.src;}else go(cur);});});
})();
/* Move: flipbook. Two-page spread with real page turns on wide screens, single pages on phones */
(function(){var bk=document.getElementById('bk');if(!bk)return;
var book=bk.querySelector('.bk-book'),pages=[].slice.call(book.querySelectorAll('.bk-pg')),zones=[].slice.call(book.querySelectorAll('.bk-zone'));
var n=pages.length,cnt=bk.querySelector('.bk-count'),bar=bk.querySelector('.bk-prog i'),bs=bk.querySelectorAll('.bk-b'),mode='',leaves=[],at=0,cur=0;
var red=matchMedia('(prefers-reduced-motion: reduce)').matches;
pages.forEach(function(p){[].slice.call(p.querySelectorAll('.bk-gr')).forEach(function(r,i){r.querySelectorAll('i').forEach(function(x){x.style.setProperty('--r',i);});});});
function ui(){var lo,hi;
  if(mode==='spread'){lo=at*2;hi=Math.min(n,at*2+1);cnt.textContent=at===0?'Cover':at*2>=n?'Back cover':'Pages '+(at*2)+'–'+Math.min(n,at*2+1)+' of '+n;
    bar.style.transform='scaleX('+(at/leaves.length)+')';bs[0].disabled=at===0;
    pages.forEach(function(p,k){p.classList.toggle('cur',k===at*2-1||k===at*2);});book.classList.toggle('shut-f',at===0);book.classList.toggle('shut-b',at>=leaves.length);}
  else{book.classList.remove('shut-f','shut-b');cnt.textContent=(cur+1)+' / '+n;bar.style.transform='scaleX('+((cur+1)/n)+')';bs[0].disabled=cur===0;}
  bs[1].setAttribute('aria-label',(mode==='spread'?at>=leaves.length:cur===n-1)?'Back to the start':'Next page');}
function zset(){leaves.forEach(function(l,k){l.style.zIndex=k<at?(10+k):(100-k);});}
function build(m){if(m===mode)return;mode=m;
  leaves.forEach(function(l){l.remove();});leaves=[];
  pages.forEach(function(p){p.className=p.className.replace(/\s*(flipped|cur|back)\b/g,'');p.style.zIndex='';book.insertBefore(p,zones[0]);});
  book.classList.toggle('spread',m==='spread');
  if(m==='spread'){for(var k=0;k<n;k+=2){var l=document.createElement('div');l.className='bk-leaf';
      var f=document.createElement('div');f.className='bk-face front';f.appendChild(pages[k]);l.appendChild(f);
      var b=document.createElement('div');b.className='bk-face back';if(pages[k+1])b.appendChild(pages[k+1]);l.appendChild(b);
      book.insertBefore(l,zones[0]);leaves.push(l);}
    at=Math.min(leaves.length,Math.ceil(cur/2));leaves.forEach(function(l,k){l.classList.toggle('turned',k<at);});zset();}
  else{cur=Math.min(n-1,Math.max(0,at*2-1));single(cur,0);}
  ui();}
function single(i,dir){cur=Math.max(0,Math.min(n-1,i));pages.forEach(function(p,k){p.classList.toggle('back',dir<0);p.classList.toggle('flipped',k<cur);p.classList.toggle('cur',k===cur);p.style.zIndex=k<cur?(10+k):(60-k);});ui();}
var busy=false;
function turn(d){if(mode==='spread'){
    if(d>0&&at>=leaves.length){while(at>0){at--;leaves[at].classList.remove('turned');}zset();ui();return;}
    var nx=at+d;if(nx<0||nx>leaves.length)return;
    var l=d>0?leaves[at]:leaves[at-1];l.style.zIndex=200;l.classList.add('moving');l.classList.toggle('turned',d>0);
    at=nx;ui();clearTimeout(l._t);l._t=setTimeout(function(){l.classList.remove('moving');zset();},red?50:1100);
  }else{if(d>0&&cur===n-1){single(0,-1);return;}single(cur+d,d);}}
bs.forEach(function(b){b.addEventListener('click',function(){turn(+b.dataset.d);});});
zones[0].addEventListener('click',function(){turn(-1);});zones[1].addEventListener('click',function(){turn(1);});
book.addEventListener('click',function(e){if(mode!=='spread'||e.target.closest('.bk-zone,a,button'))return;var r=book.getBoundingClientRect();turn(e.clientX>r.left+r.width/2?1:-1);});
bk.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();turn(1);}if(e.key==='ArrowLeft'){e.preventDefault();turn(-1);}});
var x0=null;book.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
book.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)turn(dx<0?1:-1);x0=null;});
var mq=matchMedia('(min-width: 900px)');function pick(){build(mq.matches?'spread':'single');}
(mq.addEventListener?mq.addEventListener('change',pick):mq.addListener(pick));pick();
})();
