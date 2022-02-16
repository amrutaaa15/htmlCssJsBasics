// some advance functions of arrays 

let salaries=[1200000,350000,6500000,908700,78000];

document.write("<br>direct without loop <br>");
document.write(salaries)

document.write("<br> with normal for loop <br>");

for(let i=0;i<salaries.length;i++){
    document.write(salaries[i]+" ")
}

document.write("<br> with for of loop <br>");

for(let salary of salaries){
    document.write(salary+":::" );
}

document.write("<br> with  forEach loop <br>");

salaries.forEach(function (element,index, arr) {
    document.write(element+"|||"+index+"||| "+ arr+ "<br>");
})

// arrow function 
document.write("<br> with  forEach loop arrow <br>");
salaries.forEach(element=>document.write(element+" --- "))

// filter 
document.write("<br> with  Filter <br>");
let newArray=salaries.filter(ele=>ele>100000);
document.write(newArray)

// find 
document.write("<br> with  Map <br>");
let e=salaries.find(ele=>ele>3000000);
document.write(e);

// array initilization with object

let food=new Array("pizza","shengule","mom's chicken","chinese");
console.log(food.length)
let locations=new Array(3);
console.log(locations.length)

for(let i=0;i<locations.length;i++){
    locations[i]=window.prompt("tell your location");
}
console.log(locations);

// some opeartions on array 
let last="ghansoli";
let first="turbhe";
locations.push(last);
console.log(locations)
locations.unshift(first);
console.log(locations);

locations.pop();
console.log(locations);
 
locations.shift();
console.log(locations)

