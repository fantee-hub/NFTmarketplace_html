//Get the button:
let mybutton = document.querySelector('#myBtn');

//Checks for when the user scrolls for about 250px then adds the display
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 250) {
    mybutton.classList.add("active");
  } else {
    mybutton.classList.remove("active");
  }
})

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = () =>{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//header
let navbar = document.querySelector('.menu');
document.querySelector('#bar').onclick = () =>{
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    navbar.classList.remove('active')
}

//Collections filter
let filterBtn = document.querySelectorAll('.filter-buttons .filter');
let filterItem = document.querySelectorAll('.collections .box-card .collect');

filterBtn.forEach(button => {
    button.onclick =()=>{
        filterBtn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        let dataFilter = button.getAttribute('data-filter');

        filterItem.forEach(item => {

            item.classList.remove('active');
            item.classList.add('hide');

            if (item.getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                item.classList.remove('hide');
                item.classList.add('active');
            }
        })
    }
})

//Featured Art
var swiper = new Swiper(".card-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });

  //Creator
  var swiper = new Swiper(".creator-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
  });

  //faq
  let faq = document.querySelectorAll('.box-faq .box');
  faq.forEach(box => {
      box.onclick =()=>{
        faq.forEach(unbox => {
            unbox.classList.remove('active');
        })
        box.classList.add('active');
      }
  })
