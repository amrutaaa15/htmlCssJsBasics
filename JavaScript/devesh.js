let nameNode=document.getElementById("name");
let errorNode1=document.getElementById("error1");
let ageNode=document.getElementById("age");
let errorNode2=document.getElementById("error2");
document.getElementById("");
document.getElementById("");
document.getElementById("");

function validate1(){
    errorNode1.innerHTML="";
    nameNode.style.border="2px green solid";
    nameNode.style.backgroundColor="yellow";
    let name=nameNode.value;
    if(name===""){
        errorNode1.innerHTML="<b>this field is requred</b>";
        nameNode.style.border="2px red solid";
        nameNode.style.backgroundColor='pink';
        return false;
    } 
    else true;
}

function validate2(){
    errorNode2.innerHTML="";
    ageNode.style.border="2px green solid";
    ageNode.style.backgroundColor='yellow';
    let age=ageNode.value;
    if(age===""){
        errorNode2.innerHTML="<b>this field is required</b>";
        ageNode.style.border="2px red solid";
        ageNode.style.backgroundColor='pink';
        return false;
        

    }
    else if(age<0 || age>100){
        errorNode2.innerHTML="<b>age should be in range of 0 to 100</b>";
        ageNode.style.border="2px red solid";
        ageNode.style.backgroundColor='pink';
        return false;

    }
    else true;
}

let mailNode=document.getElementById("email");
let errorNode3=document.getElementById("error3");

function validate3(){
    errorNode3.innerHTML="";
    mailNode.style.border="2px green solid";
    mailNode.style.backgroundColor='yellow';
    let email=mailNode.value;
    if(email===""){
        errorNode3.innerHTML="<b>this field is required</b>";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor='pink';
        return false;
        

    }
    else if(!email.includes("@")){
        errorNode3.innerHTML="<b>invalid mail</b>";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor='pink';
        return false;

    }
    else true;
}

let passNode=document.getElementById("password");
let errorNode4=document.getElementById("error4");

function validate4(){
    errorNode4.innerHTML=" ";
    passNode.style.border="2px green solid";
    passNode.style.backgroundColor='yellow';
    let pass=passNode.value;
    console.log(pass);
    let regexpress=new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])");

    if(pass===""){
        errorNode4.innerHTML="<b>this field is required</b>";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor='pink';
        return false;
        
    }
    else if(pass.length<3 || pass.length>8){
        errorNode4.innerHTML="<b>password should have min 3 and max 8 characters </b>";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor='pink';
        return false;
    }
    else if(regexpress.test(pass)===false){
        errorNode4.innerHTML="<b>password should be alphanumeric with atleast onesymbol from '!,@,#,%,$,^,&,*'</b>";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor='pink';
        return false;

    }
    else true;
}

let conpassNode=document.getElementById("conpassword");
let errorNode5=document.getElementById("error4");

function validate5(){
    errorNode5.innerHTML="";
    conpassNode.style.border="2px green solid";
    conpassNode.style.backgroundColor='yellow';
    let conpass=conpassNode.value;
    let pass=passNode.value;
    

    if(conpass===""){
        errorNode5.innerHTML="<b>this field is required</b>";
        conpassNode.style.border="2px red solid";
        conpassNode.style.backgroundColor='pink';
        return false
        

    }
    else if(pass!=conpass){
        errorNode5.innerHTML="<b>password should be matched</b>";
        conpassNode.style.border="2px red solid";
        conpassNode.style.backgroundColor='pink';
        return false;


    }
    else true;
    
}

let checkNode=document.getElementById("showpass");
function showPass(){
    if(checkNode.checked){
        passNode.type="text";
        conpassNode.type="text";

    }
    else{
        passNode.type="password";
        conpassNode.type="password";
    }
    
}

function validateForm(){
    let st1=validate1();
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
    let st5=validate5();

    if (st1 && st2 && st3 && st4 && st5){
        return true;
    }
    else{
        alert("Devesh Submit proper information");
        return false;
    }
}