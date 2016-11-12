let nowCallingNumber = undefined

const freeTable = () => {
	nowCallingNumber = currentWaitingList[0]
	const updatedWaitingList = currentWaitingList.slice(1)
	localStorage.setItem('currentWaitingList', JSON.stringify(updatedWaitingList))
	currentWaitingList = JSON.parse(localStorage.getItem('currentWaitingList')) //MAJ la variable utilisée partout
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
	.innerHTML = `${currentWaitingList.length} personne(s) en attente d'une table`
}