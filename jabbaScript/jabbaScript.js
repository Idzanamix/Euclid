const heroSlider = document.querySelector('.hero__slider'),
  heroList = heroSlider.querySelector('.hero__list'),
  heroItem = heroSlider.querySelectorAll('.hero__item'),
  heroBtns = heroSlider.querySelector('.hero__btns');

const dots = [];

let sliderCount = 0,
  sliderWidth;

for (let i = 0; i < heroItem.length; i++) {
  const dot = document.createElement('button');
  dot.dataset.slideTo = i;
  dot.classList.add('hero__dot');
  dot.setAttribute("aria-label", "точка слайдер фотографий");
  if (i == 0) dot.classList.add('hero__dot--active');
  heroBtns.append(dot);
  dots.push(dot);
}

window.addEventListener('resize', showSlide);

function showSlide() {
  sliderWidth = heroSlider.offsetWidth;
  heroList.style.width = sliderWidth * heroItem.length + 'px';
  heroItem.forEach(item => item.style.width = sliderWidth + 'px');
  rollSlider();
}
showSlide();

function rollSlider() {
  heroList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
  dots.forEach(item => item.classList.remove('hero__dot--active'));
  dots[index].classList.add('hero__dot--active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  })
});

const tabsLink = document.querySelectorAll('.about-work__btn'),
  tabsText = document.querySelectorAll('.about-work__text'),
  tabsImage = document.querySelectorAll('.about-work__img');


tabsLink.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.link;

    tabsLink.forEach(function (link) { link.classList.remove('about-work__btn--active') });
    e.currentTarget.classList.add('about-work__btn--active');

    tabsText.forEach(function (element) { element.classList.remove('about-work__text--active') });
    document.querySelector(`[data-text="${path}"]`).classList.add('about-work__text--active');

    tabsImage.forEach(function (element) { element.classList.remove('about-work__img--active') });
    document.querySelector(`[data-img="${path}"]`).classList.add('about-work__img--active');
  })
});

const FaqBtn = document.querySelectorAll('.FAQ__btn'),
  FaqText = document.querySelectorAll('.FAQ__text');

FaqBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    const push = e.currentTarget,
      gods = element.nextElementSibling;

    if (gods.classList.contains('FAQ__text--active')) {

      gods.classList.remove('FAQ__text--active');
      push.classList.remove('FAQ__btn--active');

    } else {
      FaqText.forEach((element) => element.classList.remove('FAQ__text--active'));
      gods.classList.add('FAQ__text--active');

      FaqBtn.forEach((element) => element.classList.remove('FAQ__btn--active'));
      push.classList.add('FAQ__btn--active');
    }
  })
});

const burger = document.querySelector('.burger'),
  navlist = document.querySelector('.nav__list'),
  navLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  navlist.classList.toggle('nav__list--active');
  search.classList.remove('nav__search--active');
  document.body.classList.toggle('stop-scroll');
});

navLink.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    navlist.classList.remove('nav__list--active');
    document.body.classList.remove('stop-scroll');
  })
});


const search = document.querySelector('.nav__search'),
  navBtn = search.querySelector('.nav__search--btn'),
  navClear = search.querySelector('.nav-clear'),
  navInput = search.querySelector('.nav__input');

console.log(navClear);

navBtn.addEventListener('click', () => {
  search.classList.toggle('nav__search--active');
  burger.classList.remove('burger--active');
  navlist.classList.remove('nav__list--active');
  navInput.value = "";
});

navClear.addEventListener('click', () => {
  navInput.value = "";
});





















// customScroll.onmouseout = function(e) {
//   customScroll.forEach((element) => element.classList.remove('scroll__wrapper--active'));
// }

// document.onmouseover = function (event) {
//   let target = event.target;
//   console.log(target);
//   target.classList.remove('header__link--active');

//   if (!target.closest('scroll__wrapper') && !target.closest('.header__bottom .header__link')) {
//     setTimeout(() => {
//       customScroll.forEach((element) => element.classList.remove('scroll__wrapper--active'));
//       openScroll.forEach((element) => element.classList.remove('header__link--active'));
//       scrollItem.forEach((element) => element.setAttribute("tabindex", "-1"));
//     }, 3000);
//   }
// };

// document.onmouseout = function (event) {
//   let target = event.target;
//   target.forEach((element) => element.classList.add('header__link--active'));
// };







// document.onmouseover = function (event) {
//   let target = event.target;
//   console.log(target);
//   // var man = 10000;

//   if (!target.closest('scroll__wrapper') && !target.closest('.header__bottom .header__link')) {
//     man = 10000;
//   }
//   console.log(man);

//   setTimeout(() => {
//     customScroll.forEach((element) => element.classList.remove('scroll__wrapper--active'));
//     openScroll.forEach((element) => element.classList.remove('header__link--active'));
//     scrollItem.forEach((element) => element.setAttribute("tabindex", "-1"));
//   }, (1000 + man));
// };



