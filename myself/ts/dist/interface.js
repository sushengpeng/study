"use strict";
let params1 = {
    name: "111"
};
function getString(params) {
    if (params.name) {
        console.log(params.name);
    }
    if (params.age) {
        console.log(params.age);
    }
    if (params.large) {
        console.log(params.large);
    }
    if (params.color) {
        console.log(params.color);
    }
}
getString(params1);
