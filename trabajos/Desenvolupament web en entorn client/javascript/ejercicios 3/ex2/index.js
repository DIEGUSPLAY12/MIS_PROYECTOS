// Classe Container
class Container {
  constructor(label, massKg) {
    this.label = label;
    this.massKg = massKg;
  }
}

// Classe CargoBay
class CargoBay {
  constructor() {
    this.containers = [];
  }
  add(container) {
    this.containers[this.containers.length] = container;
  }
  totalMass() {
    return this.containers.reduce((sum, c) => sum + c.massKg, 0);
  }
}

// Classe DualCargoBay
class DualCargoBay {
  static MAX_IMBALANCE_KG = 500;
  #left;
  #right;

  constructor(maxPerSideKg) {
    this.#left = new CargoBay();
    this.#right = new CargoBay();
    this.maxPerSideKg = maxPerSideKg;
  }

  get left() { return this.#left; }
  get right() { return this.#right; }

  totalLeft() { return this.#left.totalMass(); }
  totalRight() { return this.#right.totalMass(); }

  delta() {
    const d = this.totalLeft() - this.totalRight();
    return d < 0 ? -d : d; // sense Math.abs
  }

  isBalanced() {
    return this.delta() <= DualCargoBay.MAX_IMBALANCE_KG;
  }

  summaryLines() {
    return [
      `⬅️ Left: ${this.totalLeft()} kg`,
      `➡️ Right: ${this.totalRight()} kg`,
      `Δ imbalance: ${this.delta()} kg (ok=${this.isBalanced()})`
    ];
  }
}

// Demo
function provarDualCargoBay() {
  const dual = new DualCargoBay(2000);

  dual.left.add(new Container("L1", 800));
  dual.left.add(new Container("L2", 600));
  dual.right.add(new Container("R1", 1000));
  dual.right.add(new Container("R2", 400));

  mostrarSortida(dual.summaryLines().join("\n"));
}

function mostrarSortida(text) {
  document.getElementById("out").innerText = text;
}
