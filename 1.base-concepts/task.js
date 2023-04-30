"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d;
	let x1;
	let x2;

	d = b ** 2 - (4 * a * c);

	if (d === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	} else if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}
	return arr;
}

let result = solveEquation(1, 4, 6);

console.log(result);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let bodyCredit, payMonth, finalyAmount;

	percent = (percent / 100) / 12;
	bodyCredit = amount - contribution;

	payMonth = bodyCredit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));

	if (countMonths > 12) {
		finalyAmount = +(payMonth * 12 * (countMonths / 12)).toFixed(2);
	} else {
		finalyAmount = +(payMonth * 12).toFixed(2);
	}

	return finalyAmount;
}

result = calculateTotalMortgage(10, 0, 10000, 36);
console.log(result);