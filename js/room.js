// if($(window).width()<=590){
// 	document.getElementById("room-name").innerHTML = "DDR";
// 	document.getElementById("room-name-two").innerHTML = "STR";
// 	document.getElementById("room-name-three").innerHTML = "DRB";
// 	document.getElementById("room-name-four").innerHTML = "TRB";
// }



window.onresize = function(event) {  
    if ($(window).width()<= 590){ 
       	document.getElementById("room-name").innerHTML = "DDR";
				document.getElementById("room-name-two").innerHTML = "STR";
				document.getElementById("room-name-three").innerHTML = "DRB";
				document.getElementById("room-name-four").innerHTML = "TRB";
    }  
 }

