var clicks = 0;
function change() {
  clicks += 1;
  if (clicks % 2 == 1) {
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
  }
  else {
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
    homePage: "Home<br><br>",
    ScientificPage: "Scientific calculator<br><br>",
    GraphingPage: "Graphing calculator<br><br>",
    NumeralPage: "Numeral system calculator<br><br>",
    AboutPage: "About<br><br>",
    ContactPage: "Contact<br><br>"

  },
  bg: {
    descriptionScientific: "В страницата scientific calculator можете да откриете калкулатор, който освен че изпълнява всички функции на добре познатия ни стандартен калкулатор, съдържа в функции присъщи на научните калкулатори.",
    descriptionNumeral: "В страницата numeral system calculator може да откриете калкулатор, който конвертира числа от една в друга бройна система, по избор на потребителя.",
    descriptionGraphic: "В страницата Graphing calculator може да откриете графичен калкулатор, който при въвеждане на функция изкарва графика на дадената функция. Цвета на графиката може да се сменя по желание на потребителя, а в долния ъгъл е разположена легенда с указание за работа с функциите.",
    descriptionAfter: "Здравейте, казвам се Дуйгу Рамадан. На 15 години съм, родом от град Асеновград, сега деветокласничка в МГ,,Акад. Кирил Попов”. Програмирам от една година и разработвам множество различни хоби проекти. Любимите ми програмни езици са C#, JavaScript, HTML, CSS.",
    contact: "Свържете се с мен ",
    here: "тук",
    homePage: "Начало<br><br>",
    ScientificPage: "Научен калкулатор<br><br>",
    GraphingPage: "Графичен калкулатор<br><br>",
    NumeralPage: "Бройни системи?...<br><br>",
    AboutPage: "За нас<br><br>",
    ContactPage: "Контакти<br><br>"

  }
}