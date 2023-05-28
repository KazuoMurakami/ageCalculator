let inputYear = document.querySelector("#inputYear");
let inputDay = document.querySelector("#inputDay");
let inputMonth = document.querySelector("#inputMonth");

let date = new Date();
let yearCurrent = date.getFullYear();

inputYear.addEventListener("input", () => {
  const yearValue = inputYear.value;

  if (isNaN(yearValue) || parseInt(yearValue) > yearCurrent) {
    inputYear.value = "";
    alert("O ano não pode ser maior que o ano atual.");
  }
});

inputMonth.addEventListener("input", () => {
  const monthValue = parseInt(inputMonth.value);
  // nessa condição eu faço uma verificação que caso o monthValue que é onde vai receber o valor inserido no input for maior que 12 ele limpara a tela,não deixando ser ultrapassado de 2 caracteres
  if (isNaN(monthValue) || monthValue < 0 || monthValue > 12) {
    inputMonth.value = "";
    alert("Mês tem que estar entre 1 e 12");
  }
});

inputDay.addEventListener("input", () => {
  const dayValue = parseInt(inputDay.value);
  if (isNaN(dayValue) || dayValue < 0 || dayValue > 31) {
    inputDay.value = "";
    alert("dia tem que estar entre 0 e 31");
  }
});
