export class DoubleNode<T> {
  valor: T;
  siguiente: DoubleNode<T> | null = null;
  anterior: DoubleNode<T> | null = null;

  constructor(valor: T) {
    this.valor = valor;
  }
}

export class DoubleLinkedList<T> {
  head: DoubleNode<T> | null = null;
  tail: DoubleNode<T> | null = null;

  append(valor: T): void {
    const newNode = new DoubleNode(valor);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.anterior = this.tail;
    if (this.tail) this.tail.siguiente = newNode;
    this.tail = newNode;
  }
}