// NOTE *** STRING
// toUpperCase() = ignore upper and lowercase
strings.UpperCase();
// .toLowerCase() → in thường

// trim string
strings.trim();

// string + string
function strings(a, b) {
	return a.toString() + b.toString();
}
// string - string
strings.slice(indexStart, indexEnd);
// string - replace = hay thế một từ, hoặc câu (từ cần thay thế, từ thay thế)
var str = 'Visit Microsoft!';
var res = str.replace('Microsoft', 'Phambinh.net');
//Output: Visit Phambinh.net
// strings
// \' = single quote
// \" = double quote
// \\ = blackslash
// \n = newline
// \r = carriage return
// \t = tab
// \b = word boundary
// \f = form feed