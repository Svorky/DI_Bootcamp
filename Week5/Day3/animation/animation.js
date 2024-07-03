function hello(){
    alert("Hello World!")
}
setTimeout(hello, 2000)

function helloDiv(){
    let div = document.getElementById("container1")
    let paras = div.querySelectorAll("p")
    if(paras.length === 5){
        myStopFunction()
        return
    }
    div.innerHTML += "<p>Hello World</p>"
}
setTimeout(helloDiv, 2000);

let timer = setInterval(helloDiv, 2000);

function myStopFunction() {
    clearInterval(timer);
  }

  function myMove() {
    let elem = document.querySelector("#animate");
    let pos = 0;
    let id = setInterval(function() {
      if (pos == 350) {
        clearInterval(id);
      }
      else {
        pos++;
        elem.style.left = pos + "px";
      }
    }, 5);
  }