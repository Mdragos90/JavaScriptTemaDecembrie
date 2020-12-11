// 1.Functia Equals
function equals(a, b) {
	if (a === b) {
		return true;
	} else return false;
}

// 2.Functia Compare
function compare(a, b) {
	if (a < b) {
		return -1;
	} else if (a == b) {
		return 0;
	} else return 1;
}

// 3.Functia Max
function max(a, b) {
	if (a > b) {
		return a;
	} else return b;
}

// 4. Functia Min
function min(a, b) {
	if (a < b) {
		return a;
	} else return b;
}

//5. Functia Suma
function suma(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

//6. Functia Prim
function prim(n) {
	for (let i = 2; i <= n / 2; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

//7. functia sumaPrime
function sumaPrime(n) {
	let count = 0;
	let sum = 0;
	let i = 2;
	while (count < n) {
		if (prim(i)) {
			sum += i;
			count++;
		}
		i++;
	}
	return sum;
}

//8. Functia Invers
function invers(n) {
	let rezultat = 0;
	let cifra;
	while (n > 0) {
		cifra = n % 10;
		rezultat = rezultat * 10 + cifra;
		n = parseInt(n / 10);
	}
	return rezultat;
}



//10 Functia Contains
function contains(arr, x) {
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] == x) {
			return true;
		}
	}
	return false;
}

//11 Functia maxArray
function maxArray(arr) {
	let max = arr[0];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

//12 Functia sumMinMax
function sumMinMax(arr) {
	let max = arr[0];
	let min = arr[0];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min + max;
}

//13.Functia hasDuplicates

function hasDuplicates(array) {
    let valuesSoFar = Object.create(null);
    for (let i = 0; i < array.length; ++i) {
        let value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}


//14. Functia produsPozitive
function produsPozitive(arr) {
	let p = 1;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] > 0) {
			p = p * arr[i];
		}
	}
	return p;
}

//15. Functia palidrom
function palindrom(str) {
	let inversul = "";
	for (let i = str.length - 1; i >= 0; i--) {
		inversul += str[i];
	}
	if (str === inversul) {
		return true;
	} else return false;
}