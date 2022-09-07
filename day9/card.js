const body=document.body
const sec=document.createElement('section')
sec.style.display="flex"
sec.style.justifyContent="space-around"
sec.style.background="#3333"
body.appendChild(sec)
body.appendChild(sec)
// const div=document.createElement('div')
for (let index = 0; index < 3; index++) {
    sec.innerHTML+=`
    <div class="card">
<div>
<p>
    Name : Ashwin
</p>
<p>
    Job : Job
</p>
<p>
    Company : Besla
</p>
<img src="../images/twitter.png" alt="" height="100">
</div>
</div>
`   
}
for (let index = 0; index < 3; index++) {
    
    document.getElementsByClassName('card')[index].style.backgroundColor ="red"
    document.getElementsByClassName('card')[index].style.padding ="20px"
    document.getElementsByClassName('card')[index].style.borderRadius ="10px"
}