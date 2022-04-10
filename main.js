const element = document.querySelector('#prueba');

console.log(element);

const suma = (a, b) => {
  return Number(a) + Number(b);
};
console.log(suma(4, 3));

const resta = (a, b) => {
  return a - b;
};
console.log(resta(5, 3));

const multiplicacion = (a, b) => {
  return a * b;
};
console.log(multiplicacion(2, 2));

const division = (a, b) => {
  return a / b;
};
console.log(division(6, 2));

const calculadora = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return suma(num1, num2);
    case '-':
      return resta(num1, num2);
    case '*':
      return multiplicacion(num1, num2);
    case '/':
      return division(num1, num2);
    default:
      return 'Operador no reconocido';
  }
};
console.log(calculadora(10, 5, '+'));

const numeros = document.querySelectorAll(
  '.grid-item:not(#equal)'
);
const input = document.querySelector('.input');

for (let numero of numeros) {
  numero.addEventListener('click', function () {
    input.innerHTML += numero.textContent;
  });
}

const operadores = document.querySelectorAll('.operador');

for (let operador of operadores) {
  operador.addEventListener('click', function () {
    const lastChar = input.innerHTML.slice(-1);

    if (!input.innerHTML == '' && !isNaN(lastChar)) {
      input.innerHTML += operador.textContent;
    }
  });
}

const clear = document.querySelector('.clear');

clear.addEventListener('click', function () {
  input.innerHTML = '';
});

const equal = document.querySelector('#equal');

equal.addEventListener('click', function () {
  const inputValue = input.innerHTML
    .replace(/×/g, '*')
    .replace(/÷/g, '/');
    
  const lastChar = inputValue.slice(-1);

  if (isNaN(lastChar)) {
    input.innerHTML = 'Error';
  } else {
    input.innerHTML = eval(inputValue);
  }
});


