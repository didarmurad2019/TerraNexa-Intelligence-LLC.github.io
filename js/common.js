const TN={
 user(){try{const u=JSON.parse(sessionStorage.getItem('tn'));return u&&u.exp>Date.now()?u:null}catch(e){return null}},
 logout(){sessionStorage.removeItem('tn');location.href='login.html'},
 async init(){
  const c=await (await fetch('json/site.json')).json(),u=this.user(),here=location.pathname.split('/').pop()||'index.html';
  document.getElementById('nav').innerHTML=c.nav.map(n=>`<li><a href="${n.href}" ${n.href===here?'class="on"':''}>${n.label}${n.href==='bylaws.html'?' 🔒':''}</a></li>`).join('');
  document.getElementById('auth').innerHTML=u?`<span class="who">${u.name}</span><a class="btn" href="#" id="out">Logout</a>`:`<a class="btn p" href="login.html">Member Login</a>`;
  const o=document.getElementById('out');if(o)o.onclick=e=>{e.preventDefault();this.logout()};
  const f=document.getElementById('ft');if(f)f.innerHTML=`© ${new Date().getFullYear()} ${c.company}. All rights reserved.<br><a href="${c.siteUrl}">${c.siteUrl}</a>`;
  return c;
 }
};
