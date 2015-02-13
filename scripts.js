$(document).ready(function(){

  /*** Event listeners (on keypress, on click, etc.) ***/
  $("input").keypress(function(event) {
  	if (event.which == 13) {
  		event.preventDefault();
    	_afterEnterPress();	
    }
  });

  // Place here any additional event listeners (Remember, SELECTOR.EVENT(functionsnction(){}))


  // I thought I might need a prompt to get the info, but I need more of an input instead of a prompt!!!

  /*** END Event Listeners (Do not place any beyond this point) ***/
  /*** Internal Functions (Functions to run when listener is triggered) ***/

  function _afterEnterPress (){
    //This is retrieving the input
    var newtodoitem = $("input").val();
    //This is clearing the input
    $("input").val("");
    
    // Push the info to the ul
  }
  
  // Place here any additional internal functions (with underscored titles, _afterLiClick for example)
  
  /*** END Internal Functions (do not put any code beyond this point) ***/
  
})






var greeting = function (name)

{
    console.log("bob");
}

SayHello = greeting ("bob");
