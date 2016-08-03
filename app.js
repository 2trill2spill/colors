
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function pickColor() {
	var color = "";

	switch(randomNumber(0, 3)) {
		case 0:
		   color = "BLUE";
		   break;
		case 1:
		   color = "GREEN";
		   break;

		case 2:
		   color = "YELLOW";
		   break;
		case 3:
		   color = "RED";
		   break;
	}

	return color
}

$(document).ready(function() {

    $('#result').val("START");
    $('#color').val("BLUE");

    $('#block1').data("color", "BLUE")
    $('#block2').data("color", "GREEN")
    $('#block3').data("color", "YELLOW")
    $('#block4').data("color", "RED")


	$('#block1').on('click', function() {
		var color = $('#block1').data("color")
        if(color == $('#color').val()) {
        	$('#result').val("CORRECT!");
        	$('#color').val(pickColor());

        } else {
        	$('#result').val("WRONG!");
        }
	});

	$('#block2').on('click', function() {
		var color = $('#block2').data("color")
        if(color == $('#color').val()) {
        	$('#result').val("CORRECT!");
        	$('#color').val(pickColor());

        } else {
        	$('#result').val("WRONG!");
        }
		
	});

	$('#block3').on('click', function() {
		var color = $('#block3').data("color")
        if(color == $('#color').val()) {
        	$('#result').val("CORRECT!");
        	$('#color').val(pickColor());

        } else {
        	$('#result').val("WRONG!");
        }
		
	});

	$('#block4').on('click', function() {
		var color = $('#block4').data("color")
        if(color == $('#color').val()) {
        	$('#result').val("CORRECT!");
        	$('#color').val(pickColor());

        } else {
        	$('#result').val("WRONG!");
        }
		
	});
});