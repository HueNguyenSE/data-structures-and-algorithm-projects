function palindrome(str) {
	//lowercase
	let lowerCaseStr = str.toLowerCase();
	//remove all non-alphanumeric characters. Output: an array of non-alphanumeric characters
	const nonAlphaNumArr = lowerCaseStr.match(/[a-z0-9]/g);
	//the forward string
	const forwardString = nonAlphaNumArr.join();
	//the backward string
	const backwardString = nonAlphaNumArr.reverse().join();
	//compare forward and backward
	let result = forwardString === backwardString;

	return result;
}

console.log(palindrome('eye'));