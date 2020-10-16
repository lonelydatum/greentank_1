(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var zero = { opacity: 0 };
var one = { opacity: 1 };
var down = { y: "+=100" };
var up = { y: "-=90" };

function start() {
	TweenLite.defaultEase = Power4.easeOut;
	var tl = new TimelineMax();

	tl.set(".frame1", _extends({}, one));

	tl.from(".t" + 1, .5, _extends({}, up));
	tl.add(exit(1), "+=2");

	tl.add(enter(2));
	tl.add(exit(2), "+=2");

	tl.to(".logo", .3, { opacity: 0 });
	tl.from(".logo2", .3, { opacity: 0 });
	tl.add(enter(3));

	tl.add("3-out", "+=2");
	tl.to(".product_" + 3, .5, _extends({}, down), "3-out+=.1");
	tl.to(".bg_" + 3, .5, { clip: "rect(90px, 728px, 90px, 728px)" }, "3-out");

	tl.add("4-in");
	tl.from(".product_" + 4, .5, _extends({}, up), "4-in");
	tl.from(".bg_" + 4, 1, { clip: "rect(0px, 0px, 90px, 0px)" });

	tl.add("4-out", "+=1");
	tl.to(".t" + 3, .5, _extends({}, down), "4-out");
	tl.to(".bg_" + 4, .5, { clip: "rect(90px, 728px, 90px, 728px)" });
	tl.from(".cta", .5, _extends({}, up));

	// tl.add(exit(3), "+=1")

	// tl.add(enter(4))
	// tl.add(exit(4), "+=1")

	// tl.gotoAndPlay("3-out")
}

function exit(num) {
	var tl = new TimelineMax();
	tl.add("exit");
	tl.to(".t" + num, .3, _extends({}, down), "exit");
	tl.to(".product_" + num, .3, _extends({}, down), "exit+=.1");
	tl.to(".bg_" + num, .5, { clip: "rect(90px, 728px, 90px, 728px)" }, "exit");
	return tl;
}

function enter(num) {
	var tl = new TimelineMax();
	tl.add("enter");
	tl.from(".t" + num, .4, _extends({}, up), "enter");
	tl.from(".product_" + num, .4, _extends({}, up), "enter+=.1");
	tl.from(".bg_" + num, .7, { clip: "rect(0px, 0px, 90px, 0px)" }, "enter");

	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
