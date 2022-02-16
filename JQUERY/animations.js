    $(()=>{
        $("h1").mouseover(()=>{
            $("img").animate({
                width:'600px',
                height:'600px',
                borderWidth:'12px',
                borderColor:"red" //wont work
            },6000,()=> alert("Well Done Amruta animation completed"))
        })

      $(".para").css({
        width:'600px',
        height:'600px',
        borderWidth:'12px',
        borderColor:"hotpink",
        borderStyle:"dotted"
        
      })
    });

