const zero = {opacity:0}
const one = {opacity:1}
const down = {x:"+=40", opacity:0}
const up = {x:"-=70", opacity:0}

function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()

	

	tl.set(".frame1", {...one})

	tl.from(`.t${1}`, .5, {...up})	
	tl.add(exit(1), "+=2")

	tl.add(enter(2))
	tl.set(`.product_${1}`, {opacity:0})

	tl.add(exit(2), "+=2")



	tl.to(".logo", .3, {opacity:0})
	tl.from(".logo2", .3, {opacity:0})
	tl.add(enter(3))
	tl.set(`.product_${2}`, {opacity:0})
	tl.to(`.bg_${3}`, .7, {opacity:0}, "+=.3")
	tl.from(`.cta`, .5, {opacity:0, y:"+=30"})





}

function exit(num){
	const tl = new TimelineMax()
	tl.add(`exit`)
	tl.to(`.bg_${num}`, .5, {clip: `rect(0px, 200px, 250px, 200px)`}, `exit`)
	tl.to(`.t${num}`, .3, {...down}, `exit+=.2`)
	// tl.to(`.product_${num}`, .3, {...down}, `exit+=.1`)
	return tl
}

function enter(num){
	const tl = new TimelineMax()
	tl.add("enter")
	tl.from(`.t${num}`, .4, {...up}, "enter")
	tl.from(`.product_${num}`, .4, {clip: `rect(0px, 240px, 500px, 240px)`}, "enter+=.1")

	tl.from(`.bg_${num}`, .7, {clip: `rect(0px, 0px, 250px, 0px)`}, "enter")
	return tl
}

start()


module.exports = {};

