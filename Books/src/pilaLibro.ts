export interface Libro {
  nombre: string;
  isbn: string;
  autor: string;
  editorial: string;
}

export class pilaLibro {

  libros: Libro[];

  constructor() {
    this.libros = [];
  }

 push(libro: Libro): void {
    this.libros.push(libro);
  }

 pop(): Libro | undefined {
    return this.libros.pop();
  }

  peek(): Libro | undefined {
    return this.libros[this.libros.length - 1];
  }

  size(): number {
    return this.libros.length;
  }

  isEmpty(): boolean {
    return this.libros.length === 0;
  }

  print(): Libro[] {
    return this.libros;
  }
}