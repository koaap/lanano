"use strict"

document.documentElement.classList.add("loaded"); // когда страница загрузилась

window.addEventListener("DOMContentLoaded", windowLoad); // для анимации для первых экранов, чтобы ничего не дергалось

function windowLoad() {}; // для анимации для первых экранов, чтобы ничего не дергалось

const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".lang")) {
    document.querySelector(".lang.active") ? document.querySelector(".lang.active").classList.remove("active") : '';

    if (!elementInteractive.closest(".lang").classList.contains('active')) {
      elementInteractive.closest(".lang").classList.add("active");
    } else {
      document.querySelector(".lang.active") ? document.querySelector(".lang.active").classList.remove("active") : '';
    }
  } else {
    document.querySelector(".lang.active") ? document.querySelector(".lang.active").classList.remove("active") : '';
  }

  if (elementInteractive.closest(".burger")) {
    menu.classList.add("active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".header__exit-menu")) {
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".nav__link")) {
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
})

const productsCards = document.querySelectorAll(".products__item");

if (document.body.clientWidth < 501) {

  if (productsCards) {
    productsCards.forEach(function (e) {
      let left = e.querySelector(".products__left");
      let name = e.querySelector(".products__name");
      left.append(name);
    })
  }
}

if (document.querySelector(".init-aos")) {
  AOS.init({
    duration: 900,
  });
}

const firstBlock = document.querySelector(".main");

const header = document.querySelector(".header");

const productsArcher = document.querySelector('.products__archer');
const contactsArcher = document.querySelector('.contacts__archer');

if (firstBlock && header) {
  const findHeaderHeight = header.getBoundingClientRect();

  const headerHeight = findHeaderHeight.height;

  firstBlock.style.paddingTop = headerHeight + 'px';

  productsArcher.style.top = '-' + headerHeight + 'px';

  contactsArcher.style.top = '-' + headerHeight + 'px';
}