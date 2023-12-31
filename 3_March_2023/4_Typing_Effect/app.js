let title = document.querySelector('.heading')
let arr = [ "I AM SAMMY" , "I AM DEVELOPER","HACKER  OP"]
let arri = 0
let index = 1;

(
function type(){
//  console.log("Hello")
let name = arr[arri]

let nametitle = name.slice(0, index)
title.innerHTML = nametitle

if(index >= name.length){
  arri++
  index = 1;
  if (arri >= arr.length) {
    arri = 0
  }
  
}else{
  index++;

}


setTimeout(() => {
  type()
},250)
})();