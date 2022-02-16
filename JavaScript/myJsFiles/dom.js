let showChilds=()=>{
    let parentNode=document.getElementById("bd");
    console.log(parentNode.children);
    console.log(parentNode.childNodes);
}

let deleteChild=()=>{
    let art=document.getElementById("art");
    let para=document.getElementById("para");
    art.removeChild(para);
}

let addChild=()=>{
    let art=document.getElementById("art");
    let para1=document.getElementById("para1");
    let head=document.createElement("h1");
    head.innerHTML="Hey Amruta here";
    art.insertBefore(head,para1);
}

let copyPaste=()=>{
    let para=document.getElementById("paraa");
    let para2=document.getElementById("paraa2");
    let para3=document.getElementById("paraa3");
    let content=para.innerHTML;
    let content2=para.innerText;
    para2.innerHTML=content;
    para3.innerText=content2;
    console.log(content,content2);
}

let show=()=>{
    let para=document.getElementById("para");
    console.log(para);
    let arr=document.getElementsByClassName("box");
    console.log(arr);
    let arr1=document.getElementsByName("didi");
    console.log(arr1);
    let arr2=document.getElementsByTagName("p");
    console.log(arr2);

}

let blur=()=>{
    let input1=document.getElementById("in1");
    let input2=document.getElementById("in2");
    input2.value=input1.value;
    
}
 let test1=()=>{
    let input2=document.getElementById("in2");
    input2.type="password";
 }
 let test2=()=>{
    let input2=document.getElementById("in2");
    input2.type="text";
 }