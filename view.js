const youAreNumber = (latestAttribution) => {
	document.querySelector("#display-attribution")
	.innerHTML = `Vous êtes le numéro : <strong>${latestAttribution}</strong> dans la liste.`
	if (document.querySelector('#display-waiting-list')) {removeDiv()}
}

const removeDiv = () => {
	const childDiv = document.querySelector('#display-waiting-list')
	const parentDiv = document.querySelector('#bloc-client')
	parentDiv.removeChild(childDiv)
}

const updateQueueDisplayEverywhere = () => {
	introduceWaitingList(queue.last())
	generateWaitingList()
	displayCount() //compteur côté restaurateur
	//if (queue.first() >= 1) {displayNowCallingNumber(queue.first())}
}

const introduceWaitingList = (latestAttribution) => {
	const div = document.createElement('div')
	div.setAttribute('id', 'display-waiting-list')
	const generateInnerHTML = (latestAttribution) => {
		if (queue.get().filter(number => number === latestAttribution).length === 0) { // A changer quand plusieurs utilisateurs pour le compteur
			return `<p>C'est à vous !</p>`
		}
			else if (latestAttribution <= queue.first()) { // Fonction sort() à adapter au delà de 9 attributions !
				return `<p>Vous êtes le prochain sur la liste d'attente !</p>`
			}
			else {
				return `<p>Les numéros suivants sont avant vous :</p>
					<ul id="waiting-list"></ul>`
			}
		}
	div.innerHTML = generateInnerHTML(latestAttribution)
	document.querySelector('#bloc-client').appendChild(div)
}

const generateWaitingList = () => {
	queue.get().forEach(attribution => {
		if (queue.last() > 1) {
			if (attribution < queue.last()) {
				const li = document.createElement('li')
				li.innerHTML = `Numéro ${attribution}`
				document.querySelector("#waiting-list").appendChild(li)
			}
		}
	})
	return document.querySelector("#waiting-list")
}

const displayNowCallingNumber = (nowCallingNumber) => {
	const div = document.createElement('div')
	div.innerHTML = `C'est au tour du numéro ${nowCallingNumber}.`
	document.querySelector("#display-count").appendChild(div)
}

const displayCount = () => {
	document.querySelector("#display-count")
	.innerHTML = `${queue.get().length} personne(s) sont en attente.`
}
