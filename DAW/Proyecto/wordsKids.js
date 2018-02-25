function prueba(){
 console.log(document.getElementById('time').checked);
 console.log(document.getElementById('rotate').checked);
}

function inicio(rotate){
	if (rotate==true) {
		$(".container div").css({"display" : "flex","transform" : "rotate(360deg)","transition":"transform 10s", "margin-top":"40%"});
		//$(".container").css({"display" : "block","transform" : "rotate(360deg)","transition":"transform 30s", "margin-top":"40%"});
	}
}