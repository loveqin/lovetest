/**
 * Created by loveqin on 17/3/17.
 */
import './index.html'
import './main.css'
require("babel-register");
require("babel-polyfill");
var commonJs = require("../js/common.js");
console.log(commonJs);
//input.map(item => item +1 );
let inputMap1 = commonJs(2);
console.log("webpack2");
console.log("inputMap1"+inputMap1);
/*
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let attr1 = Array.form(arrayLike);*/
