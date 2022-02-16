$(document).ready(function(){
    
    $(".btn").click(function(){
        let label=$(".btn").html();
        if(label=="HIDE"){
        $("#box").hide(6000, function() {
            $(".btn").html("SHOW");
        });
        }
    else{  
        $("#box").show(6000,function() {
            $(".btn").html("HIDE");  
        });
    }
});
    $(".toggleBtn").click(()=>{
        $("#box1").toggle(3000);
    });

});