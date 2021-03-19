function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


function setBulgarian() {
	document.getElementById("homePage").innerHTML = texts["bg"].homePage
	document.getElementById("ScientificPage").innerHTML = texts["bg"].ScientificPage
	document.getElementById("GraphingPage").innerHTML = texts["bg"].GraphingPage
	document.getElementById("NumeralPage").innerHTML = texts["bg"].NumeralPage
	document.getElementById("AboutPage").innerHTML = texts["bg"].AboutPage
	document.getElementById("ContactPage").innerHTML = texts["bg"].ContactPage
  document.getElementById("ChangeClr").innerHTML = texts["bg"].ChangeClr
    document.getElementById("Addition").innerHTML = texts["bg"].Addition
    document.getElementById("Subtraction").innerHTML = texts["bg"].Subtraction
    document.getElementById("Multiplication").innerHTML = texts["bg"].Multiplication
    document.getElementById("Division").innerHTML = texts["bg"].Division
    document.getElementById("Exponents").innerHTML = texts["bg"].Exponents
    document.getElementById("following").innerHTML = texts["bg"].following
    document.getElementById("evaluation").innerHTML = texts["bg"].evaluation
}
	


function languageChange() {
	if (readCookie('language')=="bulgarian") {
		setBulgarian()
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
	document.cookie = 'language=english; expires=Thu, 2 Aug 2022 20:00:00 UTC; path=/'
    document.getElementById("homePage").innerHTML = texts["en"].homePage
    document.getElementById("ScientificPage").innerHTML = texts["en"].ScientificPage
    document.getElementById("GraphingPage").innerHTML = texts["en"].GraphingPage
    document.getElementById("NumeralPage").innerHTML = texts["en"].NumeralPage
    document.getElementById("AboutPage").innerHTML = texts["en"].AboutPage
    document.getElementById("ContactPage").innerHTML = texts["en"].ContactPage
    document.getElementById("ChangeClr").innerHTML = texts["en"].ChangeClr
    document.getElementById("Addition").innerHTML = texts["en"].Addition
    document.getElementById("Subtraction").innerHTML = texts["en"].Subtraction
    document.getElementById("Multiplication").innerHTML = texts["en"].Multiplication
    document.getElementById("Division").innerHTML = texts["en"].Division
    document.getElementById("Exponents").innerHTML = texts["en"].Exponents
    document.getElementById("following").innerHTML = texts["en"].following
    document.getElementById("evaluation").innerHTML = texts["en"].evaluation
  }
}
var texts = {
  en: {
    homePage: "Home",
    ScientificPage: "Scientific calculator",
    GraphingPage: "Graphing calculator",
    NumeralPage: "Numeral system calculator",
    AboutPage: "About",
    ContactPage: "Contact",
    ChangeClr: "Change the color of the graphic here:",
    Addition: "Addition (x+y)",
    Subtraction: "Subtraction (x-y)",
    Multiplication: "Multiplication (x*y or (x)(y))",
    Division: "Division (x/y)",
    Exponents: "Exponents (x^y or x^(1/y) for roots)",
    following: "The following functions: sin, cos, tan, asin, acos, atan, abs",
    evaluation: "Single variable evaluation (include \"x\" in the expression string)"
  },
  bg: {
    homePage: "Начало",
    ScientificPage: "Научен калкулатор",
    GraphingPage: "Графичен калкулатор",
    NumeralPage: "Калкулатор за бройни системи",
    AboutPage: "За нас",
    ContactPage: "Контакти",
    ChangeClr: "Смени цвета на графиката от тук:",
    Addition: "Събиране (x+y)",
    Subtraction: "Изваждане (x-y)",
    Multiplication: "Умножение (x*y или (x)(y))",
    Division: "Деление (x/y)",
    Exponents: "Експоненти (x^y или x^(1/y) за корени)",
    following: "Функции:  sin, cos, tan, asin, acos, atan, abs ",
    evaluation: "Съвет (включете \"x\" в низа на израза)"
  }
}

languageChange() 