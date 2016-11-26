let queue =  {}

queue.save = (list) =>
	localStorage.setItem('currentQueue', JSON.stringify(list))

queue.get = () => 
	JSON.parse(localStorage.getItem('currentQueue'))



/*let latestAttribution = {}

latestAttribution.save = (int) =>
	localStorage.setItem('latestAttribution', int)

latestAttribution.get = () => 
	JSON.parse(localStorage.getItem('latestAttribution'))*/
