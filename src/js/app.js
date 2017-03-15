
import $ from 'jquery';
import MyDom from './dom';

$(document).ready(function () {

  const dom = new MyDom({a: 1, b: 2, c: 3});
  dom.view();

});
