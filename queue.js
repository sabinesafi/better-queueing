localStorage.setItem('latestAttribution', 0)
localStorage.setItem('currentWaitingList', JSON.stringify([]))

const currentWaitingList = JSON.parse(localStorage.getItem('currentWaitingList'))

const growAttributionCount = () => {
	const currentAttribution = JSON.parse(localStorage.getItem('latestAttribution')) +1
	localStorage.setItem('latestAttribution', currentAttribution)
}

const growWaitingList = (latestAttribution) => {
	currentWaitingList.push(latestAttribution)
	localStorage.setItem('currentWaitingList', JSON.stringify(currentWaitingList))
}

const introduceWaitingList = () => {
	currentWaitingList.forEach(attribution => {
		if (attribution < localStorage.getItem('latestAttribution')) {
			document.querySelector("#display-waiting-list")
			.innerHTML = `Les numéros suivants sont avant vous dans la liste d'attente :
				<br><ul id="waiting-list"></ul>`
			}
		})
}

const generateWaitingList = () => {
	currentWaitingList.forEach(attribution => {
		if (attribution < localStorage.getItem('latestAttribution')) {
			const li = document.createElement('li')
			li.innerHTML = `Numéro ${attribution}`
			document.querySelector("#waiting-list").appendChild(li)
		}
	})
}

const newAttribution = () => {
	growAttributionCount()
	growWaitingList(localStorage.getItem('latestAttribution'))
	document.querySelector("#display-attribution")
	.innerHTML = `Vous êtes le numéro : <strong>${localStorage.getItem('latestAttribution')}</strong> dans la liste d'attente.`
	introduceWaitingList()
	generateWaitingList()
}
