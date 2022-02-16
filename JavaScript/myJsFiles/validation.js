let validation=()=>{
    let inp=document.getElementById("inp1");
    inp.style.border="2px solid green";
    let sp=document.getElementById("sp");
    sp.innerHTML=" ";
    
    if(inp.value===""){
        sp.innerHTML="<strong>Please fill out the field</strong>";
        sp.style.color="red";
        inp.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
}

let validation1=()=>{
    let inp2=document.getElementById("inp2");
    inp2.style.border="2px solid green";
    inp2.style.backgroundColor="yellow";
    let sp1=document.getElementById("sp1");
    sp1.innerHTML=" ";
    let age=inp2.value;
    if(age==""){
        sp1.innerHTML="<strong>Please fill out the field</strong>";
        inp2.style.backgroundColor="pink";
        sp1.style.color="red";
        inp2.style.border="2px solid red";
          return false;
    }
    else if(age<0 || age>100){
        sp1.innerHTML="<strong>Enter proper Age</strong>";
        inp2.style.border="2px solid green";
        inp2.style.backgroundColor="pink";
          return false;
    }
    else{
        return true;
    }

}

let validation2=()=>{
    let inp3=document.getElementById("inp3");
    inp3.style.border="2px solid green";
    inp3.style.backgroundColor="yellow";
    let sp2=document.getElementById("sp2");
    sp2.innerHTML=" ";
    let str=inp3.value;
    let ss=str.substring(str.indexOf("@")+1)
    if(str==""){
        sp2.innerHTML="<strong>Please fill out the field</strong>";
        inp3.style.backgroundColor="pink";
        sp2.style.color="red";
        inp3.style.border="2px solid red";
        return false;
    }
    else if(!str.includes("@") || ss===""){
        sp2.innerHTML="<strong>Enter proper mail</strong>";
        inp3.style.border="2px solid green";
        inp3.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }

}
let validation3=()=>{
    let inp4=document.getElementById("inp4");
    inp4.style.border="2px solid green";
    inp4.style.backgroundColor="yellow";
    let sp3=document.getElementById("sp3");
    let pass=inp4.value;
    console.log(pass);
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    sp3.innerHTML=" ";

    if(pass===""){
        sp3.innerHTML="<strong>Password cannot be empty</strong>";
        inp4.style.backgroundColor="pink";
        sp3.style.color="red";
        inp4.style.border="2px solid red";
        return false;
    }
    else if(pass.value<4 || pass.value>8){
        sp3.innerHTML="<strong>Length should be proper</strong>";
        inp4.style.backgroundColor="pink";
        sp3.style.color="red";
        inp4.style.border="2px solid red";   
        return false;   
    }
    else if(regexpress.test(pass)===false){
        sp3.innerHTML="<strong>Password should be proper</strong>";
        inp4.style.backgroundColor="pink";
        sp3.style.color="red";
        inp4.style.border="2px solid red";   
        return false;   
    }
    else{
        return true;
    }

}
let validation4=()=>{
    let inp5=document.getElementById("inp5");
    let inp4=document.getElementById("inp4");
    inp5.style.border="2px solid green";
    inp5.style.backgroundColor="yellow";
    let sp4=document.getElementById("sp4");
    let pass=inp4.value;
    let confirmPass=inp5.value;
    console.log(confirmPass);
    sp4.innerHTML=" ";

    if(confirmPass===""){
        sp4.innerHTML="<strong>Password cannot be empty</strong>";
        inp5.style.backgroundColor="pink";
        sp4.style.color="red";
        inp5.style.border="2px solid red";
        return false;
    }
    else if(pass!=confirmPass){
        sp4.innerHTML="<strong>password sholud match</strong>";
        inp5.style.backgroundColor="pink";
        sp4.style.color="red";
        inp5.style.border="2px solid red";    
        return false;  
    }
    else{
        return true;
    }
   
}
let toggle=()=>{
    let inp4=document.getElementById("inp4");
    let inp5=document.getElementById("inp5");
    let inp6=document.getElementById("inp6");

    if(inp6.checked){
        inp4.type="text";
        inp5.type="text";
    }
    else{
        inp4.type="password";
        inp5.type="password";
    }
}

let Val=()=>{
    let str=validation();
    let str1=validation1();
    let str2=validation2();
    let str3=validation3();
    let str4=validation3();

    if(str && str1 && str2 && str3 && str4){
       return true;
    }
    else{
        alert("Please submit all fields properly");
        return false;
    }

}