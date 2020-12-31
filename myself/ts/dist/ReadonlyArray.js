"use strict";
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
