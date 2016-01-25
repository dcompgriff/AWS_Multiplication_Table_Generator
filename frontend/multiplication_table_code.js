//Initialize the jquery code, and place it in the document ready function. 
//This ensures that none of the jquery code is called before the page fully loads. 
//Note: All if, while, and for statements need to have parenthesees around arguments!!!
var TABLE_LIMIT = 500;
var CONSTANT_TABLE_MULTIPLE_RANGE = 10;

$(document).ready(function(){

	//Load js functions. 
	function isNumber(num){ 
		return !isNaN(parseFloat(num));
	}

	function buildTable(htmlBaseElement, range){

		var currentTableId = "table0";
		var currentTable = $('<table class="table-hover multiplication_table"></table>');
		//Loop through and create the table.
		for(var row = 1; row<=range; row++){

			//Create a new row.
			var rowElement = $('<tr></tr>');
			for(var col = 1; col<=CONSTANT_TABLE_MULTIPLE_RANGE; col++){
				var cell = $('<td></td>').text(row * col);
				//Append the new cell to the current row element. 
				$(rowElement).append(cell);
			}

			//Add the new row to the current table.
			$(currentTable).append(rowElement);

			if(row % 10 == 0){
				//Add the table to the web-page, and create 
				// a new base table to fill. 
				$(htmlBaseElement).append(currentTable);
				currentTable = $('<table class="table-hover multiplication_table"></table>');
			}
		}

		//Add the constructed table to the main container.
		//Don't add empty table if the range is a multiple of ten.
		if(range % 10 != 0){
			$(htmlBaseElement).append(currentTable);
		}
	}

    //Generate the new multiplication table, based on the input.
    $("#multiplication_table_generate").click(function(){
		var myNumber = $("#multiplicand_input").val();
		if (isNumber(myNumber) == true){
			myNumber = parseFloat(myNumber);
			if (myNumber <= TABLE_LIMIT){
				$("#multiplication_table_clear").click();
				buildTable("#multiplication_table_display", myNumber);
			}else{
				alert("Input table size is too large.");
			}
		}else{
			alert("Not a numeric input!");
		}
		
    });

    //Remove all children of "multiplication_table_display".
    $("#multiplication_table_clear").click(function(){
    	$("#multiplication_table_display").empty();
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

