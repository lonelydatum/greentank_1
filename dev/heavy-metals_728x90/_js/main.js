window.clickTag = "https://marketing.greentanktech.com/l/864572/2020-07-14/j938z"

function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()

	const fromO = {opacity:0, y:"-=20"}
	const toO = {opacity:0, y:"+=20"}

	TweenLite.from(".line", 10, {clip: `rect(0px, 0px, 90px, 0px)`, ease:Power1.easeOut, delay:2})
	tl.set(".frame1", {opacity:1})
	
	tl.add('wave1')
	tl.from(".wave", 1, {scale:"+=.5", x:"-150", clip: `rect(0px, 0px, 90px, 0px)`, ease:Linear.easeNone})
	tl.to(".wave", 1, {x:"+=200", opacity:0, clip: `rect(0px, 728px, 90px, 728px)`, ease:Linear.easeNone})
	tl.from(".bg2", 1, {clip: `rect(0px, 0px, 90px, 0px)`}, 'wave1')

	// tl.to(".wave", 1, {x:"+=200", opacity:0, clip: `rect(0px, 728px, 90px, 728px)`})
	// tl.set(".wave", {opacity:1, scale:1, x:0, clip: `rect(0px, 0px, 90px, 0px)`})

	tl.from(".t1", .3, {...fromO}, '-=.3')
	tl.to(".t1", .3, {...toO}, "+=2")

	tl.from(".t2", .3, {...fromO})
	tl.add('t2-end', "+=2")
	tl.to([".t2"], .3, {...toO}, "t2-end")
	tl.to([".logo"], .3, {opacity:0}, "t2-end")

	tl.add("t3")
	tl.from(".t3", .3, {...fromO}, "t3")
	tl.from(".logo2", .3, {opacity:0}, "t3")
	
	tl.add("wave2", "+=1")
	
	// tl.to(".wave", 1, { clip: `rect(0px, 728px, 90px, 0px)`}, "wave2")
	tl.to([".t3"], .3, {...toO}, "wave2+=1")
	tl.to([".logo2"], .3, {opacity:0}, "wave2+=1")
	// tl.to(".wave", 1, {x:"+=200", opacity:0, clip: `rect(0px, 728px, 90px, 728px)`}, "wave2+=1")

	tl.to(".logo", .3, {opacity:1})
	tl.from(".t4", .3, {...fromO})
	tl.from(".play", .3, {opacity:0})


	// tl.gotoAndPlay("wave2")
	




}

start()


module.exports = {};

