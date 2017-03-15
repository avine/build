
import $ from 'jquery';
import MyHelper from './helper';

export default class MyDom {

  constructor(options = {}) {
    this.optList = MyHelper.propList(options);
  }

  view() {
    $('body').append(this.optList.join(', '));
  }

}
