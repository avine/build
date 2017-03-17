
export default class Msg {

  constructor(data) {
    this.data = data;
  }

  insert(node) {
    const p = document.createElement('p');
    p.innerHTML = `Dynamic message: ${this.data}`;
    node.appendChild(p);
  }

}

const c = new Msg('Hello world!');
c.insert(document.body);
