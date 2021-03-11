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
