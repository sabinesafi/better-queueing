const freeTable = () => {
	const UpdatedWaitingList = currentWaitingList.slice(1)
	localStorage.setItem('currentWaitingList', JSON.stringify(UpdatedWaitingList))
	currentWaitingList = JSON.parse(localStorage.getItem('currentWaitingList')) //MAJ la variable utilisée partout
	const latestAttribution = localStorage.getItem('latestAttribution')
	if (latestAttribution >= 2) {removeDiv()	}
	introduceWaitingList(latestAttribution)
	generateWaitingList()
	displayCount() //compteur côté restaurateur
}

const displayCount = () => {
	document.querySelector("#display-count")
	.innerHTML = `Actuellement ${currentWaitingList.length} personnes en attente d'une table`
}