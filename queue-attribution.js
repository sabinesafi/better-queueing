let queue =  {}

queue.save = (list) =>
	localStorage.setItem('currentQueue', JSON.stringify(list))

queue.get = () => 
	JSON.parse(localStorage.getItem('currentQueue'))



let lAttribution = {}

lAttribution.save = (int) =>
	localStorage.setItem('latestAttribution', int)

lAttribution.get = () => 
	JSON.parse(localStorage.getItem('latestAttribution'))
