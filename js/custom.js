/*
Template Name: ABC Tots
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
Version: 1.1
*/
jQuery(function($) {
			"use strict"; 

//----------------------------------- Document ready -----------------------------------//

       $(document).ready(function() {
		   
		         $('.nav-item a[href="' + location.pathname + '"]').addClass('active');


	   // Drag Slider

		 function sliderspeed() {
		var $slider = $(".slider"),
		  $slideBGs = $(".slide__bg"),
		  diff = 0,
		  curSlide = 0,
		  numOfSlides = $(".slide").length-1,
		  animating = false,
		  animTime = 500,
		  autoSlideTimeout,
		  autoSlideDelay = 10006000,
		  $pagination = $(".slider-pagi");
		 }	   
	   
	   // Contact form

			$("#submit_btn").on("click", function() {

			var proceed = true;
			//simple validation at client's end
			//loop through each field and we simply change border color to red for invalid fields		
			$("#contact_form input[required], #contact_form textarea[required]").each(function() {
			$(this).css('border-color', '');
			if (!$.trim($(this).val())) { //if this field is empty 
			  $(this).css('border-color', '#e44747');
			  $("#contact_results").html('<br><div class="alert alert-danger">Please fill out the required fields.</div>').show();
			  
			  proceed = false; //set do not proceed flag
			}
			//check invalid email
			var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if ($(this).attr("type") === "email" && !email_reg.test($.trim($(this).val()))) {
				$(this).css('border-color', '#e44747'); 
				$("#contact_results").html('<br><div class="alert alert-danger">Please enter a valid email address.</div>').show();
				proceed = false; //set do not proceed flag				
			}
			});

			if (proceed) //everything looks good! proceed...
			{
			//get input field values data to be sent to server
			var post_data = {
				'user_name': $('input[name=name]').val(),
				'user_email': $('input[name=email]').val(),
				'subject': $('input[name=subject]').val(),
				'msg': $('textarea[name=message]').val()
			};

			//Ajax post data to server
			$.post('php/sendmail.php', post_data, function(response) {
				if (response.type === 'error') { //load json data from server and output message     
					var output = '<br><div class="alert">' + response.text + '</div>';
				} else {
					var output = '<br><div class="success">' + response.text + '</div>';
					//reset values in all input fields
					$("#contact_form input, #contact_form textarea").val('');

				}
				$('html, body').animate({scrollTop: $("#contact_form").offset().top-50}, 2000);

				$("#contact_results").hide().html(output).slideDown();
			}, 'json');
			}
			});

			//reset previously set border colors and hide all message on .keyup()
			$("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() {
			$(this).css('background-color', '');
			$("#result").slideUp();
			});
	   
			// margin update on resize
			
			$(window).on("resize", function () {
				    var headerHeight = $('#main-nav').outerHeight();
					$('#page-wrapper').css('padding-top', headerHeight);
			}).resize();

			//Scrolling feature 

			$('.page-scroll a').on('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});

			//functions on window over than 1200px
			if ($(window).width() > 1200) {				
				$(".navbar .dropdown").on({
					mouseenter: function () {
					$(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();

					},  
					mouseleave: function () {
					$(this).find('.dropdown-menu').first().stop(true, true).delay(100).fadeOut();
					}
				});
					
				//show tabs content on hover only on big screens
				$('.tabs-with-icon .nav-tabs .nav-item').hover(function() {
					$(this).tab('show');
				});
			}		

			//	Back Top Link

			var offset = 200;
			var duration = 500;
			$(window).scroll(function() {
				if ($(this).scrollTop() > offset) {
					$('.back-to-top').fadeIn(400);
				} else {
					$('.back-to-top').fadeOut(400);
				}
			});

			//Owl-carousels
			
			$('.owl-stage').owlCarousel({
				loop: true,
				margin: 0,
				autoplayHoverPause:true,
				autoplay: true,
				nav: true,
				navText: [" <i class='fas fa-chevron-left'></i>", " <i class='fas fa-chevron-right'></i>"],
				dots: true,
				responsive: {
					0: {
						items: 1,
						stagePadding: 0
					},
					767: {
						items: 2,
						stagePadding: 60
					},
					1200: {
						items: 3,
						stagePadding: 120
					},
				}
			});
			
			$(".carousel-4items").owlCarousel({
				nav: true,
				navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
				dots: true,
				margin: 30,
				loop: true,
				autoplay: false,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					767: {
						items: 2,
					},
					1200: {
						items: 4,
					},
				}
			});
			$(".carousel-3items").owlCarousel({
				nav: true,
				navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
				dots: true,
				margin: 30,
				loop: true,
				autoplay: false,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					767: {
						items: 2,
					},
					1200: {
						items: 3,
					},
				}
			});
			$(".carousel-2items").owlCarousel({
				nav: true,
				navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
				dots: true,
				margin: 30,
				loop: true,
				autoHeight:true,
				autoplay: false,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					991: {
						items: 2,
					},
				}
			});
			$(".carousel-1item").owlCarousel({
				nav: true,
				navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
				dots: true,
				margin: 30,
				loop: true,
				autoplay: false,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},									
				}
			});
			  //scroll down to content on menu tabs on mobile only
				if ($(window).width() <= 991) {
					$("#nav-tab a").on("click", function() {
						$('html,body').animate({
								scrollTop: $(".tab-content").offset().top - 100
							},
							'slow');
					});
				};

	
			 // Magnific Popup
				 
			$('.magnific-popup').magnificPopup({
				delegate: 'a', // child items selector, by clicking on it popup will open
				type: 'image',
				overflowY:'scroll',
				gallery: {
				enabled: true
				},				
				titleSrc: function(item) {
				return '<a href="' + item.el.attr('href') + '">' + item.el.attr('title') + '</a>';
				},

				callbacks: {open: function() {$('.fixed-top').css('margin-right', '17px');},close: function() {$('.fixed-top').css('margin-right', '0px');}}
			});	

					
			 //------- Window scroll function -------//
				$(window).scroll(function() {

					//Collapse the top bar on scroll
					
					if ($("#main-nav").offset().top > 60) {
						$('.top-bar').slideUp({
							duration: 250,
							easing: "easeInOutSine"
						}).fadeOut(120);
					} else {
						$('.top-bar').slideDown({
							duration: 0,
							easing: "easeInOutSine"
						}).fadeIn(120);
					}
			
				}); // end window scroll
			
            //------- on click function -------//			
			$(document).on('click',function(){
				if ($(window).width() < 1200) {
				//close navbar if clicking outside menu
				$('.navbar .collapse').collapse('hide');
				}
				
			})
			// end on click

		}); // end document ready


	//----------------------------------- Window load function -----------------------------------//

	$(window).load(function() {

			// Page Preloader 	

			$("#preloader").fadeOut("slow");
			
			
			//Effects on scroll
			
			AOS.init({
				disable: 'mobile',
				duration: 1500,
				once: true
			});
			
			//initialize skrollr
			
			skrollr.init({
				forceHeight: false
			});

			// disable skrollr if using handheld device
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				skrollr.init().destroy();
			}

			//Isotope 

			var $container = $('#gallery-isotope');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
					layoutMode: 'masonry'
				}


			});
			$(window).smartresize(function() {
				$container.isotope({
					columnWidth: '.col-sm-3'
				});
			});

			//Isotope Nav Filter

			$('.category-isotope a').on('click', function() {
				$('.category-isotope .active').removeClass('active');
				$(this).addClass('active');

				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});

		}); // end window load function
	
}); // end jquery function