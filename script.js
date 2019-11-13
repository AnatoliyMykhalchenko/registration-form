document.addEventListener("DOMContentLoaded", onLoaded);

function onLoaded() {
	const form = document.getElementById('form');

	const name = document.getElementById('input-name');
	const email = document.getElementById('input-email');
	const telephone = document.getElementById('input-tel');
	const country = document.getElementById('input-country');

	const password = document.getElementById('input-password');
	const copiedPassword = document.getElementById('input-password-copy');

	const button = document.getElementById('button');


	function onSubmitForm(event) {
		event.preventDefault();
		if (!name.value || !email.value || !telephone.value || !country.value || !password.value || !copiedPassword.value) {

			button.nextElementSibling.classList.add('visible');
			button.nextElementSibling.classList.add('center');

		}
	}

	const onValidName = (event) => {
		const value = name.value;

		if (!value) showError(event)
		else hideError(event);
	};

	const onValidEmail = (event) => {
		event.preventDefault();
		const value = email.value;
		const part1 = value.split('@')[0];
		const part2 = value.split('@')[1]

		if (!value.includes('@') || !value || part1.includes(' ') || !part2.includes('.')) showError(event)
		else hideError(event)

	};


	const onValidCountry = (event) => {
		const value = country.value;
		if (!value) showError(event)
		else hideError(event);
	};

	const onValidPassword = (event) => {
		const value = password.value;

		if (value.length < 5) showError(event)
		else hideError(event);
	};

	const onValidCopiedPassword = (event) => {
		const value = copiedPassword.value;

		if (value !== password.value || !value) showError(event)
		else hideError(event);
	};

	const onValidTel = (event) => {
		const validSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ',', ')', '+', '-',' '];
		const phoneNumber = event.target.value;

		phoneNumber.split('').forEach(sym => {
			if (!validSymbols.includes(sym)) showError(event)
			else hideError(event)
		})

	};

	function showError(event) {
		event.target.nextElementSibling.classList.add('visible');

	};

	function hideError(event) {
		event.target.nextElementSibling.classList.remove('visible');

	};

	name.addEventListener('blur', onValidName);
	email.addEventListener('blur', onValidEmail);
	country.addEventListener('blur', onValidCountry);
	password.addEventListener('blur', onValidPassword);
	copiedPassword.addEventListener('blur', onValidCopiedPassword);
	telephone.addEventListener('blur', onValidTel);
	form.addEventListener('submit', onSubmitForm.bind(this));

}