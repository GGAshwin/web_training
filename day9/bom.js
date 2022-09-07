// console.log(window);
// console.log(this);
// console.log(document);
// console.log(document.body);
// console.log(document.head);
// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);
// console.log(document.URL);
// console.log(document.title);
// document.title ="kini"
// console.log(document.location);
// console.log(document.location.host);
// console.log(document.location.origin);
// console.log(document.location.protocol);

//create tag inside div
// let body=document.body
// let div=document.createElement("div")
// div.innerHTML=`<p>Hello</p>`
// body.appendChild(div)
// let table=document.getElementById("table")
// const tableEle=document.createElement("div")
// tableEle.style.border="1px solid"
// tableEle.style.background="#3333"
// tableEle.style.textAlign="center"
// tableEle.style.padding="20px"
// tableEle.innerHTML=`
// <table cellspacing="20" cellpadding="5px">
// <tr>
// <td>Name</td>
// <td><input type="text"></td>
// </tr>
// <tr>
// <td>Password</td>
// <td><input type="password" name="" id=""></td>
// </tr>
// <tr>
// <td><button>Login</button></td>
// <td><button>Reset</button></td>
// </tr>
// </table>`
// table.appendChild(tableEle)

const h1=document.getElementById('h1');
console.log(h1);
const p1=document.getElementsByClassName('p1')
console.log(p1);
console.log(typeof p1);
const h3=document.getElementsByTagName('h3');
console.log(h3);

const d=document.querySelector("#button")
// const d=document.querySelectorAll("button")
console.log(d);