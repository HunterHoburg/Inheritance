function printOutput(text, outputType) {
  if(outputType === 'pdf') {
    //do something
    this.print = text;
  } else {
    //print as html
    this.print = '<h1>' + text + '</h1>';
  }
};

var printer = {
  name: 'Tempe'
};

printOutput.apply(printer, ['This is a pdf printer', 'pdf']);
printer


printOutput.apply(printer, ['This is a html printer', 'html']);
printer
