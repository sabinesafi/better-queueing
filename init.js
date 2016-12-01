document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#get-attribution-btn').addEventListener('click', () => {
		newAttribution()
	})
	document.querySelector('#new-vacancy-btn').addEventListener('click', () => {
		if (queue.get().length !== 0) {callAttribution()}
		}
	)
	displayCount()
})