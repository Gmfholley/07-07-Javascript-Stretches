// sets the global color variable to this color

function setColor(element) {
  color = element.id;
}

function paintColor(element) {
  removeOtherColorClasses(element);
  element.className = element.className + " " + color;
}

function removeOtherColorClasses(element){
  for (i = 0; i < allColors.length; i++ ){
    element.className = element.className.replace(allColors[i], "");
  }
}


allColors = ["yellow", "purple", "blue"];

var color = "";