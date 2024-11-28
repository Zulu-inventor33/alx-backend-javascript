const Utils = {
  calculateNumber(type, a, b) {
    // Round the numbers first
    a = Math.round(a);
    b = Math.round(b);

    // Perform operations based on type
    if (type === 'SUM') {
      return a + b;
    } else if (type === 'SUBTRACT') {
      return a - b;
    } else if (type === 'DIVIDE') {
      if (b === 0) {
        return 'Error';
      }
      return a / b;
    }
  }
};

module.exports = Utils;
