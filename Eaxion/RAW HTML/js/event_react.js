// Loader
window.onload = (event) =>{
  enable_scroll();
  document.getElementById("loader-wrapper").style.opacity=0;
  document.getElementById("loader-wrapper").style.zIndex=-1000;

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
function px_to_vw(px){
  return px * (100 / document.documentElement.clientWidth);
}
function px_to_vh(px){
  return px * (100 / document.documentElement.clientHeight);
}
function vh_to_px(vh){
  return document.documentElement.clientHeight * (vh/100);
}
function vw_to_px(vw){
  return document.documentElement.clientWidth * (vw/100);
}

//Working



function transit_card(windowHeight){

  function transit(explode){
    for(let i=0;i<explode.length;i++){
        explode[i].style.bottom = 2*windowHeight + "px";
        explode[i].style.left = 10*windowHeight + "px";
    }
  }

  transit(document.getElementsByClassName("first-explode"));
  transit(document.getElementsByClassName("second-explode"));
  transit(document.getElementsByClassName("third-explode"));
  transit(document.getElementsByClassName("fourth-explode"));
  transit(document.getElementsByClassName("fifth-explode"));
}

function description(windowHeight){

  function animate_trans_in_out(explore,start,end){
    if(windowHeight>start && windowHeight<end){
      explore.classList.add("faderine_in");
      explore.style.left="60vw";
    }
    else{
      explore.style.left="-40vw";
    }

  }

  animate_trans_in_out(document.getElementById("first-explore"), vh_to_px(40),vh_to_px(120));
  animate_trans_in_out(document.getElementById("second-explore"),vh_to_px(148),vh_to_px(234));
  animate_trans_in_out(document.getElementById("third-explore"),vh_to_px(250),vh_to_px(340));
  animate_trans_in_out(document.getElementById("fourth-explore"),vh_to_px(359),vh_to_px(450));
  animate_trans_in_out(document.getElementById("fifth-explore"),vh_to_px(467),vh_to_px(558));
}
function scroll_up_btn(windowHeight){
  if(windowHeight>300){
    document.getElementById("scroll-up").classList.add("appear");
  }
  else{
    document.getElementById("scroll-up").classList.remove("appear");
  }
}

function parallax(){
    var windowHeight = window.scrollY;

    transit_card(windowHeight);
    description(windowHeight);
    scroll_up_btn(windowHeight);
    
  }
  
window.addEventListener("scroll", parallax);
