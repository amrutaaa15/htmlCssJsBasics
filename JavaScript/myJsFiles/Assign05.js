// String Opeartions 

// 1]Concat

let str="I love Javascript";

let newString=str.concat("and Web Development too");

console.log(newString);

// 2]Replace

let str1="This is a string";
let replaced=str1.replace("string","Amruta");
console.log(replaced);


// 3]upperCase

let up=str1.toUpperCase();
console.log(up);
console.log(str1.toLowerCase());
console.log(str1.toLocaleLowerCase());
console.log(str1.toLocaleUpperCase());

// 5]Trim 

let tr="       Hie     my name is   Amruta       ";
console.log(tr);
let trimmed=tr.trim();
console.log(trimmed);

console.log(tr.trimStart());
console.log(tr.trimEnd());
console.log(tr.trimRight());
console.log(tr.trimLeft());


// 6]endswith

let end="This is end string";
console.log(end.endsWith("g"));
console.log(end.endsWith("i"));


// 7]includes
let inn="Hie javascript";
console.log(inn.includes("t"))
console.log(inn.includes("k"))

// 8]italics
console.log(inn.italics())


// 9]padding 
let padd="5";
console.log(padd.padStart(4,"0"))
console.log(padd.padEnd(4,"0"))

// 10]charcodeat 
let ch="Hello";
console.log(ch.charCodeAt(0));

// 11]split 
let sp="javascript is scripting language";
let arr=sp.split(" ");
console.log(arr);


// 12]toString
let a=123;
console.log(typeof a);
let b=a.toString();
console.log(typeof b);

// 13] string using new
let string=new String("Hello string");
console.log(string)

// 14] startswith
let s="hey everone";
console.log(s.startsWith("h"));
console.log(s.startsWith("a"));

// 15]search
let se="let's search this";
console.log(se.search("search"));

let buttonClick=()=>{
    let sec=document.getElementById("sec");
    let list=document.createElement("ol");
    list.innerHTML=`<li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>`
    list.style.fontSize="21px";
    list.style.color="purple";
    list.style.backgroundColor="aqua";
    list.style.padding="21px";
    list.style.width="210px";
    list.style.border="2px solid black";

    // sec.append(list);
    let para=document.getElementById("para");
    sec.insertBefore(list,para);

}
