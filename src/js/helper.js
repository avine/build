
export default class MyHelper {

  static propList(obj) {
    const list = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        list.push(prop);
      }
    }
    return list;
  }

}
