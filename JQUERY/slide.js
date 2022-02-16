$(document).ready(function(){
    
    $(".btn").click(function(){
        let label=$(".btn").html();
        if(label=="SLIDE UP"){
        $("#box").slideUp(6000, function() {
            $(".btn").html("SLIDE DOWN");
        });
        }
    else{  
        $("#box").slideDown(6000,function() {
            $(".btn").html("SLIDE UP");  
        });
    }
});
    $(".toggleBtn").click(()=>{
        $("#box1").slideToggle(3000);
    });

});