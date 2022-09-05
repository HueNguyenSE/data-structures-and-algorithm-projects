function convertToRoman(num) {
	let romanNum = '';

	//there is no Roman numeral for 0
	if (num === 0) {
		console.log('There is no Roman numeral for 0');
	}

	//break down num = num1 * 1000 + num3 * 100 + num5 * 10 + num6
	const num1 = Math.floor(num / 1000);
	const num2 = num % 1000;
	const num3 = Math.floor(num2 / 100);
	const num4 = num2 % 100;
	const num5 = Math.floor(num4 / 10);
	const num6 = num4 % 10;
	console.log(num1, num3, num5, num6);

	if (num1) {
		romanNum += 'M'.repeat(num1);
	}
	//console.log(romanNum);

	if (num3) {
		if (num3 === 9) {
			romanNum += 'CM';
		} else if (num3 >= 5) {
			romanNum += 'D' + 'C'.repeat(num3 - 5);
		} else if (num3 === 4) {
			romanNum += 'CD';
		} else {
			romanNum += 'C'.repeat(num3);
		}
	}
	//console.log(romanNum);

	if (num5) {
		if (num5 === 9) {
			romanNum += 'XC';
		} else if (num5 >= 5) {
			romanNum += 'L' + 'X'.repeat(num5 - 5);
		} else if (num5 === 4) {
			romanNum += 'XL';
		} else {
			romanNum += 'X'.repeat(num5);
		}
	}
	//console.log(romanNum);

	if (num6) {
		if (num6 === 9) {
			romanNum += 'IX';
		} else if (num6 >= 5) {
			romanNum += 'V' + 'I'.repeat(num6 - 5);
		} else if (num6 === 4) {
			romanNum += 'IV';
		} else {
			romanNum += 'I'.repeat(num6);
		}
	}
	//console.log(romanNum);
	return romanNum;
}

convertToRoman(0);
