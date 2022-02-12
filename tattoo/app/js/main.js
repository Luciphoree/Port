$(function(){
    $('.slider__gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "85px",
              arrows: true
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "65px",
              arrows: true
            }
          }
        ]
      });
      $('.slider__process').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "85px",
              arrows: true
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "65px",
              arrows: true
            }
          }
        ]
      });

      $('.nav__btn').on('click', function(){
        $('.header__list').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
        });




        
      })
      $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true,
        items: {
          src: '#popup',
        }
      });
});

