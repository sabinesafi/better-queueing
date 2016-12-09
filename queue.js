let queue =  {}

queue.save = (list) =>
	localStorage.setItem('currentQueue', JSON.stringify(list))

queue.get = () => 
	JSON.parse(localStorage.getItem('currentQueue'))

queue.last = () => {
	if (queue.get().length === 0) {last = 0}
		else last = queue.get().sort()[queue.get().length -1]
	return last
}

queue.grow = () => {
	let newQueue = queue.get()
	newQueue.push(queue.last() +1)
	queue.save(newQueue)
}

queue.first = () =>
	queue.get().sort()[0]

queue.callNumber = () => {
	const newQueue = queue.get().slice(1)
	queue.save(newQueue)
}

queue.save([])


/*const growAttributionCount = () => {
	const newAttribution = lAttribution.get() +1
	lAttribution.save(newAttribution)
}

const growWaitingList = (latestAttribution) => {
	let newQueue = queue.get()
	newQueue.push(latestAttribution)
	queue.save(newQueue)
}
 



lAttribution.save = (int) =>
	localStorage.setItem('latestAttribution', int)

lAttribution.get = () => 
	JSON.parse(localStorage.getItem('latestAttribution')) */
