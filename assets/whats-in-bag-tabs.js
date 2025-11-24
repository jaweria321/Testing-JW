  function openBagTab(evt, tabName) {
    var i, bagtabcontent, bagtablink;
    bagtabcontent = document.getElementsByClassName("bagtabcontent");
    for (i = 0; i < bagtabcontent.length; i++) {
      bagtabcontent[i].style.display = "none";
    }
    bagtablink = document.getElementsByClassName("bagtablinks");
    for (i = 0; i < bagtablink.length; i++) {
      bagtablink[i].className = bagtablink[i].className.replace(" opened", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " opened";
  }
  
  // Get the element with id="defaultOpenedTab" and click on it
  document.getElementById("defaultOpenedTab").click();