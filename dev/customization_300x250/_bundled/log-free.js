(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

window.clickTag = "https://marketing.greentanktech.com/l/864572/2020-07-14/j93c2";
var zero = { opacity: 0 };
var one = { opacity: 1 };
var down = { x: "+=40", opacity: 0 };
var up = { x: "-=70", opacity: 0 };

function start() {
	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();

	tl.set(".frame1", _extends({}, one));

	tl.from(".t" + 1, .5, _extends({}, up));
	tl.add(exit(1), "+=2");

	tl.add(enter(2));
	tl.to(".product_" + 1, .3, { opacity: 0 }, "-=.3");

	tl.add(exit(2), "+=2");

	tl.to(".logo", .3, { opacity: 0 });
	tl.from(".logo2", .3, { opacity: 0 });
	tl.add(enter(3));
	tl.to(".product_" + 2, .3, { opacity: 0 }, "-=.3");
	tl.to(".bg_" + 3, .7, { opacity: 0 }, "+=.3");
	tl.from(".cta", .3, { opacity: 0, y: "+=30" });
}

function exit(num) {
	var tl = new TimelineMax();
	tl.add("exit");
	tl.to(".bg_" + num, .5, { clip: "rect(0px, 300px, 250px, 300px)" }, "exit");
	tl.to(".t" + num, .3, _extends({}, down), "exit+=.2");
	// tl.to(`.product_${num}`, .3, {...down}, `exit+=.1`)
	return tl;
}

function enter(num) {
	var tl = new TimelineMax();
	tl.add("enter");
	tl.from(".t" + num, .4, _extends({}, up), "enter");
	tl.from(".product_" + num, .6, { clip: "rect(0px, 380px, 500px, 380px)" }, "enter");

	tl.from(".bg_" + num, .6, { clip: "rect(0px, 0px, 250px, 0px)" }, "enter");
	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
