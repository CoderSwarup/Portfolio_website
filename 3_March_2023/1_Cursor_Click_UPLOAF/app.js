
const cursorAnimation = document.querySelector('.cursor')

const cursors = document.querySelectorAll('.cursor')


document.addEventListener('click',(e)=>{
  let x = e.clientX;
  let y = e.clientY;
  
 // console.table(x,y)
  
  cursorAnimation.style.top = y + "px"
  cursorAnimation.style.left= x + "px"
  
  
  

cursors.forEach((cursor) =>{
  cursor.classList.add('active')
  
  
  setTimeout(()=>{
      cursor.classList.remove('active')

  },2500)
})





let cursorClone = cursorAnimation.cloneNode(true)
document.querySelector('body').appendChild(cursorClone)

//console.log(cursorClone)


setTimeout(() =>{
  cursorClone.remove()
},1000)


})