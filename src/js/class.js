
export default class MyClass {

  constructor(data) {
    this.data = data;
  }

  view() {
    console.info(`data property: ${this.data}`);
  }

}

const c = new MyClass('Hello world!');
c.view();
