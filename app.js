const currList1 = document.querySelector('#currencyList1');
const currList2 = document.querySelector('#currencyList2');

const val1 = document.querySelector('#currencyValue1');
const val2 = document.querySelector('#currencyValue2');

const swapBtn = document.querySelector('#swap');
const swapSpan = document.querySelector('#info');

function calculateValue() {
	const currency1 = currList1.value;
	const currency2 = currList2.value;

	fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`).then((res) => res.json()).then((data) => {
		val2.value = data.rates[currency2] * val1.value;
		swapSpan.innerText = `1 ${currency1} = ${data.rates[currency2]} ${currency2}`;
	});
}

swapBtn.addEventListener('click', () => {
	let temp = currList1.value;
	currList1.value = currList2.value;
	currList2.value = temp;
	calculateValue();
});

currList1.addEventListener('change', () => {
	calculateValue();
});

val1.addEventListener('input', () => {
	calculateValue();
});

val2.addEventListener('input', () => {
	calculateValue();
});

currList2.addEventListener('change', () => {
	calculateValue();
});
