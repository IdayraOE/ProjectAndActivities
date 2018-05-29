var interval;

function prueba(){
 console.log(document.getElementById('time').checked);
 console.log(document.getElementById('rotate').checked);
}

function inicio(rotate){
	if (rotate==true) {
		$(".active").css({"display" : "flex","transform" : "rotate(360deg)","transition":"transform 10s", "margin-top":"0%","animation": "float 6s ease-in-out infinite"});
		//$(".container").css({"display" : "block","transform" : "rotate(360deg)","transition":"transform 30s", "margin-top":"40%"});
	}
	 //checkWord(letter);
}

function intervalF(letterPos,letterY,goal,letterLimit,letterHeight) {
	console.log(goal);
	
	console.log(letterHeight);
letterLimit.offsetTop=0; 
		                 

		               interval=setInterval(function(){ 

		                //letterPos=letterPos+letterY;

		                  $(".active").css({"top" : "+=10"});
		                  console.log(letterLimit.offsetTop);

		                    if(letterLimit.offsetTop+letterHeight+10>=goal){
		                        $(".correctDiv").html("<div id='correcto'>GAME OVER</div>"); 
		                         $(".correctDiv").css({"top":"400px","color":"#F85E22","left" : "36vw"});
		                        clearInterval(interval);
		                        console.log(interval);

		                      }/*else{
		                        
		                      }*/
		                     console.log(letterPos);
		                }, 1000);
}


function checkWord(letter) {
                  
                   var word=[];

                      for (var i = 0; i < letter.length; i++) {
                        word.push(letter[i]);
                        console.log(word);
                      }
                      var wordAnswer=[];
                      var wordCorrect=[];
                      $(document).keydown(function( event ) {
                        
                        var key=String.fromCharCode(event.which);
						if (word[wordAnswer.length] == key){
							$(".letter"+ wordAnswer.length).removeClass('active').css({'bottom':'10px', "top" : "80vh"})/*.css({'bottom': '10px'})*/;
							
							wordAnswer.push(key);
							$(".correctDiv").html("<div id='correcto'>Muy Bien</div>");
                              $(".correctDiv").css({"top":"400px","color":"#98E2B0","left" : "36vw"});
							
						}else{

                            $(".correctDiv").html("<div id='correcto'>Prueba otra vez</div>");
                            $(".correctDiv").css({"top":"400px","color":"#98E2B0","left" : "36vw"});
						}
                        console.log(wordAnswer);
           
                         if(JSON.stringify(word)==JSON.stringify(wordAnswer)){
                        console.log(interval);
                             clearInterval(interval);

                             console.log("hey");
                              $(".correctDiv").html("<div id='correcto'>CORRECTO</div>");
                              $(".correctDiv").css({"top":"400px","color":"#98E2B0","left" : "36vw"});
                              $(".active").html("");
                              $(".letter").html("");
                              $(".divGoal").html("");

                              wordAnswer=[];
							$(".active").css({"top" : "0vh"})/*.css({'bottom': '10px'})*/;
                             

							  //setTimeout(function(){window.location.reload()}, 1000);
                              start(words);
                              
                            }
                           
                     }); 


}

  function clickOnTheImage() { 
				$( "#img" ).off('click',clickOnTheImage);


		          console.log(random);
		            var letter = random.animal.split("");
		        
					var ratio = 100.0/letter.length;
					
		            for (var j = 0; j < letter.length; j++) {
		                $(".game").append("<div class='letter active letter"+j+"' id='letter"+j+"' data-value='"+letter[j]+"'>"+letter[j]+"</div>");
		                $(".letter"+j).css({"left" : ratio*j+'%', "animation-delay": Math.floor(Math.random() * 6) +'s'});
		                $(".game").append('<div class="divGoal divGoal'+j+'" id="divGoal"></div>');
		                $(".divGoal"+j).css({"left" : ratio*j+'%'});
		                   
		                var letterPos=10;
		                var letterY=10;
		                var goal=document.getElementById('divGoal').offsetTop;
		                var letterLimit=document.getElementById('letter'+j);
		                var letterHeight=document.getElementById('letter'+j).offsetHeight;
					}
					$(".letter, .divGoal").css({"width" : ratio +'%'});
		     


		        if (document.getElementById('rotate').checked) {
		                var rotate=document.getElementById('rotate').checked;
		                
		                 inicio(rotate);
		                 checkWord(letter);
		         }else{
		        	intervalF(letterPos,letterY,goal,letterLimit,letterHeight);
		        	checkWord(letter);
		       }
		}

