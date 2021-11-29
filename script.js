let r=document.getElementById('rules');
let pop=document.getElementById('pop');
let cls=document.getElementById('close');

r.addEventListener('click', ()=>{
   pop.style.display="grid";
});

cls.addEventListener('click', ()=>{
    pop.style.display="none";
});

