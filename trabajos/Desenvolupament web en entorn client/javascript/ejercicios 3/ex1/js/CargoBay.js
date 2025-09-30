import { Container } from "./Container.js";

export class CargoBay {
  static DEFAULT_MAX_KG = 20_000;

  #maxKg; #items;
  constructor(maxKg) {
    const cap = Number(maxKg) > 0 ? Number(maxKg) : CargoBay.DEFAULT_MAX_KG;
    this.#maxKg = cap;
    this.#items = [];
  }
  get maxKg() {
    return this.#maxKg;
  }

  add(container) {
    if (!(container instanceof Container)) throw new Error("Només s'accepten Container");
    const newTotal = this.totalMassKg() + container.massKg;
    if (newTotal > this.#maxKg) throw new Error("Supera la capacitat de la bodega");
    this.#items.push(container);
  }

  totalMassKg() {
    let sum = 0;
    for (let i=0; i<this.#items.length; i=i+1) {
      sum = sum + this.#items[i].massKg;
    }
    return sum;
  }

  loadPercent() {
    const p = Math.round((this.totalMassKg() * 100) / this.#maxKg);
    return p > 100 ? 100 : (p < 0 ? 0 : p);
  }

  toLines() {
    const lines = [];
    for (let i=0; i<this.#items.length; i=i+1) {
      const idx = lines.length;
      lines[idx] = this.#items[i].toLine(i+1);
    }
    const idx1 = lines.length; lines[idx1] = `Total: ${this.totalMassKg()} / ${this.#maxKg} kg (${this.loadPercent()}%)`;
    return lines;
  }
}