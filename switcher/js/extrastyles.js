// Cookie to remember what options are selected

$(function() {
    var navValue = localStorage.getItem("navValue");
    if (navValue != null) {
        $("#nav-options").val(navValue);
    }

    $("#nav-options").on("change", function() {
        localStorage.setItem("navValue", $(this).val());
    });
})

/*
$(function() {
    var footerValue = localStorage.getItem("footerValue");
    if (footerValue != null) {
        $("#footer-options").val(footerValue);
    }

    $("#footer-options").on("change", function() {
        localStorage.setItem("footerValue", $(this).val());
    });
})
*/

//
// selected option will show on page load

$(document).ready(function() {
    if ($('#nav-options').val() == "colored") {
        $("#main-nav").addClass("colored-nav");
        $(".nav-brand img").attr("src", "img/logo_light.png");
    }
			
	  $(".2-footer").hide();
	  $(".3-footer").hide();
	
});
 

// nav options

$("#nav-options").on('change', function() {
    if ($(this).val() == "colored") {
        $("#main-nav").addClass("colored-nav");
        $(".nav-brand img").attr("src", "img/logo_light.png");
    } else {
        $("#main-nav").removeClass("colored-nav");
        $(".nav-brand img").attr("src", "img/logo.png");
    }
});

// footer options



$(function () {
  $("#footer-options").change(function() {
    var val = $(this).val();
    if(val === "footer2") {
        $(".2-footer").show();
        $(".1-footer").hide();
		 $(".3-footer").hide();
    }
    else if(val === "footer3") {
        
          $(".3-footer").show();
        $(".1-footer").hide();
		 $(".2-footer").hide();
    }
  });
});
$(function () {
  $("#footer-options").change(function() {
    var val = $(this).val();
    if(val === "footer1") {
        $(".1-footer").show();
        $(".2-footer").hide();
		 $(".3-footer").hide();
    }
   
  });
});


// scroll to footer when selecting footer options

$('#footer-options').on('change', function() {
    $('body, html').animate({
        scrollTop: $('#footer').position().top
    });
})

//Force active link on home pages

$(function() {
    var loc = window.location.href; // returns the full URL
    if (/index3.php/.test(loc) || /index2.php/.test(loc) || /index.php/.test(loc) || /index_boxed.php/.test(loc)) {
        $('.home-menu').addClass('active');
    }
});