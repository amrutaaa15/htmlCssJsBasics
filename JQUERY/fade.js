$(document).ready(function(){
    
    $(".btn").click(function(){
        let label=$(".btn").html();
        if(label=="FADE OUT"){
        $("#box").fadeOut(6000, function() {
            $(".btn").html("FADE IN");
        });
        }
    else{  
        $("#box").fadeIn(6000,function() {
            $(".btn").html("FADE OUT");  
        });
    }
});
    $(".toggleBtn").click(()=>{
        $("#box1").fadeToggle(3000);
    });

});