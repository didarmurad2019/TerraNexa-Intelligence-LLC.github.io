const md=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\*(.+?)\*/g,'<i>$1</i>');
fetch('docs/bylaws.md').then(r=>r.text()).then(src=>{
 let h='',ul=false,toc='';
 src.split('\n').forEach(l=>{
  if(ul&&!l.startsWith('- ')){h+='</ul>';ul=false}
  if(l.startsWith('# '))h+=`<h1>${md(l.slice(2))}</h1>`;
  else if(l.startsWith('## ')){const id='s'+toc.split('<a').length;toc+=`<a href="#${id}">${l.slice(3)}</a>`;h+=`<h2 id="${id}">${md(l.slice(3))}</h2>`}
  else if(l.startsWith('- ')){if(!ul){h+='<ul>';ul=true}h+=`<li>${md(l.slice(2))}</li>`}
  else if(l.trim())h+=`<p${l.startsWith('*Eff')?' class="sub"':''}>${md(l)}</p>`;
 });
 const d=document.getElementById('doc');d.innerHTML=h;document.getElementById('toc').innerHTML=toc;
 document.getElementById('q').addEventListener('input',e=>{
  const v=e.target.value.trim();d.innerHTML=d.innerHTML.replace(/<\/?mark>/g,'');
  if(v.length>2)d.innerHTML=d.innerHTML.replace(new RegExp('(?![^<]*>)('+v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<mark>$1</mark>');
 });
});
