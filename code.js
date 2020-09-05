var first;
var second;
var op = 0;
var exp = "";
onEvent("one", "click", function( ) {
  exp = getText("Result") + "1";
  setText("Result", exp);
});
onEvent("two", "click", function( ) {
  exp = getText("Result") + "2";
  setText("Result", exp);
});
onEvent("three", "click", function( ) {
  exp = getText("Result") + "3";
  setText("Result", exp);
});
onEvent("four", "click", function( ) {
  exp = getText("Result") + "4";
  setText("Result", exp);
});
onEvent("five", "click", function( ) {
  exp = getText("Result") + "5";
  setText("Result", exp);
});
onEvent("six", "click", function( ) {
  exp = getText("Result") + "6";
  setText("Result", exp);
});
onEvent("seven", "click", function( ) {
  exp = getText("Result") + "7";
  setText("Result", exp);
});
onEvent("eight", "click", function( ) {
  exp = getText("Result") + "8";
  setText("Result", exp);
});
onEvent("nine", "click", function( ) {
  exp = getText("Result") + "9";
  setText("Result", exp);
});
onEvent("zero", "click", function( ) {
  exp = getText("Result") + "0";
  setText("Result", exp);
});
onEvent("decimal", "click", function( ) {
  exp = getText("Result") + ".";
  setText("Result", exp);
});
onEvent("Addition", "click", function( ) {
  op = 1;
  first = getNumber("Result");
  setText("Result", "");
});
onEvent("subtraction", "click", function( ) {
  op = 2;
  first = getNumber("Result");
  setText("Result", "");
});
onEvent("multiplication", "click", function( ) {
  op = 3;
  first = getNumber("Result");
  setText("Result", "");
});
onEvent("division", "click", function( ) {
  op = 4;
  first = getNumber("Result");
  setText("Result", "");
});
onEvent("equals", "click", function( ) {
  second = getNumber("Result");
  if (op == 1) {
    setText("Result", first + second);
  } else if ((op == 2)) {
    setText("Result", first - second);
  } else if ((op == 3)) {
    setText("Result", first * second);
  } else if ((op == 4)) {
    setText("Result", first / second);
  }
});
onEvent("clear", "click", function( ) {
  op = 0;
  setText("Result", "");
});
