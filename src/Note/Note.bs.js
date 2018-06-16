// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

function toSemitones(param) {
  var base;
  switch (param[0]) {
    case 0 : 
        base = 0;
        break;
    case 1 : 
        base = 2;
        break;
    case 2 : 
        base = 3;
        break;
    case 3 : 
        base = 5;
        break;
    case 4 : 
        base = 7;
        break;
    case 5 : 
        base = 8;
        break;
    case 6 : 
        base = 10;
        break;
    
  }
  var shift;
  switch (param[1]) {
    case 0 : 
        shift = 0;
        break;
    case 1 : 
        shift = 1;
        break;
    case 2 : 
        shift = -1;
        break;
    
  }
  return base + shift | 0;
}

function toCents(note) {
  return Caml_int32.imul(toSemitones(note), 100);
}

var class_tables = [
  0,
  0,
  0
];

function fromString() {
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table(0);
    var env_init = function () {
      return CamlinternalOO.create_object_opt(0, $$class);
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return Curry._1(class_tables[0], 0);
}

function letterFromString(string) {
  switch (string) {
    case "a" : 
        return /* Some */[/* A */0];
    case "b" : 
        return /* Some */[/* B */1];
    case "c" : 
        return /* Some */[/* C */2];
    case "d" : 
        return /* Some */[/* D */3];
    case "e" : 
        return /* Some */[/* E */4];
    case "f" : 
        return /* Some */[/* F */5];
    case "g" : 
        return /* Some */[/* G */6];
    default:
      return /* None */0;
  }
}

function letterToString(letter) {
  if (letter) {
    switch (letter[0]) {
      case 0 : 
          return "a";
      case 1 : 
          return "b";
      case 2 : 
          return "c";
      case 3 : 
          return "d";
      case 4 : 
          return "e";
      case 5 : 
          return "f";
      case 6 : 
          return "g";
      
    }
  } else {
    return "";
  }
}

function accidentalFromString(string) {
  switch (string) {
    case "b" : 
    case "f" : 
        return /* Some */[/* Flat */2];
    case "" : 
    case "n" : 
        return /* Some */[/* Natural */0];
    case "#" : 
    case "s" : 
        return /* Some */[/* Sharp */1];
    default:
      return /* None */0;
  }
}

function accidentalToString(accidental) {
  if (accidental) {
    switch (accidental[0]) {
      case 0 : 
          return "";
      case 1 : 
          return "#";
      case 2 : 
          return "b";
      
    }
  } else {
    return "";
  }
}

exports.toSemitones = toSemitones;
exports.toCents = toCents;
exports.fromString = fromString;
exports.letterFromString = letterFromString;
exports.letterToString = letterToString;
exports.accidentalFromString = accidentalFromString;
exports.accidentalToString = accidentalToString;
/* No side effect */