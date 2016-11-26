document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#get-attribution-btn').addEventListener('click', () => {
		newAttribution()
	})
	document.querySelector('#table-free-btn').addEventListener('click', () => {
		if (queue.get().length !== 0) {freeTable()}
		}
	)
	displayCount()
})