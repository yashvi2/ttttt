/* Case study template behaviour: reveal, counters, bars, timeline, step decks, galleries, marquees, before/after. */
(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,IO='IntersectionObserver' in window;
function vis(el,cb,th){if(!IO){cb(true);return;}new IntersectionObserver(function(es){es.forEach(function(e){cb(e.isIntersecting);});},{threshold:th||.25}).observe(el);}
function once(el,cb,th){var d=false;vis(el,function(v){if(v&&!d){d=true;cb();}},th);}
function all(s,r){return [].slice.call((r||document).querySelectorAll(s));}
window.kitVis=vis;window.kitOnce=once;

/* reveal */
var pr=all('.pr');
if(reduce||!IO)pr.forEach(function(e){e.classList.add('in');});
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});pr.forEach(function(e){io.observe(e);});}

/* count-up numbers: <b class="cnt" data-to="70" data-dec="0">70</b> */
all('.cnt').forEach(function(b){var to=+b.dataset.to,dec=+b.dataset.dec||0;if(reduce)return;var keep=b.innerHTML,unit=b.querySelector('small');var u=unit?unit.outerHTML:'';
  function put(v){b.innerHTML=v.toFixed(dec)+u;}put(0);
  once(b,function(){var t0=performance.now();(function st(n){var p=Math.min(1,(n-t0)/1400),e=1-Math.pow(1-p,3);put(to*e);if(p<1)requestAnimationFrame(st);else b.innerHTML=keep;})(t0);},.4);});

/* bars + timeline */
all('.khb,.ktl').forEach(function(el){once(el,function(){el.classList.add('in');},.3);});

/* step decks and galleries: auto-advance while on screen */
function rotor(root,items,tabs,ms,onGo){
  var i=0,t=null,on=false,hold=false;
  function go(k,user){i=(k+items.length)%items.length;
    items.forEach(function(c,n){c.classList.toggle('on',n===i);c.setAttribute('aria-hidden',String(n!==i));});
    tabs.forEach(function(b,n){b.classList.toggle('on',n===i);b.classList.toggle('done',n<i);b.setAttribute('aria-selected',String(n===i));var x=b.querySelector('i');if(x){x.style.animation='none';x.offsetWidth;x.style.animation='';}});
    if(onGo)onGo(i);clearTimeout(t);if(on&&!hold)t=setTimeout(function(){go(i+1);},ms);}
  tabs.forEach(function(b,n){b.addEventListener('click',function(){go(n,true);});});
  root.addEventListener('focusin',function(){hold=true;root.classList.add('hold');clearTimeout(t);});
  root.addEventListener('focusout',function(e){if(!root.contains(e.relatedTarget)){hold=false;root.classList.remove('hold');go(i);}});
  vis(root,function(v){var was=on;on=v;if(v&&!was)go(i);else if(!v)clearTimeout(t);},.2);
  go(0);return {go:function(k){go(k,true);},cur:function(){return i;}};}
all('.kdeck').forEach(function(d){var ms=+d.dataset.ms||4800;d.style.setProperty('--dur',ms+'ms');var tabs=all('.kt button',d);d.querySelector('.kt').style.setProperty('--n',tabs.length);rotor(d,all('.kk>*',d),tabs,ms);});
all('.kgal').forEach(function(g){var ms=+g.dataset.ms||5200,figs=all('.st>figure',g),dots=all('.kgal-dots button',g),cnt=g.querySelector('.kgal-n');
  var r=rotor(g,figs,dots,ms,function(i){if(cnt)cnt.textContent=String(i+1).padStart(2,'0')+' / '+String(figs.length).padStart(2,'0');});
  all('[data-step]',g).forEach(function(b){b.addEventListener('click',function(){r.go(r.cur()+(+b.dataset.step));});});});

/* marquee: duplicate the track once, add a pause button */
all('.kmq').forEach(function(m){var tr=m.querySelector('.trk');if(!tr)return;
  all(':scope>*',tr).forEach(function(n){var c=n.cloneNode(true);c.setAttribute('aria-hidden','true');c.setAttribute('tabindex','-1');all('a,button',c).forEach(function(x){x.setAttribute('tabindex','-1');});if(c.tagName==='A')c.setAttribute('tabindex','-1');tr.appendChild(c);});
  var b=document.querySelector('[data-mq="'+m.id+'"]');
  if(b)b.addEventListener('click',function(){var p=m.classList.toggle('paused');b.setAttribute('aria-pressed',String(p));b.querySelector('span').textContent=p?'Play':'Pause';});});

/* before / after slider */
all('.kba').forEach(function(k){var r=k.querySelector('input');function set(){k.style.setProperty('--x',r.value+'%');}r.addEventListener('input',set);set();
  if(!reduce)once(k,function(){var v=50,dir=-1,n=0;var iv=setInterval(function(){v+=dir*1.2;if(v<18){dir=1;}if(v>82){dir=-1;n++;}r.value=v;set();if(n>0&&Math.abs(v-50)<1.3){clearInterval(iv);r.value=50;set();}},16);k.addEventListener('pointerdown',function(){clearInterval(iv);},{once:true});},.5);});
})();
