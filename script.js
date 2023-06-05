let inputYear = document.querySelector("#inputYear");
let inputDay = document.querySelector("#inputDay");
let inputMonth = document.querySelector("#inputMonth");
let button = document.querySelector(".circulo");
let date = new Date();
let yearCurrent = date.getFullYear();

//Envio button

button.addEventListener("click", () => {
  const yearValue = parseInt(inputYear.value);

  if (isNaN(yearValue) || yearCurrent < 1 || yearValue > yearCurrent) {
    inputYear.value = "";
    alert("O ano não pode ser maior que o ano atual.");
  }
  const monthValue = parseInt(inputMonth.value);
  // nessa condição eu faço uma verificação que caso o monthValue que é onde vai receber o valor inserido no input for maior que 12 ele limpara a tela,não deixando ser ultrapassado de 2 caracteres
  if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
    inputMonth.value = "";
    alert("Mês tem que estar entre 1 e 12");
  }
  const dayValue = parseInt(inputDay.value);
  if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
    inputDay.value = "";
    alert("dia tem que estar entre 0 e 31");
  }
  Calculator(dayValue, monthValue, yearValue, date);
});

// Funcionabilidade do input da data e conversão para dias/anos/meses

function Calculator(day, month, year, dateCurrent) {
  let dataInput = new Date(`${year}-${month}-${day}`);
  let diferencaMilissegundos = dateCurrent - dataInput;

  // Converter a diferença para dias
  let diferencaDias = diferencaMilissegundos / (1000 * 60 * 60 * 24);

  // Calcular anos, meses e dias
  let anos = Math.floor(diferencaDias / 365);
  let meses = Math.floor((diferencaDias % 365) / 30);
  let dias = Math.floor((diferencaDias % 365) % 30);

  //
  const outputYear = document.querySelector(".output-year");
  const outputMonth = document.querySelector(".output-month");
  const outputDay = document.querySelector(".output-day");

  if (anos < 10) {
    outputYear.textContent = "0" + anos;
  } else {
    outputYear.textContent = anos;
  }
  if (meses < 10) {
    outputMonth.textContent = "0" + meses;
  } else {
    outputMonth.textContent = meses;
  }
  if (dias < 10) {
    outputDay.textContent = "0" + dias;
  } else {
    outputDay.textContent = dias;
  }
}
