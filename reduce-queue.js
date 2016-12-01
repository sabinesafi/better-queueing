let nowCallingNumber = undefined

const callAttribution = () => {
	nowCallingNumber = queue.get()[0]
	const newQueue = queue.get().slice(1)
	queue.save(newQueue)
	if (lAttribution.get() === nowCallingNumber) {removeDiv()}
		else if (lAttribution.get() >= 2) {removeDiv()}
	introduceWaitingList(lAttribution.get())
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
	.innerHTML = `${queue.get().length} personne(s) sont en attente.`
}