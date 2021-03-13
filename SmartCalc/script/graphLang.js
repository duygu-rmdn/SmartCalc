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
  }
}
var texts = {
  en: {
    here: "here",
    homePage: "Home",
    ScientificPage: "Scientific calculator",
    GraphingPage: "Graphing calculator",
    NumeralPage: "Numeral system calculator",
    AboutPage: "About",
    ContactPage: "Contact"

  },
  bg: {
    homePage: "Начало",
    ScientificPage: "Научен калкулатор",
    GraphingPage: "Графичен калкулатор",
    NumeralPage: "Бройни системи?...",
    AboutPage: "За нас",
    ContactPage: "Контакти"

  }
}