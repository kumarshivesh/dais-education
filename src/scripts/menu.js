// <---START: `Hamburger Menu` Logic--->
const hamburger = document.querySelector('#hamburger')
const ul = document.querySelector('#ul')

hamburger.addEventListener('click', ()=> {
  ul.classList.toggle('ham_active')

  let ham_child = hamburger.firstElementChild
  if(ul.classList.contains('ham_active')) {
    ham_child.classList.replace('fa-bars', 'fa-xmark')
    // ham_child.src = "./xmark-solid.svg"; // Change the source to the xmark icon
  } else {
    ham_child.classList.replace('fa-xmark', 'fa-bars')
    // ham_child.src = "./bars-solid.svg"; // Change the source back to the bars icon
  }
})
// <---END: `Hamburger Menu` Logic--->

