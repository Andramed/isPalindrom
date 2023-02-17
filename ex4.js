// Olea s-a entuziasmat și mai tare cu numerele palindrom și vrea să țină o evidență
// cu acestea. Ea s-a gândit să facă o listă cu toate numerele palindrom până la
// 10000 ca să îi fie mai ușor să le găsească mai târziu.
// Cerințe:
// 1. Folosiți implementarea anterioară pentru palindrom și includeți-o într-o
// funcție
// 2. Folosiți funcția pentru a verifica numerele care sunt palindrom
// 3. Creați un array care să conțină numerele palindrom.
// 4. Afișați numerele din array în consolă.
// else {
	//	console.log(`${initialNumber} nu este palindorm`);

function isPalindrom (num) {
	let initialNumber = num;
	let finalNum = 0;
	while (num != 0) {
		finalNum = num % 10 + finalNum * 10;
		num = Math.floor(num / 10);
	}
	if (initialNumber === finalNum) {
		return true
	}
	return false
	 
}


for (let i =  0; i <= 200; i++ ) {
	if (isPalindrom(i)) {
		console.log(i);
	}
}