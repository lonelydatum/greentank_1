const zero = {opacity:0}
const one = {opacity:1}
const down = {y:"+=70"}
const up = {y:"-=70"}

function start(){
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()

	

	tl.set(".frame1", {...one})

	tl.from(`.t${1}`, .5, {...up})	
	tl.add(exit(1), "+=2")


	tl.add(enter(2))
	tl.add(exit(2), "+=2")

	tl.to(".logo", .3, {opacity:0})
	tl.from(".logo2", .3, {opacity:0})
	tl.add(enter(3))



	tl.add(`3-out`, "+=2")	
	tl.to(`.product_${3}`, .5, {...down}, `3-out+=.1`)
	tl.to(`.bg_${3}`, .5, {clip: `rect(90px, 728px, 90px, 728px)`}, `3-out`)



	tl.add("4-in")	
	tl.from(`.product_${4}`, .5, {...up}, "4-in")
	tl.from(`.bg_${4}`, 1, {clip: `rect(0px, 0px, 90px, 0px)`})


	tl.add("4-out", "+=1")
	tl.to(`.t${3}`, .5, {...down}, "4-out")	
	tl.to(`.bg_${4}`, .5, {clip: `rect(90px, 728px, 90px, 728px)`})
	tl.from(`.cta`, .5, {...up})

	
	// tl.add(exit(3), "+=1")

	
	// tl.add(enter(4))
	// tl.add(exit(4), "+=1")
	



	




	// tl.gotoAndPlay("wave2")
	




}

function exit(num){
	const tl = new TimelineMax()
	tl.add(`exit`)
	tl.to(`.t${num}`, .3, {...down}, `exit`)
	tl.to(`.product_${num}`, .3, {...down}, `exit+=.1`)
	tl.to(`.bg_${num}`, .5, {clip: `rect(90px, 728px, 90px, 728px)`}, `exit`)
	return tl
}

function enter(num){
	const tl = new TimelineMax()
	tl.add("enter")
	tl.from(`.t${num}`, .4, {...up}, "enter")
	tl.from(`.product_${num}`, .4, {...up}, "enter+=.1")
	tl.from(`.bg_${num}`, .7, {clip: `rect(0px, 0px, 90px, 0px)`}, "enter")

	return tl
}

start()


module.exports = {};

