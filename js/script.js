const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

  const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

  navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries => {
  if(entries[0].contentRect.width <= 900){
    navLinksContainer.style.transition = "transform 0.3s ease-out"
  } else {
    navLinksContainer.style.transition = "none"
  }
}).observe(document.body)


const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')


    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')

    }

})

