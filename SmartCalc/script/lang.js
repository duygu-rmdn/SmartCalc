function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


function setBulgarian() {
  document.getElementById("descriptionScientific").innerHTML = texts["bg"].descriptionScientific
  document.getElementById("descriptionNumeral").innerHTML = texts["bg"].descriptionNumeral
  document.getElementById("descriptionGraphic").innerHTML = texts["bg"].descriptionGraphic
  document.getElementById("descriptionAfter").innerHTML = texts["bg"].descriptionAfter
  document.getElementById("contact").innerHTML = texts["bg"].contact
  document.getElementById("here").innerHTML = texts["bg"].here
  document.getElementById("homePage").innerHTML = texts["bg"].homePage
  document.getElementById("ScientificPage").innerHTML = texts["bg"].ScientificPage
  document.getElementById("GraphingPage").innerHTML = texts["bg"].GraphingPage
  document.getElementById("NumeralPage").innerHTML = texts["bg"].NumeralPage
  document.getElementById("AboutPage").innerHTML = texts["bg"].AboutPage
  document.getElementById("ContactPage").innerHTML = texts["bg"].ContactPage
  document.getElementById("abbreviation").innerHTML = texts["bg"].abbreviation
  document.getElementById("flag").setAttribute("src", texts["bg"].flag)
  languageChange()
}

function setEnglish() {
  document.getElementById("descriptionScientific").innerHTML = texts["en"].descriptionScientific
  document.getElementById("descriptionNumeral").innerHTML = texts["en"].descriptionNumeral
  document.getElementById("descriptionGraphic").innerHTML = texts["en"].descriptionGraphic
  document.getElementById("descriptionAfter").innerHTML = texts["en"].descriptionAfter
  document.getElementById("contact").innerHTML = texts["en"].contact
  document.getElementById("here").innerHTML = texts["en"].here
  document.getElementById("homePage").innerHTML = texts["en"].homePage
  document.getElementById("ScientificPage").innerHTML = texts["en"].ScientificPage
  document.getElementById("GraphingPage").innerHTML = texts["en"].GraphingPage
  document.getElementById("NumeralPage").innerHTML = texts["en"].NumeralPage
  document.getElementById("AboutPage").innerHTML = texts["en"].AboutPage
  document.getElementById("ContactPage").innerHTML = texts["en"].ContactPage
  document.getElementById("abbreviation").innerHTML = texts["en"].abbreviation
  document.getElementById("flag").setAttribute("src", texts["en"].flag)
  languageChange()
}

function languageChange() {
  if (readCookie('language') == "bulgarian") {
    document.cookie = 'language=bulgarian; expires=Thu, 2 Aug 2022 20:00:00 UTC; path=/'
    setBulgarian()
  }
  else if (readCookie('language') == "english") {
    document.cookie = 'language=english; expires=Thu, 2 Aug 2022 20:00:00 UTC; path=/'
    setEnglish()
  }
}

var texts = {
  en: {
    descriptionScientific: "Scientific calculator provides a calculator which not only does the functions of ordinary calculator but it also does scientific functions.",
    descriptionNumeral: "Numeral systems calculator provides a calculator, which converts numbers from one number system to another, depending on the customers choice.",
    descriptionGraphic: "Graphic calculator creates a graphic based on function provided. The colour of the function can differ depending on the clients choice. In the bottom right corner you will find an instruction which helps you to work with the graphing calculator.",
    descriptionAfter: "Hello, I am Duygu Ramadan. I am 15 years old, my hometown is Asenovgrad, now I am going on 9th grade in High School of Mathematics \"Acad. Kiril Popov\". I started programming 1 year ago and currently I am working on my several projects. My favorite programming languages are C#, JavaScript, HTML, CSS.",
    contact: "Connect with me ",
    here: "here",
    homePage: "Home",
    ScientificPage: "Scientific calculator",
    GraphingPage: "Graphing calculator",
    NumeralPage: "Numeral system calculator",
    AboutPage: "About",
    ContactPage: "Contact",
    abbreviation: "en",
    flag: "https://flags.fmcdn.net/data/flags/h20/gb.png"
  },
  bg: {
    descriptionScientific: "В страницата scientific calculator можете да откриете калкулатор, който освен че изпълнява всички функции на добре познатия ни стандартен калкулатор, съдържа в функции присъщи на научните калкулатори.",
    descriptionNumeral: "В страницата numeral system calculator може да откриете калкулатор, който конвертира числа от една в друга бройна система, по избор на потребителя.",
    descriptionGraphic: "В страницата Graphing calculator може да откриете графичен калкулатор, който при въвеждане на функция изкарва графика на дадената функция. Цвета на графиката може да се сменя по желание на потребителя, а в долния ъгъл е разположена легенда с указание за работа с функциите.",
    descriptionAfter: "Здравейте, казвам се Дуйгу Рамадан. На 15 години съм, родом от град Асеновград, сега деветокласничка в МГ,,Акад. Кирил Попов”. Програмирам от една година и разработвам множество различни хоби проекти. Любимите ми програмни езици са C#, JavaScript, HTML, CSS.",
    contact: "Свържете се с мен ",
    here: "тук",
    homePage: "Начало",
    ScientificPage: "Научен калкулатор",
    GraphingPage: "Графичен калкулатор",
    NumeralPage: "Калкулатор за бройни системи",
    AboutPage: "За нас",
    ContactPage: "Контакти",
    abbreviation: "bg",
    flag: "https://flags.fmcdn.net/data/flags/h20/bg.png"
  }
}