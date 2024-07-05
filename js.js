function addHighlight() {
  let element = document.getElementById('para');
  let element2 = document.getElementById('userinput');
  let userinput = element2.value;
  element.classList.add(userinput);
}
function toggleVisibility(elementID){
let element = document.getElementById(elementID);
element.classList.toggle('hidden')
}
function text_button_Change(){
let elem= document.getElementById("textLine");
elem.textContent='Text Changed!'
}

