$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a.menu').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash === "#top") {
      $('html, body').animate({
        scrollTop: 0
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
    else if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    closeNav();
  });

  // NAVBAR FUNCTIONS
  function openNav() {
    $('#mySidenav').css('height', '100%');
  }

  function closeNav() {
    $('#mySidenav').css('height', '0');
  }
  // Event Listeners
  $('#hamburger').on('click', openNav);
  $('#menuCloseBtn').on('click', closeNav);

  // change navbar background on scrol
  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;

    if(y_scroll_pos > scroll_pos_test) {
      $(".navbar").css("background","rgba(0, 0, 0, 0.8)");
    }
    else {
      $(".navbar").css("background","transparent");
    }
  });

});
