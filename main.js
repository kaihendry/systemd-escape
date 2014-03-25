function char2hex(a) {
	var code = a.charCodeAt(0);
	var codeHex = "\\x" + code.toString(16);
	return codeHex;
}

function hex2char(a) {
	var hex = a.replace(/^\\x/, '');
	var ascii = parseInt(hex, 16);
	return String.fromCharCode(ascii);
}

$(document).ready(function() {

	$("#path").keyup(function() {
		var textinput = $('#path').val();
		if (textinput.substring(0, 1) == '/') {
			textinput = textinput.substring(1);
		}

		if (textinput.slice( - 1) == '/') {
			textinput = textinput.substring(0, textinput.length - 1);
		}

		textinput = textinput.replace(/[^a-z0-9_:/\/]/gi, char2hex);

		textinput = textinput.replace(/\//g, '-');

		textinput = textinput + '.device';

		$("#escaped").val(textinput);
	});

	$("#escaped").keyup(function() {
		var textinput = $('#escaped').val();

		textinput = textinput.replace(/\.device$/, '');
		textinput = textinput.replace(/-/g, '/');
		textinput = textinput.replace(/\\x[a-f0-9]{2}/g, hex2char);

		if (textinput.slice(0) != '/') {
			textinput = '/' + textinput;
		}


		$("#path").val(textinput);
	});

});

