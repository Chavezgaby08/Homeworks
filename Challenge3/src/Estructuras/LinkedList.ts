export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Node<T> | null = null;

  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  getAll(): T[] {
    const elements: T[] = [];
    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    return elements;
  }
}