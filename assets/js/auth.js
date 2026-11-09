const Auth=(()=>{const KEY='tnx_session',MAX=5,LOCK=60000;
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
const get=()=>{try{return JSON.parse(sessionStorage.getItem(KEY))}catch{return null}};
const guard=()=>{const s=get();if(!s||Date.now()>s.exp){sessionStorage.removeItem(KEY);location.replace('portal.html');return null}return s};
const logout=()=>{sessionStorage.removeItem(KEY);location.replace('portal.html')};
async function login(id,pw){
 const t=JSON.parse(localStorage.getItem('tnx_try')||'{"n":0,"u":0}');if(Date.now()<t.u)throw Error('Too many attempts. Try again in a minute.');
 const {users}=await (await fetch('assets/auth/users.json',{cache:'no-store'})).json();id=id.trim().toLowerCase();
 const u=users.find(u=>u.email.toLowerCase()===id||u.name.toLowerCase()===id);
 const ok=u&&await sha(u.email.toLowerCase()+':'+pw)===u.hash;
 if(!ok){t.n++;if(t.n>=MAX){t.u=Date.now()+LOCK;t.n=0}localStorage.setItem('tnx_try',JSON.stringify(t));throw Error('Invalid name/email or password.')}
 localStorage.removeItem('tnx_try');sessionStorage.setItem(KEY,JSON.stringify({name:u.name,email:u.email,role:u.role,exp:Date.now()+30*60000}));}
return{login,guard,logout,get}})();
