document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#get-attribution-btn').addEventListener('click', () => {
		newAttribution()
	})
	document.querySelector('#table-free-btn').addEventListener('click', () => {
		freeTable()
	})
	displayCount()
})