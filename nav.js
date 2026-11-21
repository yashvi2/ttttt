/* Hide the top bar when scrolling down past the first fold; bring it back on scroll up. */
(function(){
  var bar=document.getElementById('top')||document.querySelector('header.top');
  if(!bar)return;
  var root=document.documentElement,last=scrollY,ticking=false,hidden=false;
  function set(h){if(h===hidden)return;hidden=h;bar.classList.toggle('hid',h);root.classList.toggle('nav-hid',h);}
  function upd(){
    ticking=false;
    var y=scrollY,d=y-last;
    if(y<innerHeight*.9){set(false);}           // still within the first fold
    else if(d>6){set(true);}                    // scrolling down
    else if(d<-6){set(false);}                  // scrolling up
    if(Math.abs(d)>6||y<innerHeight*.9)last=y;
  }
  addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(upd);}},{passive:true});
  bar.addEventListener('focusin',function(){set(false);});
})();
