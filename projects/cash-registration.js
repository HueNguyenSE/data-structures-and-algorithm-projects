//given unit amounts of every currency unit listed from the highest $ to the smallest $
const currUnits = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
const len = currUnits.length;
//a function to round a number to two digits
function roundTwoDecimals(num) {
	const roundedNum = Number(num.toFixed(2));
	return roundedNum;
}
//console.log(roundTwoDecimals(2.4567))

//a function to round a number 0 digit (int)
function roundToInt(num) {
	const int = Number(num.toFixed(0));
	return int;
}
//console.log(roundInt(1.000000000000000001))

//get the total amount of fund
function getFund(cid) {
	let fund = 0;
	for (let arr of cid) {
		fund += arr[1];
		fund = roundTwoDecimals(fund);
	}
	return fund;
}
//console.log(getFund([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//get available number of each type of coin/bill in the draw
function getFundBreakdown(cid) {
	const fundBreakdown = [];
	for (let i = 0; i < len; i++) {
		fundBreakdown.push(roundToInt(cid[i][1] / currUnits[i]));
	}
	return fundBreakdown;
}
//console.log(getFundBreakdown([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20]]))
//get change details listed in the descending order of currency unit (one hundred > twenty > ...> nickle > penny)
function getChangeDetails(changeDue, cid) {
	let changeDetails = [];
	//loop through cash-in-draw from the biggest bill through the smallest coin
	for (let i = len - 1; i >= 0; i--) {
		let unit = currUnits[i];
		//console.log(unit)
		let availableNum = getFundBreakdown(cid)[i];
		//console.log(availableNum)
		let num = Math.floor(changeDue / unit);
		//console.log(num)
		let amount = 0; //amount in each currency for this change

		if (num < availableNum) {
			amount = unit * num;
		} else {
			amount = unit * availableNum;
		}
		changeDetails.unshift(amount);
		changeDue = roundTwoDecimals(changeDue - amount);
	}
	//the loop ends, if the changeDue is greater than 0, that means you cannot return the exact change.
	if (changeDue > 0) {
		for (let i = 0; i < len; i++) {
			changeDetails = [];
		}
	}
	console.log(changeDetails);

	//display change in 2D array
	const change2DArray = [];
	if (changeDetails.length > 0) {
		//don't map if the string is empty
		for (let i = 0; i < len; i++) {
			if (changeDetails[i] > 0) {
				//ignore mapping for the value is equal to 0
				change2DArray.push([cid[i][0], changeDetails[i]]);
			}
		}
	}
	//sort in descending order by the amount
	change2DArray.sort(function (a, b) {
		return b[1] - a[1];
	});
	return change2DArray;
}

//main function to get the final result
function checkCashRegister(price, cash, cid) {
	let result = {
		status: '',
		change: [],
	};
	//get the change due
	let changeDue = roundTwoDecimals(cash - price);
	console.log('change due is ' + changeDue);

	//compare the change due with the available funds
	let dif = roundTwoDecimals(getFund(cid) - changeDue);
	console.log(`dif is: ${dif}`);

	if (dif < 0) {
		//case 1: insufficient fund which is less than the change due
		result.status = 'INSUFFICIENT_FUNDS';
	} else if (dif === 0) {
		//case 2: sufficient fund which is exactly equal to the change due
		result.status = 'CLOSED';
		result.change = cid; //show the original cash-in-draw
	} else {
		//case 3: fund is greater than the change due && can return the exact change
		result.status = 'OPEN';
		result.change = getChangeDetails(changeDue, cid);
	}

	if (getChangeDetails(changeDue, cid).length === 0) {
		//case 4: fund which is greater than the change due, however cannot return the exact change due.
		result.status = 'INSUFFICIENT_FUNDS';
	}
	//console.log(result);
	return result;
}

const result = checkCashRegister(3.26, 100, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100],
]);
console.log(result);
