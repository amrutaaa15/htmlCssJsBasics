
    let inp,sp,inp2, sp1, inp3,sp2,inp4,sp3,inp5,sp4,inp6,formNode;
$(()=>{
    inp=$("#inp1");
    sp=$("#sp");
    inp2=$("#inp2");
    sp1=$("#sp1");
    inp3=$("#inp3");
    sp2=$("#sp2");
    inp4=$("#inp4");
    sp3=$("#sp3");
    inp5=$("#inp5");
    sp4=$("#sp4");
    inp6=$("#inp6");
    formNode=$("#formNode");

    inp.blur(()=>{
        validation()
    })
    inp2.blur(()=>{
        validation1();
    })
    inp3.blur(()=>{
        validation2();
    })
    inp4.blur(()=>{
        validation3();
    })
    inp5.blur(()=>{
        validation4();
    })
    inp6.change(()=>{
        toggle();
    })

    formNode.submit(()=>Vall())
});


let validation=()=>{
    inp.css({border:"2px solid green"});
    sp.html(" ");
    
    if(inp.val()===""){
        sp.html("<strong>Please fill out the field</strong>");
        sp.css({color:"red"})
        inp.css({border:"2px solid red"})
        return false;
    }
    else{
        return true;
    }
}

let validation1=()=>{
    inp2.css({border:"2px solid green",backgroundColor:"yellow"});
    sp1.html(" ");

    
    let age=inp2.val();
    if(age==""){
        sp1.html("<strong>Please fill out the field</strong>");
        sp1.css({color:"red"})
        inp2.css({border:"2px solid red",backgroundColor:'pink'})
        return false;
    }
    else if(age<0 || age>100){
        sp1.html("<strong>Enter proper Age</strong>");
        sp2.css({color:"red"})
        inp2.css({border:"2px solid red",backgroundColor:"pink"})
          return false;
    }
    else{
        return true;
    }

}

let validation2=()=>{
    inp3.css({border:"2px solid green",backgroundColor:"yellow"});
    sp2.html(" ");

    let str=inp3.val();
    let ss=str.substring(str.indexOf("@")+1)
    if(str==""){
        sp2.html("<strong>Please fill out the field</strong>");
        sp2.css({color:"red"})
        inp3.css({border:"2px solid red",backgroundColor:'pink'})
        return false;

    }
    else if(!str.includes("@") || ss===""){
        sp2.html("<strong>Enter proper mail</strong>");
        sp2.css({color:"red"})
        inp3.css({border:"2px solid red",backgroundColor:'pink'})
        return false;
    }
    else{
        return true;
    }

}
let validation3=()=>{
    inp4.css({border:"2px solid green",backgroundColor:"yellow"});
    sp3.html(" ");

    let pass=inp4.val();
    console.log(pass);
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if(pass===""){
        sp3.html("<strong>Password cannot be empty</strong>");
        sp3.css({color:"red"})
        inp4.css({border:"2px solid red",backgroundColor:'pink'})
        return false;
    }
    else if(pass<4 || pass>8){
        sp3.html("<strong>Length should be proper</strong>");
        sp3.css({color:"red"})
        inp4.css({border:"2px solid red",backgroundColor:'pink'})
        return false;   
    }
    else if(regexpress.test(pass)===false){
        sp3.html("<strong>Password should be proper</strong>");
        sp3.css({color:"red"})
        inp4.css({border:"2px solid red",backgroundColor:'pink'})   
        return false;   
    }
    else{
        return true;
    }

}
let validation4=()=>{
    inp5.css({border:"2px solid green",backgroundColor:"yellow"});
    sp4.html(" ");

    let pass=inp4.val();
    let confirmPass=inp5.val();
    console.log(confirmPass);

    if(confirmPass===""){
        sp4.html("<strong>Password cannot be empty</strong>");
        sp4.css({color:"red"})
        inp5.css({border:"2px solid red",backgroundColor:'pink'})
        return false;
    }
    else if(pass!=confirmPass){
        sp4.html("<strong>password sholud match</strong>");
        sp4.css({color:"red"})
        inp5.css({border:"2px solid red",backgroundColor:'pink'})
        return false;
    }
    else{
        return true;
    }
   
}
let toggle=()=>{
   
    if(inp6.prop('checked')){
        inp4.attr("type","text");
        inp5.attr("type","text");
    }
    else{
        inp4.attr("type","password");
        inp5.attr("type","password");
    }
}

let Vall=()=>{
    let str=validation();
    let str1=validation1();
    let str2=validation2();
    let str3=validation3();
    let str4=validation4();

    if(str && str1 && str2 && str3 && str4){
       return true;
    }
    else{
        alert("Please submit all fields properly");
        return false;
    }

}