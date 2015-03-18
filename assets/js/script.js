

var $amex = $('#amex'),
	$discover = $('#discover'),
	$visa = $('#visa'),
	$mastercard = $('#mastercard');
	$csv = $('.csv');


$(function() {
    $('#card-number').validateCreditCard(function(result) {
        console.log(result.card_type.name);

   		if (result.card_type.name === "amex") {
   			 $amex.prop('checked', true);
   		}

    	else if (result.card_type.name === "visa"){
    		$visa.prop('checked', true);
    	}

    	else if (result.card_type.name === "discover") {
    		$discover.prop('checked', true);
    	}

    	else if (result.card_type.name === "mastercard") {
    		$mastercard.prop('checked', true);
    	}

    	changeCSV();
	});

	function changeCSV() {
		if (amex.prop('checked' === true)) {
			//csv.addClass('amex');
			console.log("amex is checked")
		}  
		else {
			csv.removeClass('amex');
		}
	};

//	function changeCSV() {
//		if (amex.is(':checked')) {
			//csv.addClass('amex');
//			console.log("amex is checked")
//		}  
//		else {
//			csv.removeClass('amex');
//		}
//	};
//Modernizr.load ({
//			test: Modernizr.input.required,
//			yep: console.log('required works'),
//			nope: ['vendor/jquery.validate.min.js'],

//			complete: function () {
//				if (!Modernizr.input.required) {
//					$('form').each(function() {
//						$(this).validate();
//					});
//				}
//			}


//		});

});

		


//});




