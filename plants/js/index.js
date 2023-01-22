console.log(
  '1.Valid layout +10\n2.Semantic layout +20\n3.The layout corresponds to the layout +48\n4.css requirements +12\n5.Interactivity through css +20\n Score: 100'
);


const BurgerButton = document.querySelector('#burger-button')
const NavBar = document.querySelector('nav')
const CloseButton = document.querySelector('#close-button')

function closeMenu() {
  NavBar.style.display = 'none';
  // NavBar.classList.toggle('active');
  CloseButton.style.display = 'none';
  BurgerButton.style.display = 'block';
}

function registerButton () {
  BurgerButton.addEventListener('click', function () {
    NavBar.style.display = 'block';
    // NavBar.classList.toggle('active');
    CloseButton.style.display = 'block';
    BurgerButton.style.display = 'none';

    const Navs = document.querySelectorAll('li .inika')

    CloseButton.addEventListener('click', closeMenu);

    for (let i = 0; i < Navs.length; i++) {
      Navs[i].addEventListener('click', closeMenu);
    }

  })
}

document.addEventListener("resize", registerButton)

onresize = registerButton