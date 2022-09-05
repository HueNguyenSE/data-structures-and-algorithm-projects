function rot13(str) {
	//the alphabet
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	// identify the letter's position in the alphabet
	const encodedArr = str.split('');
	//console.log(encodedArr);
	//map the current letter nth with the corresponding letter (decoding)
	const decodedArr = encodedArr.map((e, i, arr) => {
		let decodedLetter;
		if (alphabet.indexOf(e) === -1) {
			//case: it's a space, not a letter
			decodedLetter = e;
		} else {
			const newIndex = (alphabet.indexOf(e) + 13) % alphabet.length;
			//console.log(newIndex);
			decodedLetter = alphabet[newIndex];
		}
		return decodedLetter;
	});

	//joi decoded letter into a string
	const decodedStr = decodedArr.reduce((str, e) => {
		return str.concat(e);
	}, '');

	return decodedStr;
}

rot13('SERR PBQR PNZC');
