//Initialize the jquery code, and place it in the document ready function. 
//This ensures that none of the jquery code is called before the page fully loads. 
//Note: All if, while, and for statements need to have parenthesees around arguments!!!
var TABLE_LIMIT = 30;

function isNumber(num){ 
	return !isNaN(parseFloat(num));
}

$(document).ready(function(){

	alert("Loaded.");

    //Generate the new multiplication table, based on the input.
    $("#multiplication_table_generate").click(function(){
		var myNumber = $("#multiplicand_input").val();
		if (isNumber(myNumber) == true){
			myNumber = parseFloat(myNumber);
			if (myNumber <= TABLE_LIMIT){
				alert(myNumber + ": was input.");
			}else{
				alert('Input table size is too large.')
			}
		}else{
			alert("Not a number input!");
		}
		
    });

    //Prevent anything from happening when user presses the enter key with a text form input.
    $("#multiplicand_input").keypress(function(event){
    	if(event.which == 13){
    		//Keep focus, and return false from the function. 
    		$(this).focus()
    		$("#multiplication_table_generate").click();
    		return false;
    	}
    });

});

