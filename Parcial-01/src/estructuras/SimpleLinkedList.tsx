// SimpleLinkedList.ts

export class Node<T> {

  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SimpleLinkedList<T> {

  head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  append(value: T): void {

    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  removeFirst(): T | null {

    if (this.head === null) return null;

    const removedValue = this.head.value;
    this.head = this.head.next;

    return removedValue;
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