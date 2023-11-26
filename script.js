function myFunction() {
    var x=document.getElementById("name");
  
    if (x.className==="navbar") {
      x.className+=" responsive";
    }
  
    else {
      x.className="navbar";
    }
  }