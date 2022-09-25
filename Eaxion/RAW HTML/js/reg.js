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
 
 (function($) {
    $(document).ready(function() {
  
      $('.layer').each(function() {
  
        var $this = $(this),
          limit = 30,
          $star = [];
  
        while (limit) {
  
          $star = $('<span/>').addClass('star');
          $star.html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10.744,5.372C7.777,5.372,5.372,2.967,5.372,0c0,2.967-2.405,5.372-5.372,5.372c2.967,0,5.372,2.405,5.372,5.372 C5.372,7.777,7.777,5.372,10.744,5.372z"/></svg>');
          $star.css({
            left: randomInt(1, 100) + '%',
            top: randomInt(1, 100) + '%',
            transform: 'scale(' + randomNum(0, 1) + ')',
            opacity: randomNum(0.6, 1)
          });
  
          $this.append($star);
          limit--;
        }
      });
  
    });
  
    function randomInt(min, max) {
      return Math.floor((Math.random() * max) + min);
    }
    
    function randomNum(min, max) {
      return Math.max((Math.random() * max), min).toFixed(1);
    }
  })(jQuery);
  
  // title scroll function
  (function titleScroller(text) {
      document.title = text;
      console.log(text);
      setTimeout(function () {
          titleScroller(text.substr(1) + text.substr(0, 1));
      }, 500);
  }(" {hotelname} · Maintenance "));


  // star
  