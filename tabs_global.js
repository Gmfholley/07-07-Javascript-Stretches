function addSelected(element){
  
  removeSelectedClassNames();
  
  element.className = element.className + " selected";
  
  var num = element.id.slice(-1);
  
  var content = document.getElementById(("content" + num));
  content.className = content.className + " selected";
  
}



//workaround complete
//If you try to do a for-loop on this, it will delete from the array of elements that match as it goes
function removeSelectedClassNames() {
  while (document.getElementsByClassName("selected").length > 0) {
    
    document.getElementsByClassName("selected")[0].className = document.getElementsByClassName("selected")[0].className.replace("selected", "");
  }
  // for (i = 0; i < a.length; i ++) {
  //   console.log("Now printing all elements");
  //   console.log(a);
  //   console.log(a[i].className);
  //   console.log(a[i].className.replace("selected", ""));
  //
  //   console.log("Now printing all elements");
  //   console.log(a);
  //   console.log("done printing");
  // }
}
