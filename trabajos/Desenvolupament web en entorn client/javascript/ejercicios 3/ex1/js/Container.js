export class Container {
  #label; #massKg;

  constructor(label, massKg) {
    this.#label = String(label || "");
    const m = Number(massKg);
    this.#massKg = m > 0 ? m : 0;
  }
  get label() {
    return this.#label;
  }
  get massKg() {
    return this.#massKg;
  }
  toLine(i) {
    return `${i}. ${this.label} · ${this.massKg} kg`;
  }
}