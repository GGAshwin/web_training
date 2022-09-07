const btn=document.querySelector("button")
const value=document.querySelector("#value");

window.onload=value.innerHTML=Math.floor(Math.random()*9999)

btn.addEventListener("click",()=>{
    value.innerHTML=Math.floor(Math.random()*9999)
})
