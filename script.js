const kilogram = document.getElementById("kilo");
const pounds = document.getElementById("pound");
const ounces = document.getElementById("ounce");

kilogram.addEventListener("input", () => {
  if (kilogram.value) {
    pounds.value = (kilogram.value * 2.20462).toFixed(2);
    ounces.value = (kilogram.value * 35.27396).toFixed(2);
  } else {
    pounds.value = "";
    ounces.value = "";
  }
});

pounds.addEventListener("input", () => {
  if (pounds.value) {
    kilogram.value = (pounds.value * 0.45359237).toFixed(2);
    ounces.value = (pounds.value * 16).toFixed(2);
  } else {
    kilogram.value = "";
    ounces.value = "";
  }
});

ounces.addEventListener("input", () => {
  if (ounces.value) {
    kilogram.value = (ounces.value / 35.27396).toFixed(2);
    pounds.value = (ounces.value / 16).toFixed(2);
  } else {
    kilogram.value = "";
    pounds.value = "";
  }
});
