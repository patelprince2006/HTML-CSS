
export class Range {
  constructor(start, end, step = 1) {
    if (step === 0) throw new Error("Step cannot be zero");
    this.start = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    const step = this.step;

    return {
      next() {
        if ((step > 0 && current <= end) || (step < 0 && current >= end)) {
          const result = { value: current, done: false };
          current += step;
          return result;
        }
        return { done: true };
      }
    };
  }
}

export function testIteration() {
  const range = new Range(1, 5);
  const values = [];
  for (const num of range) {
    values.push(num);
  }
  return values; 
}

export function testSpread() {
  const range = new Range(10, 50, 10);
  return [...range]; 
}
