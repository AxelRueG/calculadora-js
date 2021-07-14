const botones = document.getElementsByClassName('btn-click');
const btnDelete = document.getElementsByClassName('btn-delete')[0];
const btnEval = document.getElementsByClassName('btn-eval')[0];

const display = document.getElementsByClassName('calculator-display')[0];
const responses = document.getElementsByClassName('calculator-responses')[0];

let mensaje = '';
let Ans = 0;
let contador = 0;
let res = [];

const handleClick = caracter => {
  mensaje += caracter;
  display.value = mensaje;
};

const handleChange = event => {
  mensaje = event.target.value;
  display.value = mensaje;
};

const handleEval = () => {
  try {
    let a = eval(mensaje);
    Ans = a;
    res.push(`<div class="responses-value">${a}</div>`);
  } catch {
    res.push(`<div class="responses-value">Syntax Error</div>`);
  }
  contador++;
  if (contador > 4) {
    contador--;
    res.splice(0, 1);
  }

  responses.innerHTML = '';
  res.forEach(X => {
    responses.innerHTML += X;
  });

  mensaje = '';
  display.value = mensaje;
};

const handleDelete = () => {
  mensaje = mensaje.slice(0, -1);
  display.value = mensaje;
};

// -- Events -------------------------------------------------------------------
document.getElementById('display').addEventListener('submit', event => {
  event.preventDefault();
  handleEval();
});

display.addEventListener('change', handleChange);

btnEval.addEventListener('click', handleEval);

btnDelete.addEventListener('click', handleDelete);

for (const Btn of botones) {
  Btn.addEventListener('click', () => {
    handleClick(Btn.textContent);
  });
}
