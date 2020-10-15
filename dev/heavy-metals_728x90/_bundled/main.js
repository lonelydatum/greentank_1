(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function start() {
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax();

	var fromO = { opacity: 0, y: "-=20" };
	var toO = { opacity: 0, y: "+=20" };

	TweenLite.from(".line", 10, { clip: "rect(0px, 0px, 90px, 0px)", ease: Power1.easeOut, delay: 2 });
	tl.set(".frame1", { opacity: 1 });

	tl.add('wave1');
	tl.from(".wave", 1, { scale: "+=.5", x: "-150", clip: "rect(0px, 0px, 90px, 0px)" }, 'wave1');
	tl.from(".bg2", 1, { clip: "rect(0px, 0px, 90px, 0px)" }, 'wave1');

	tl.to(".wave", 1, { x: "+=200", opacity: 0, clip: "rect(0px, 728px, 90px, 728px)" });
	tl.set(".wave", { opacity: 1, scale: 1, x: 0, clip: "rect(0px, 0px, 90px, 0px)" });

	tl.from(".t1", .3, _extends({}, fromO), '-=.3');
	tl.to(".t1", .3, _extends({}, toO), "+=2");

	tl.from(".t2", .3, _extends({}, fromO));
	tl.add('t2-end', "+=2");
	tl.to([".t2"], .3, _extends({}, toO), "t2-end");
	tl.to([".logo"], .3, { opacity: 0 }, "t2-end");

	tl.add("t3");
	tl.from(".t3", .3, _extends({}, fromO), "t3");
	tl.from(".logo2", .3, { opacity: 0 }, "t3");

	tl.add("wave2", "+=1");

	// tl.to(".wave", 1, { clip: `rect(0px, 728px, 90px, 0px)`}, "wave2")
	tl.to([".t3"], .3, _extends({}, toO), "wave2+=1");
	tl.to([".logo2"], .3, { opacity: 0 }, "wave2+=1");
	// tl.to(".wave", 1, {x:"+=200", opacity:0, clip: `rect(0px, 728px, 90px, 728px)`}, "wave2+=1")

	tl.to(".logo", .3, { opacity: 1 });
	tl.from(".t4", .3, _extends({}, fromO));
	tl.from(".play", .3, { opacity: 0 });

	// tl.gotoAndPlay("wave2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
