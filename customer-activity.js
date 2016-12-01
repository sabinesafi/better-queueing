lAttribution.save(0)
queue.save([])

const newAttribution = () => {
	growAttributionCount()
	growWaitingList(lAttribution.get())
	document.querySelector("#display-attribution")
	.innerHTML = `Vous êtes le numéro : <strong>${lAttribution.get()}</strong> dans la liste.`
	if (lAttribution.get() >= 2) {removeDiv()}
	updateQueueDisplayEverywhere()
}


const growAttributionCount = () => {
	const newAttribution = lAttribution.get() +1
	lAttribution.save(newAttribution)
}

const growWaitingList = (latestAttribution) => {
	let newQueue = queue.get()
	newQueue.push(latestAttribution)
	queue.save(newQueue)
}

const removeDiv = () => {
	const childDiv = document.querySelector('#display-waiting-list')
	const parentDiv = document.querySelector('#bloc-client')
	parentDiv.removeChild(childDiv)
}
const updateQueueDisplayEverywhere = () => {
	introduceWaitingList(lAttribution.get())
	generateWaitingList()
	displayCount() //compteur côté restaurateur
	if (nowCallingNumber >= 1) {displayNowCallingNumber(nowCallingNumber)}
}

const introduceWaitingList = (latestAttribution) => {
	const div = document.createElement('div')
	div.setAttribute('id', 'display-waiting-list')
	const generateInnerHTML = (latestAttribution) => {
		if (latestAttribution === nowCallingNumber) { // A changer quand plusieurs utilisateurs pour le compteur
			return `<p>C'est à vous !</p>`
		}
			else if (latestAttribution <= queue.get().sort()[0]) { // Fonction sort() à adapter au delà de 9 attributions !
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
		if (lAttribution.get() > 1) {
			if (attribution < lAttribution.get()) {
				const li = document.createElement('li')
				li.innerHTML = `Numéro ${attribution}`
				document.querySelector("#waiting-list").appendChild(li)
			}
		}
	})
	return document.querySelector("#waiting-list")
}


