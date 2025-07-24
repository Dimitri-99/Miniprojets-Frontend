const display = document.getElementById('display');

    function appendNum(n) {
      display.value += n;
    }
    function appendOp(op) {
      display.value += op;
    }
    function appendFunc(f) {
      display.value += f;
    }
    function clearDisplay() {
      display.value = '';
    }
    function calculate() {
      let exp = display.value
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
      try {
        display.value = eval(exp);
      } catch {
        display.value = 'Erreur';
      }
    }