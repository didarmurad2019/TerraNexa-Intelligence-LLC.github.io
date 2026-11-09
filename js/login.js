const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const sha=async s=>hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
(async()=>{
 const c=await TN.init(),msg=document.getElementById('msg'),p=new URLSearchParams(location.search);
 let next=p.get('next')||'bylaws.html';if(!/^[\w-]+\.html$/.test(next))next='bylaws.html';
 if(TN.user())location.replace(next);
 document.getElementById('lf').onsubmit=async e=>{
  e.preventDefault();
  const lock=+sessionStorage.getItem('tnlock')||0;
  if(Date.now()<lock){msg.textContent='Too many attempts. Please wait a minute.';return}
  const id=e.target.id.value.trim().toLowerCase(),pw=e.target.pw.value;
  try{
   const {users}=await (await fetch('assets/users.json?'+Date.now())).json();
   const u=users.find(x=>x.email.toLowerCase()===id||x.username.toLowerCase()===id);
   if(u&&await sha(u.salt+pw)===u.hash){
    sessionStorage.setItem('tn',JSON.stringify({name:u.name,email:u.email,role:u.role,exp:Date.now()+c.sessionMinutes*60000}));
    sessionStorage.removeItem('tnfail');location.href=next;return;
   }
  }catch(err){msg.textContent='Unable to reach the user database.';return}
  const n=(+sessionStorage.getItem('tnfail')||0)+1;sessionStorage.setItem('tnfail',n);
  if(n>=5){sessionStorage.setItem('tnlock',Date.now()+60000);sessionStorage.setItem('tnfail',0)}
  msg.textContent='Invalid username/email or password.';
 };
})();
