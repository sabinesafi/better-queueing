document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('#get-ticket-btn').addEventListener('click', () => {
		queue.grow()
		youAreNumber(queue.last())
		updateQueueDisplayEverywhere()
	})

	document.querySelector('#new-vacancy-btn').addEventListener('click', () => {
		if (queue.get().length !== 0) {
			const latestAttribution = queue.last()
			const nowCallingNumber = queue.first()
			queue.callNumber()
			youAreNumber(latestAttribution)
			updateQueueDisplayEverywhere()
			displayNowCallingNumber(nowCallingNumber)
		}
	})

	displayCount()
})