// window.addEventListener('focusin', event => console.log(new Date, event.target));

/* 1 */

/* .header__item:nth-child(1) .customScroll__item:nth-child(1) {
  background: url(../img/1920/img_1-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(1) .customScroll__item:nth-child(2) {
  background: url(../img/1920/img_1-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(1) .customScroll__item:nth-child(3) {
  background: url(../img/1920/img_1-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(1) .customScroll__item:nth-child(4) {
  background: url(../img/1920/img_1-4.jpg) no-repeat center / cover;
}

.header__item:nth-child(1) .customScroll__item:nth-child(5) {
  background: url(../img/1920/img_1-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(1) .customScroll__item:nth-child(6) {
  background: url(../img/1920/img_1-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(1) .customScroll__item:nth-child(7) {
  background: url(../img/1920/img_1-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(1) .customScroll__item:nth-child(8) {
  background: url(../img/1920/img_1-4.jpg) no-repeat center / cover;
} */

/* 2 */

/* .header__item:nth-child(2) .customScroll__item:nth-child(1) {
  background: url(../img/1920/img_2-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(2) .customScroll__item:nth-child(2) {
  background: url(../img/1920/img_2-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(2) .customScroll__item:nth-child(3) {
  background: url(../img/1920/img_2-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(2) .customScroll__item:nth-child(4) {
  background: url(../img/1920/img_2-4.jpg) no-repeat center / cover;
}

.header__item:nth-child(2) .customScroll__item:nth-child(5) {
  background: url(../img/1920/img_2-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(2) .customScroll__item:nth-child(6) {
  background: url(../img/1920/img_2-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(2) .customScroll__item:nth-child(7) {
  background: url(../img/1920/img_2-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(2) .customScroll__item:nth-child(8) {
  background: url(../img/1920/img_2-4.jpg) no-repeat center / cover;
} */

/* 3 */

/* .header__item:nth-child(3) .customScroll__item:nth-child(1) {
  background: url(../img/1920/img_3-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(3) .customScroll__item:nth-child(2) {
  background: url(../img/1920/img_3-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(3) .customScroll__item:nth-child(3) {
  background: url(../img/1920/img_3-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(3) .customScroll__item:nth-child(4) {
  background: url(../img/1920/img_3-4.jpg) no-repeat center / cover;
}

.header__item:nth-child(3) .customScroll__item:nth-child(5) {
  background: url(../img/1920/img_3-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(3) .customScroll__item:nth-child(6) {
  background: url(../img/1920/img_3-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(3) .customScroll__item:nth-child(7) {
  background: url(../img/1920/img_3-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(3) .customScroll__item:nth-child(8) {
  background: url(../img/1920/img_3-4.jpg) no-repeat center / cover;
} */

/* 4 */

/* .header__item:nth-child(4) .customScroll__item:nth-child(1) {
  background: url(../img/1920/img_4-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(4) .customScroll__item:nth-child(2) {
  background: url(../img/1920/img_4-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(4) .customScroll__item:nth-child(3) {
  background: url(../img/1920/img_4-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(4) .customScroll__item:nth-child(4) {
  background: url(../img/1920/img_4-4.jpg) no-repeat center / cover;
}

.header__item:nth-child(4) .customScroll__item:nth-child(5) {
  background: url(../img/1920/img_4-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(4) .customScroll__item:nth-child(6) {
  background: url(../img/1920/img_4-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(4) .customScroll__item:nth-child(7) {
  background: url(../img/1920/img_4-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(4) .customScroll__item:nth-child(8) {
  background: url(../img/1920/img_4-4.jpg) no-repeat center / cover;
} */

/* 5 */

/* .header__item:nth-child(5) .customScroll__item:nth-child(1) {
  background: url(../img/1920/img_5-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(5) .customScroll__item:nth-child(2) {
  background: url(../img/1920/img_5-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(5) .customScroll__item:nth-child(3) {
  background: url(../img/1920/img_5-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(5) .customScroll__item:nth-child(4) {
  background: url(../img/1920/img_5-4.jpg) no-repeat center / cover;
}

.header__item:nth-child(5) .customScroll__item:nth-child(5) {
  background: url(../img/1920/img_5-1.jpg) no-repeat center / cover;
}

.header__item:nth-child(5) .customScroll__item:nth-child(6) {
  background: url(../img/1920/img_5-2.jpg) no-repeat center / cover;
}

.header__item:nth-child(5) .customScroll__item:nth-child(7) {
  background: url(../img/1920/img_5-3.jpg) no-repeat center / cover;
}

.header__item:nth-child(5) .customScroll__item:nth-child(8) {
  background: url(../img/1920/img_5-4.jpg) no-repeat center / cover;
} */
