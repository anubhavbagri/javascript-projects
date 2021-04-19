var inputLabel = document.getElementById('inputLabel');
var result;

function pushBtn(obj) {

	var pushed = obj.innerHTML;

	if (pushed == '=') {
		// Calculate
		result = eval(inputLabel.innerHTML);
		inputLabel.innerHTML = result;

	} else if (pushed == 'AC') {
		// All Clear
		inputLabel.innerHTML = '0';

	} else if (pushed == '%') {
		// Percentage
		result = inputLabel.innerHTML / '100';
		inputLabel.innerHTML = result;

	} else if (pushed == '+/-') {
		// Change sign
		inputLabel.innerHTML *= '-1';	//Type coersion OP

		/*
		//SHIT I WAS TRYNA DO
		var str = inputLabel.innerHTML;
		console.log(str.charAt(0));
		if (str.charAt(0) == '-') {
			inputLabel.innerHTML.replace("-", "+");
		}
		else
			inputLabel.innerHTML = '-' + inputLabel.innerHTML;
		*/

	} else {
		if (inputLabel.innerHTML == '0') {
			inputLabel.innerHTML = pushed;

		} else if (inputLabel.innerHTML == result && Number.isInteger(parseInt(pushed))) {
			inputLabel.innerHTML = pushed;
		}
		else {
			inputLabel.innerHTML += pushed;
		}
	}
}