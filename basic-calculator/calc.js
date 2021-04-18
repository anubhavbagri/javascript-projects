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