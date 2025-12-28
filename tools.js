
function checkLink(){
 let l=document.getElementById('link').value;
 let r=document.getElementById('result');
 if(l.includes('bit.ly')||l.includes('tinyurl')){
  r.innerHTML='⚠️ This link looks suspicious. Do not click.';
  r.style.color='red';
 } else {
  r.innerHTML='✅ No obvious risk detected (demo check).';
  r.style.color='green';
 }
}
