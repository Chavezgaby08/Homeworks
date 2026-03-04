export class DoubleCircularNode<T> {

  value: T;
  next: DoubleCircularNode<T> | null;
  prev: DoubleCircularNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoubleCircularList<T> {

  head: DoubleCircularNode<T> | null;

  constructor() {
    this.head = null;
  }

  append(value: T): void {

    const newNode = new DoubleCircularNode(value);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
      return;
    }

    const tail = this.head.prev as DoubleCircularNode<T>;

    tail.next = newNode;
    newNode.prev = tail;

    newNode.next = this.head;
    this.head.prev = newNode;
  }
}