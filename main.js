

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

const faqList = document.querySelectorAll(".faq-question");
const faqAns = document.querySelectorAll(".faq-ans");
const faqAngle = document.querySelectorAll("fa-angle-down");

 faqAns.forEach(function(ans) {
  ans.classList.add("ds-none")
});


faqList.forEach(function (item, index){
  item.addEventListener('click',()=> {  
    let currentIndex = index;
    
  faqAns[currentIndex].classList.toggle("ds-none");
 
  });
  
});

// console.log(faqList[0]);