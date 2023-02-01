// 舊的寫法
// const $ = require("jquery");
// const utils = require("./utils");

import $ from "jquery";
import { first } from "./utils";
import css from "./style.scss";

console.log(first("abc"));

$(document).ready(() => {
  $('body').append("<button class='btn'>click me</button>");
  $(".btn").click(() => {
    const str = "hello!";
    alert(first(str));
  });
});
