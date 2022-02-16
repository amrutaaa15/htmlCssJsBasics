$(document).ready(function(){
    
    $(".btn").click(function(){
        let label=$(".btn").html();
        if(label=="HIDE"){
        $("#box").hide();
        $(".btn").html("SHOW");
        }
    else{  
        $("#box").show();
        $(".btn").html("HIDE");
    }
});

});