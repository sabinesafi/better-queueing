localStorage.setItem('latestAttribution', 0)
localStorage.setItem('currentWaitingList', JSON.stringify([]))

let currentWaitingList = JSON.parse(localStorage.getItem('currentWaitingList'))


const newAttribution = () => {
	growAttributionCount()
	const latestAttribution = localStorage.getItem('latestAttribution')
	growWaitingList(latestAttribution)
	document.querySelector("#display-attribution")
	.innerHTML = `Vous êtes le numéro : <strong>${latestAttribution}</strong> dans la liste.`
	if (latestAttribution >= 2) {removeDiv()	}
	introduceWaitingList(latestAttribution)
	generateWaitingList()
	displayCount() //compteur côté restaurateur
	if (nowCallingNumber >= 1) {displayNowCallingNumber(nowCallingNumber)}
}


const growAttributionCount = () => {
	const currentAttribution = JSON.parse(localStorage.getItem('latestAttribution')) +1
	localStorage.setItem('latestAttribution', currentAttribution)
}

const growWaitingList = (latestAttribution) => {
	currentWaitingList.push(latestAttribution)
	localStorage.setItem('currentWaitingList', JSON.stringify(currentWaitingList))
}

const removeDiv = () => {
	const childDiv = document.querySelector('#display-waiting-list')
	const parentDiv = document.querySelector('#bloc-client')
	parentDiv.removeChild(childDiv)
}

const introduceWaitingList = (latestAttribution) => {
	const div = document.createElement('div')
	div.setAttribute('id', 'display-waiting-list')
	const generateInnerHTML = (latestAttribution) => {
		if (latestAttribution === nowCallingNumber) { // A changer quand plusieurs utilisateurs pour le compteur
			return `<p>C'est à vous !</p>`
		}
			else if (latestAttribution <= currentWaitingList.sort()[0]) {
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
	currentWaitingList.forEach(attribution => {
		if (localStorage.getItem('latestAttribution') > 1) {
			if (attribution < localStorage.getItem('latestAttribution')) {
				const li = document.createElement('li')
				li.innerHTML = `Numéro ${attribution}`
				document.querySelector("#waiting-list").appendChild(li)
			}
		}
	})
	return document.querySelector("#waiting-list")
}


