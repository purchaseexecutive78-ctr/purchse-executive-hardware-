const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.animate([
{opacity:0,transform:"translateY(40px)"},
{opacity:1,transform:"translateY(0)"}
],{
duration:700,
fill:"forwards"
});
}
});
});

cards.forEach(card=>observer.observe(card));
