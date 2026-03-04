export class DoubleNode<T> {

  value: T;
  next: DoubleNode<T> | null;
  prev: DoubleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoubleLinkedList<T> {

  head: DoubleNode<T> | null;
  tail: DoubleNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T): void {

    const newNode = new DoubleNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  getAll(): T[] {

    const result: T[] = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}