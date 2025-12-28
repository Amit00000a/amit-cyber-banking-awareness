
function loadSection(section){
fetch('assets/data/'+section+'.json')
.then(res=>res.json())
.then(data=>{
let html='<h2>'+data.title+'</h2>';
data.items.forEach(i=>{
html+='<p>• '+i+'</p>';
});
document.getElementById('content').innerHTML=html;
});
}
