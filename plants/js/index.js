console.log(
  '1.Вёрстка соответствует макету. Ширина экрана 768px +24\n2.Вёрстка соответствует макету. Ширина экрана 380px +24\n3.нет полосы прокрутки при ширине страницы от 1440рх до 380px +7\n4.нет полосы прокрутки при ширине страницы от 380px до 320рх +8\n5.при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2\n.6.При нажатии на бургер-иконку адаптивное меню появляется не плавно, снимаю баллы +2\n7.Адаптивное меню соответсвует цвету макета +4\n8.Адаптивное меню при нажатии на крестик уезжает не плавно, снимаю баллы +2\n9.ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\n10.При клике по ссылке в адаптивном меню адаптивное меню скрывается не плавно, снимаю балыы +2 Score: 75'
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