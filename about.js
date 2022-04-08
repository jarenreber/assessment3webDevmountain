console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted')
}

const imageComp = event => {
	event.preventDefault()

	alert(`You're the best`)
}

let compliment = document.querySelector('img#homeHero')

compliment.addEventListener('mouseover', imageComp)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


