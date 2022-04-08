const color = event => {
	event.preventDefault()

	alert(`Sunset red!`)
}

const place = event => {
	event.preventDefault()

	alert(`Anywhere with large cliffs and valleys.`)
}

const ritual = event => {
	event.preventDefault()

	alert(`Holding my baby boy before I head off for work.`)
}

let favColor = document.querySelector('button#color')
favColor.addEventListener('click', color)

let favPlace = document.querySelector('button#place')
favPlace.addEventListener('click', place)

let favRitual = document.querySelector('button#ritual')
favRitual.addEventListener('click', ritual)