const btn = document.getElementById('btn')
const input=document.getElementById('input')

const getcolor = () => {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

btn.addEventListener('click',()=>{
    var c=getcolor()
    document.body.style.backgroundColor=c
    input.value=c
})

input.addEventListener('keydown',()=>{
    document.body.style.backgroundColor=getcolor()
})
input.addEventListener('keydown',()=>{
    // document.body.style.backgroundColor="black"
})