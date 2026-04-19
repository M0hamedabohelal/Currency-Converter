var currentConverter = document.querySelector("#currency-to");
var currency = document.querySelector("#currency");
var sarf = document.querySelector(".result");
var number = document.querySelector("#number");
var resulat = document.querySelector(".numto");
updaterate();
async function updaterate() {
  const from = currency.value;
  const to = currentConverter.value;
  let response = await fetch(
    `https://v6.exchangerate-api.com/v6/eb27d7fd0f6da17e434bf5d1/latest/${from}`,
  );
  if (response.ok) {
    let data = await response.json();
    const rate = data.conversion_rates[to];
    console.log(rate);
    let totalResult = (number.value * rate).toFixed(2);
    resulat.innerHTML = `${totalResult}`;
    sarf.innerHTML = `1 ${from} =  ${rate} ${to}`;
  }
}
currency.addEventListener("change", updaterate);
number.addEventListener("change", updaterate);
currentConverter.addEventListener("change", updaterate);
