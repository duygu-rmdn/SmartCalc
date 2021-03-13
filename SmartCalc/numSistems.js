function calculate(radix) {
  let form = document.forms['convertor'];
  let base = form['base'].value;
  let number = form['num'].value;
  let result;
  if (base !== "" && number !== "") {
    if (checkNumber(base, number)) {
      number = parseInt(number, base);
      switch (radix) {
        case '2':
          result = number.toString('2');
          break;
        case '8':
          result = number.toString('8');
          break;
        case '10':
          result = number.toString('10');
          break;
        case '16':
          result = number.toString('16');
          break;
      }
      form['result'].value = result;
    }
    else {
      alert('Enter valid number for base: ' + base);
    }
  }
  else {
    alert('Enter values for base and nubmber');
  }
}

function checkNumber(base, number) {

  let re;
  let status;

  switch (base) {
    case '2':
      re = new RegExp('[0-1]{' + number.length + '}');
      status = re.test(number);
      return status;
    case '8':
      re = new RegExp('[0-7]{' + number.length + '}');
      status = re.test(number);
      return status;
    case '10':
      re = new RegExp('[0-9]{' + number.length + '}');
      status = re.test(number);
      return status;
    case '16':
      re = new RegExp('[0-9A-Fa-f]{' + number.length + '}');
      status = re.test(number);
      return status;
  }
}

var clicks = 0;
function change() {
  clicks += 1;
  if (clicks % 2 == 1) {
    document.cookie = 'language=bulgarian; expires=Thu, 2 Aug 2022 20:00:00 UTC; path=/'
    setBulgarian()

  }
  else {
    document.getElementById("homePage").innerHTML = texts["en"].homePage
    document.getElementById("ScientificPage").innerHTML = texts["en"].ScientificPage
    document.getElementById("GraphingPage").innerHTML = texts["en"].GraphingPage
    document.getElementById("NumeralPage").innerHTML = texts["en"].NumeralPage
    document.getElementById("AboutPage").innerHTML = texts["en"].AboutPage
    document.getElementById("ContactPage").innerHTML = texts["en"].ContactPage
  }
}
var texts = {
  en: {
    homePage: "Home<br><br>",
    ScientificPage: "Scientific calculator<br><br>",
    GraphingPage: "Graphing calculator<br><br>",
    NumeralPage: "Numeral system calculator<br><br>",
    AboutPage: "About<br><br>",
    ContactPage: "Contact<br><br>"

  },
  bg: {
    homePage: "Начало<br><br>",
    ScientificPage: "Научен калкулатор<br><br>",
    GraphingPage: "Графичен калкулатор<br><br>",
    NumeralPage: "Бройни системи?...<br><br>",
    AboutPage: "За нас<br><br>",
    ContactPage: "Контакти<br><br>"

  }
}