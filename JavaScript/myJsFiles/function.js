// // functions
// var p=10;

// function add(){
// var a=23,b=56;
//     console.log(p);
//     console.log("addition is "+ (a+b));
//     document.write(`addition of ${a} and ${b} is ${a+b}`);

// }

// add();
// function sub(){
//     console.log(p)
// }
// sub();

// function multi(no1,no2){

//     return no1*no2;
// }
// var result=multi(5,3);
// console.log(result);

// console.log(multi(3,3))

// // scope 
// for(var i=1;i>=5;i++){
//     console.log(i);
// }
// console.log("outside" +i) //accessible (function level scope)

// for(let j=1;j<=5;j++){
//     console.log(j);
// }

// // outside(" "+ j) //no access block level scope

// // anonymous function 

// const multip=function(a,b){
//     return a*b;
// }

// console.log(multip(3,3));

// arrow functions 

function didi() {
    console.log("didi");
}
didi();
let arrowDidi = () => {
    console.log("arrowDidi");
}
arrowDidi();

// dont write return in single line  but you can write console in single line

let returnDidi = (p1, p2) => p1 + p2;
let consoleDidi = (p1, p2) => console.log(p1 + p2);

console.log(returnDidi(3, 3));
console.log(consoleDidi(3, 3));

// if arrowfuction has single parameter then brackets are optioal 

let noBrackets = s => console.log(s);
noBrackets(33);
