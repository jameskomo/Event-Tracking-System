$(function(){
    "use strict";
    setInterval(function(){
       animate();
    }, 1);
 });
 
 function animate() {
    var d = new Date();
    var s_angle = ( 360 / 60 ) * d.getSeconds();
    var h_angle = ( 360 / 12 ) * d.getHours();
    var m_angle = ( 360 / 60 ) * d.getMinutes();
    
    $("#seconds").css('transform', 'rotate('+s_angle+'deg)');
    $("#minutes").css('transform', 'rotate('+m_angle+'deg)');
    $("#hours").css('transform', 'rotate('+h_angle+'deg)');
 }