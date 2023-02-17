// Lui Olea îi plac numerele palindrom. Un număr este considerat palindrom dacă răsturnatul 
// său (citit de la dreapta la stânga) este egal cu originalul (Exemplu: numărul 12321 este palindrom).

// Cerințe:
// Să se determine dacă o variabilă conține o valoare palindrom.
// Afișați în consolă numărul și un mesaj dacă acesta este sau nu palindrom.

function isPalindrom (num) {
	let initialNumber = num;
	let finalNum = 0;
	while (num != 0) {
		finalNum = num % 10 + finalNum * 10;
		num = Math.floor(num / 10);
	}
	if (initialNumber === finalNum) {
		console.log('este un palindrom ' + initialNumber);
	} else {
		console.log(`${initialNumber} nu este palindorm`);
	}
}
isPalindrom(12321);
isPalindrom(123131);