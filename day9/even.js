let a=document.getElementById("btn1")
a.addEventListener("mouseover",()=>{
    document.body.style.backgroundColor = "red"
})
a.addEventListener("mouseout",()=>{
    document.body.style.backgroundColor = "white"
})

let b=document.getElementById("btn2")
b.addEventListener("mouseover",()=>{
    document.body.style.backgroundColor = "green"
})
b.addEventListener("mouseout",()=>{
    document.body.style.backgroundColor = "white"
})

let c=document.getElementById("btn3")
c.addEventListener("mouseover",()=>{
    document.body.style.backgroundColor = "blue"
})
c.addEventListener("mouseout",()=>{
    document.body.style.backgroundColor = "white"
})