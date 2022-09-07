// let arr=["ashwin",12,true,null,function(){},{}]
// console.log(arr);

// let a=[1,2,"apple",3,2,true, null,function(){}]

// console.log(a);
// let b=a.push(300,200)
// console.log(a);
// console.log(b);

// let b=a.pop()
// console.log(b);
// console.log(a);

// let b=a.shift()
// console.log(b);
// console.log(a);

// let b=a.unshift(69)
// console.log(b);
// console.log(a);

// let b=a.concat([7,8,9])
// console.log(b)
// console.log(a);

//pallindrome
// let a="malayalam"
// b=a.split("")
// b.reverse()
// b=b.join("")
// b=a.split("").reverse().join("")
// console.log(a==b?"pallindrome":"not pallindrome");

let a = [1, 2, 3, 4, 5, 6, 7]
// for(let i in a){
// for(let i of a){
//     console.log(i);
// }

// a.forEach((val,index) => {
//     console.log(`${val} ${index}`);
// });

// for(var i in a){
//     console.log(`${i} ${a[i]}`);
// }

// let b = a.filter(s => { return s+1 > 3 })
// console.log(b);

// let b=a.map(s=>{return s+1 > 3})
// console.log(b);

// a = [1, 2, 3]
// let b=a.reduce((acc,lv)=>{
//     return acc*lv
// },2)
// console.log(b);

// let emp={
//     name:"ashwin",
//     age:21,
//     place:"mlore"
// }
// console.log(emp);
// console.log(emp.name);
// emp.company="abc"
// console.log(emp.company);

//nested objects
let emp={
    name:"abc",
    id:12,
    address:()=>{
        (street="abc"),(pin=575001)
    }
}
console.log(emp);
// console.log(emp.place.street);
// emp.place.pin=575001
console.log(emp.address[0]);
console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));