// named function
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20)

// Anonymous function
// var a=function (a,b){
//     console.log(a+b);
// }
// a(10,20);

// Arrow Funtion
// const a=()=>{
//     console.log("Arrow Funtion");
// }
// a()

// Nested Funtion
// function f1(){
//     console.log("Functon 1");
//     function f2(){
//         console.log("Functon 2");
//     }
//     return f2;
// }
// f1()()

// console.log("Start");
// var a=10;
// function x(){
//     var b=20
//     var c=30
//     function y(){
//         var d=40
//         console.log(b);
//         console.log(c);
//     }
//     return y
// }
// x()()
// console.log("End");

console.log("End");
let a=10,b=20;
function x(){
    var c=10;
    console.log(a);
    console.log(b);
    function y() {
        console.log("child");
    }
    return y;
}
x()()