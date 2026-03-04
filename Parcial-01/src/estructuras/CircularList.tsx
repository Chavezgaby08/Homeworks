export class CircularNode<T> {

  value: T;
  next: CircularNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class CircularList<T> {

  head: CircularNode<T> | null;

  constructor() {
    this.head = null;
  }

  append(value: T): void {

    const newNode = new CircularNode(value);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== this.head) {
      current = current.next as CircularNode<T>;
    }

    current.next = newNode;
    newNode.next = this.head;
  }
}