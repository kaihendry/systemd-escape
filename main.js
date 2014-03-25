function ascii(a) {
	//return a.charCodeAt(0);
	var code = a.charCodeAt(0);
	//var codeHex = code.toString(16).toUpperCase();
	var codeHex = "\\x" + code.toString(16);
	//while (codeHex.length < 4) {
	//	codeHex = "0" + codeHex;
	//}
	return codeHex;
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

		textinput = textinput.replace(/[^a-z0-9_:/\/]/gi, ascii);

		textinput = textinput.replace(/\//g, '-');

		textinput = textinput + '.device';

		$("#escaped").val(textinput);
	});

	$("#escaped").keyup(function() {
		var textinput = $('#escaped').val();
		if (textinput.slice( - 1) != '/') {
			textinput += '/';
		}
		if (textinput.slice(0) != '/') {
			textinput = '/' + textinput;
		}

		$("#path").val(textinput);
	});

});
