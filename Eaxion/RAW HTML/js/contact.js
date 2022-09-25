// Loader
window.onload = (event) =>{
  enable_scroll();
  document.getElementById("loader-wrapper").style.opacity=0;
  document.getElementById("loader-wrapper").style.zIndex=-1000;
  //Here Left to Right first explore
  document.getElementById("first-explore").style.left="56vw";
};
// Loader Utils

function disable_scroll() {
  // To get the scroll position of current webpage
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
  
  // if scroll happens, set it to the previous value
  window.onscroll = function() {
  window.scrollTo(LeftScroll, TopScroll);
          };
  }
  
function enable_scroll() {
  window.onscroll = function() {};
}
disable_scroll(); //Dont allow scroll
// Loader END

// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
// Cursor END

//Some Math Stuff
function px_to_vw(px) {
  return px * (100 / document.documentElement.clientWidth);
}

function px_to_vh(px) {
  return px * (100 / document.documentElement.clientHeight);
}

function vh_to_px(vh) {
  return document.documentElement.clientHeight * (vh / 100);
}

function vw_to_px(vw) {
  return document.documentElement.clientWidth * (vw / 100);
}

//Scroll Up
function scroll_up_btn(windowHeight){
  if(windowHeight>300){
    document.getElementById("scroll-up").classList.add("appear");
  }
  else{
    document.getElementById("scroll-up").classList.remove("appear");
  }
}



//slideshow
function slideshow_event() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides_event");
    let dots = document.getElementsByClassName("dot_event");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }
}
function slideshow_college() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides_college");
    let dots = document.getElementsByClassName("dot_college");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }
}

//slideshow END








function description(windowHeight) {

  function animate_trans_in(explore, start, end, to, from) {
    if (windowHeight > start && windowHeight < end) {
      explore.classList.add("faderine_in");
      explore.style.left = from;
    } else {
      explore.style.left = to;
    }

  }

  function animate_trans_out(explore, start, end, to, from) {
    if (windowHeight > start && windowHeight < end) {
      explore.classList.add("faderine_out");
      explore.style.left = from;
    } else {
      explore.style.left = to;
    }
  }

  animate_trans_in(document.getElementById("first-explore"), vh_to_px(-10), vh_to_px(60), "-40vw", "56vw");
  animate_trans_out(document.getElementById("second-explore"), vh_to_px(80), vh_to_px(150), "70vw", "-33vw");
  animate_trans_in(document.getElementById("about-depart"), vh_to_px(260), vh_to_px(360), "-40vw", "8.4vw");
  animate_trans_in(document.getElementById("vision-depart"), vh_to_px(260), vh_to_px(360), "110vw", "37.5vw");
  animate_trans_in(document.getElementById("mission-depart"), vh_to_px(260), vh_to_px(360), "110vw", "66.5vw");
}


function parallax() {
  var windowHeight = window.scrollY;

  scroll_up_btn(windowHeight);
  description(windowHeight);


}

function on_load_custom(){
  slideshow_college();
  slideshow_event();
}

window.addEventListener("scroll", parallax);
on_load_custom();