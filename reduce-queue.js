let nowCallingNumber = undefined

const freeTable = () => {
	nowCallingNumber = queue.get()[0]
	const tempQueue = queue.get().slice(1)
	queue.save(tempQueue)
	const latestAttribution = localStorage.getItem('latestAttribution')
	if (latestAttribution === nowCallingNumber) {removeDiv()}
		else if (latestAttribution >= 2) {removeDiv()}
	introduceWaitingList(latestAttribution)
	generateWaitingList()
	displayCount() //compteur côté restaurateur
	if (nowCallingNumber >= 1) {displayNowCallingNumber(nowCallingNumber)}
}

const displayNowCallingNumber = (nowCallingNumber) => {
	const div = document.createElement('div')
	div.innerHTML = `C'est au tour du numéro ${nowCallingNumber}.`
	document.querySelector("#display-count").appendChild(div)
}

const displayCount = () => {
	document.querySelector("#display-count")
	.innerHTML = `${queue.get().length} personne(s) en attente d'une table`
}