$(document).ready(function() {
$("#content1").show();
$("#content2").hide();
$("#content3").hide();
$("#content4").hide();
$("#content5").hide();

$("#button1").click(function(){
$("#content1").show();
$("#content2").hide();
$("#content3").hide();
$("#content4").hide();
$("#content5").hide();
    
});

$("#button2").click(function(){
$("#content1").hide();
$("#content2").show();
$("#content3").hide();
$("#content4").hide();
$("#content5").hide();
    
});

$("#button3").click(function(){
$("#content1").hide();
$("#content2").hide();
$("#content3").show();
$("#content4").hide();
$("#content5").hide();
    
});

$("#button4").click(function(){
$("#content1").hide();
$("#content2").hide();
$("#content3").hide();
$("#content4").show();
$("#content5").hide();
    
});

$("#button5").click(function(){
$("#content1").hide();
$("#content2").hide();
$("#content3").hide();
$("#content4").hide();
$("#content5").show();
    
});


});