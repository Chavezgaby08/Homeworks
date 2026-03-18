export interface Persona {
  nombre: string;
  cantidad: number;
  fecha: Date;
}

export class Cola {

  personas: Persona[];

  constructor() {
    this.personas = [];
  }

  enqueue(persona: Persona): void {
    this.personas.push(persona);
  }

  dequeue(): Persona | undefined {
    return this.personas.shift();
  }

  peek(): Persona | undefined {
    return this.personas[0];
  }

  size(): number {
    return this.personas.length;
  }

  isEmpty(): boolean {
    return this.personas.length === 0;
  }

  print(): Persona[] {
    return this.personas;
  }
}