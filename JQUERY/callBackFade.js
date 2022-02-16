// $(document).ready(function(){
    
//     $(".btn").click(function(){
//         let label=$(".btn").html();
//         if(label=="FADE OUT"){
//         $("div.fade").fadeOut(6000,()=> {
//             $("img.fade").fadeOut(5000,()=>{
//                 $("ol.fade").fadeOut(3000)
//             });
//         });
//         }
//     else{  
//         $("div.fade").fadeIn(6000,()=> {
//             $("img.fade").fadeIn(5000,()=>{
//                 $("ol.fade").fadeIn(3000)
//             });
//     })
//     }
// });
//     });

    // by arrow functions 
    $(()=>{
        $(".btn").click(()=>{
            let label=$(".btn").html();
            if(label=="FADE OUT"){
                $("div.fade").fadeOut(6000,()=> {
                    $("img.fade").fadeOut(5000,()=>{
                        $("ol.fade").fadeOut(3000,()=>{
                            $(".btn").html("FADE IN");
                        });
                    });
                });
                }

                else{
                    $("div.fade").fadeIn(6000,()=> {
                        $("img.fade").fadeIn(5000,()=>{
                            $("ol.fade").fadeIn(3000,()=>{
                                $(".btn").html("FADE OUT");
                            });
                        });
                });
                }
        });

        $(".chainBtn").click(()=>{
            $(".fade").hide(1000).show(1000).fadeOut(1000).fadeIn(1000).slideUp(1000).slideDown(1000)
        })
    });

