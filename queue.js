let latestAttribution = 0
let currentWaitingList = []

const introduceWaitingList = () => {
	currentWaitingList.forEach(attribution => {
		if (attribution < latestAttribution) {
			document.querySelector("#display-waiting-list")
			.innerHTML = `Les numéros suivants sont avant vous dans la liste d'attente :
				<br><ul id="waiting-list"></ul>`
			}
		})
}

const generateWaitingList = () => {
	currentWaitingList.forEach(attribution => {
		if (attribution < latestAttribution) {
			const li = document.createElement('li')
			li.innerHTML = `Numéro ${attribution}`
			document.querySelector("#waiting-list").appendChild(li)
		}
	})
}

const newAttribution = () => {
	latestAttribution++
	currentWaitingList.push(latestAttribution)
	document.querySelector("#display-attribution")
	.innerHTML = `Vous êtes le numéro : <strong>${latestAttribution}</strong> dans la liste d'attente.`
	introduceWaitingList()
	generateWaitingList()
}
