$(document).ready(function(){



$("input").keypress(function(event) {
	if (event.which == 13) {
		event.preventDefault();
	_afterEnterPress();	
}
});

function _afterEnterPress (){
//This is retrieving the input
var newtodoitem = $("input").val();
//This is clearing the input
$("input").val("");



}
})







