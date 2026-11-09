(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const hd=$('header');addEventListener('scroll',()=>hd&&hd.classList.toggle('s',scrollY>10));
const bg=$('.burger'),mn=$('.menu');bg&&bg.addEventListener('click',()=>mn.classList.toggle('open'));
$$('.menu a').forEach(a=>a.addEventListener('click',()=>mn.classList.remove('open')));
const y=$('#yr');if(y)y.textContent=new Date().getFullYear();
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});$$('.rv').forEach(el=>io.observe(el));
const secs=$$('main section[id], .hero[id]'),links=$$('.menu a[href^="#"], .menu a[href*="index.html#"]');
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href').endsWith('#'+e.target.id)))}),{rootMargin:'-45% 0px -50% 0px'});secs.forEach(s=>so.observe(s));
// geospatial network canvas
const c=$('#net');if(c&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const x=c.getContext('2d');let w,h,p=[];
const rs=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;p=Array.from({length:Math.min(90,w/14|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};rs();addEventListener('resize',rs);
(function t(){x.clearRect(0,0,w,h);p.forEach((a,i)=>{a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1;x.fillStyle='rgba(52,211,153,.8)';x.beginPath();x.arc(a.x,a.y,1.8,0,7);x.fill();
for(let j=i+1;j<p.length;j++){const b=p[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle=`rgba(34,211,238,${.22*(1-d/130)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}});requestAnimationFrame(t)})()}
const f=$('#contact-form');f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
location.href=`mailto:info@terranexa.com?subject=${encodeURIComponent('Inquiry from '+d.get('name'))}&body=${encodeURIComponent(d.get('message')+'\n\n'+d.get('email'))}`})})();
