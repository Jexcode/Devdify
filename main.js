

// Nav and menu controll

const menuIcon = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
const navLink = document.querySelector(".navLinks");
const closeNav = document.querySelector(".fa-xmark");
const li = document.querySelectorAll(".navLinks > li")

menuIcon.addEventListener('click', ()=>{
  nav.classList.toggle("ds-none");
});

closeNav.addEventListener('click', ()=>{
  nav.classList.toggle("ds-none");
});

li.forEach(function(link){
  link.addEventListener('click', ()=>{
    nav.classList.toggle("ds-none");
  })
});

// faq

const faqList = document.querySelectorAll(".faq-item");
const faqAns = document.querySelectorAll(".faq-ans");
const faqAngle = document.querySelectorAll("fa-angle-down");


faqList.forEach(function (list){
  const question = list.querySelector('.faq-question');
  
question.addEventListener('click', ()=>{
  
  faqList.forEach(function (item){
    if (item !== list) {
      item.classList.remove('show-ans');
    }
  });
  
  list.classList.toggle('show-ans');
})
})

// console.log(faqList[0]);
