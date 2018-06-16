// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Int32 = require("bs-platform/lib/js/int32.js");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var Note$ReactTemplate = require("../Note/Note.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function print(t) {
  if (t) {
    var match = t[0];
    console.log("letter", match[/* letter */0]);
    console.log("accidental", match[/* accidental */1]);
    console.log("octaveShift", match[/* octaveShift */2]);
    console.log("octave", match[/* octave */3]);
    return /* () */0;
  } else {
    console.log("PARSE ERROR");
    return /* () */0;
  }
}

function octaveShiftToString(octaveShift) {
  var match = octaveShift > 0;
  if (match) {
    return $$String.make(octaveShift, /* "+" */43);
  } else {
    var match$1 = octaveShift < 0;
    if (match$1) {
      return $$String.make(Int32.abs(octaveShift), /* "-" */45);
    } else {
      return "";
    }
  }
}

function octaveShiftFromString(string) {
  var match = Caml_string.get(string, 0);
  var switcher = match - 43 | 0;
  if (switcher > 2 || switcher < 0) {
    return 0;
  } else {
    switch (switcher) {
      case 0 : 
          return string.length;
      case 1 : 
          return 0;
      case 2 : 
          return -string.length | 0;
      
    }
  }
}

var regex = new RegExp("^([a-g])([s#fbn])?([-\\+]*)?([\\d]+)?$");

function fromString(string) {
  var exec = regex.exec($$String.lowercase(string));
  if (exec !== null) {
    var match = $$Array.map((function (prim) {
            if (prim == null) {
              return /* None */0;
            } else {
              return [prim];
            }
          }), exec);
    if (match.length !== 5) {
      throw [
            Caml_builtin_exceptions.match_failure,
            [
              "NoteParser.re",
              49,
              10
            ]
          ];
    } else {
      var letter = match[1];
      var accidental = match[2];
      var octaveShift = match[3];
      var octave = match[4];
      var letter$1 = letter ? Note$ReactTemplate.letterFromString(letter[0]) : /* None */0;
      var accidental$1 = accidental ? Note$ReactTemplate.accidentalFromString(accidental[0]) : /* None */0;
      var octaveShift$prime = octaveShift ? octaveShiftFromString(octaveShift[0]) : 0;
      var octave$prime = octave ? /* Some */[Caml_format.caml_int_of_string(octave[0])] : /* None */0;
      var match$1 = octaveShift$prime !== -1 ? /* tuple */[
          octaveShift$prime,
          octave$prime
        ] : (
          octave$prime ? /* tuple */[
              0,
              /* Some */[-octave$prime[0] | 0]
            ] : /* tuple */[
              octaveShift$prime,
              octave$prime
            ]
        );
      return /* Some */[/* record */[
                /* letter */letter$1,
                /* accidental */accidental$1,
                /* octaveShift */match$1[0],
                /* octave */match$1[1]
              ]];
    }
  } else {
    return /* None */0;
  }
}

function toString(parsed) {
  if (parsed) {
    var match = parsed[0];
    var octave = match[/* octave */3];
    var letter = Note$ReactTemplate.letterToString(match[/* letter */0]);
    var accidental = Note$ReactTemplate.accidentalToString(match[/* accidental */1]);
    var octaveShift = octaveShiftToString(match[/* octaveShift */2]);
    var octave$1 = octave ? String(octave[0]) : "";
    return letter + (accidental + (octaveShift + octave$1));
  } else {
    return "";
  }
}

exports.print = print;
exports.octaveShiftToString = octaveShiftToString;
exports.octaveShiftFromString = octaveShiftFromString;
exports.regex = regex;
exports.fromString = fromString;
exports.toString = toString;
/* regex Not a pure module */