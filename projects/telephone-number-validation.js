function telephoneCheck(str) {
	//valid US phone number format
	//case 1: The number does not have parentheses
	/*^1? : it could be start with one or not.
    [ -]? : it could be followed by a space or dash after the first digit (optional)
    (?!\() : it MUST not be followed by "("" after that
    (\d{3}) : it MUST contain exact three digits
    (?!\)) : it MUST not be followed by ")" because it does not have the openness "("
    [ -]? : it could be followed by a space or dash (optional)
    (\d{3}) : next, it must contain exact 3 digits
    [ -]?: next, it could be followed by a space or dash (optional)
    (\d{4}) : next, it must have exact 4 digits
    (?![)\d]) : finally, it is not followed by any ) at the end or digit to prevent the number have more than 11 digits.
    */
	const validFormat1 =
		/^1?[ -]?(?!\()(?![0-1])(\d{3})(?!\))[ -]?(\d{3})[ -]?(\d{4})(?![)\d])/gm;
	let result = validFormat1.test(str);
	console.log(result);
	/*case 2: the number has parentheses
    If it have the open "(", it will be closed by ")", and vice versa.
    */
	const validFormat2 =
		/^1?[ -]?(\()(?![0-1])(\d{3})(\))[ -]?(\d{3})[ -]?(\d{4})(?![)\d])/gm;
	//For the rest unpassed the previous check, it will go through the second check.
	if (!result) {
		result = validFormat2.test(str);
	}
	return result;
}

console.log(telephoneCheck('5555555555'));
