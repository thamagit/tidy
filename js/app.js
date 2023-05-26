$(document).ready(function () {
  // MIX IT UP
  if ($('.imagesss').length > 0) {
    console.log('Есть');
    let mixer = mixitup('.imagesss')
    const builtButtons = $('.built__buttons');

    $('.built__button:eq(0)').addClass('mixitup-control-active');
  }

  // BURGER
  $('.burger').click(function () {
    $('.header__nav').slideToggle(200);
    $(this).toggleClass('active');
  })

  // RANGE SLIDER
  const range = $('#simple-range');
  const rangeNumber = $('.simple-range__number');

  range.on('input', function () {
    let rangeValue = $(this).val();

    if (rangeValue == 0) rangeNumber.css('left', 18 + 'px').text('1,000');
    if (rangeValue == 25) rangeNumber.css('left', 18 + 71 + 'px').text('2,500');
    if (rangeValue == 50) rangeNumber.css('left', 18 + 71 * 2 + 'px').text('5,000');
    if (rangeValue == 75) rangeNumber.css('left', 18 + 71 * 3 + 'px').text('10,000');
    if (rangeValue == 100) rangeNumber.css('left', 18 + 71 * 4 + 'px').text('25,000');

    $('#simple-price-number-1').text(rangeValue);
    $('#simple-price-number-2').text(17 + 1 * rangeValue);
    $('#simple-price-number-3').text(17 * 2 + 2 * rangeValue);
  })

  // HEADER HIDING
  let scroll = 0;
  $(document).scroll(function () {
    if ($('.burger.active').length == 0) {
      if ($(this).scrollTop() > scroll) {
        $('.header-head').slideUp(100);
      } else {
        $('.header-head').slideDown(100);
      }
      scroll = $(this).scrollTop();
    }
  })

  //ACCORDEON
  $('.accordeon__item').click(function () {
    $(this).siblings().removeClass('_active').find('.accordeon__caption').slideUp(300);
    $(this).toggleClass('_active');
    $(this).find('.accordeon__caption').slideToggle(300);
  })
  $(document).click(function (e) {
    var container = $(".accordeon");
    if (container.has(e.target).length === 0) {
      $('.accordeon__item').removeClass('_active').find('.accordeon__caption').slideUp(300);
    }
  });

  wow = new WOW().init();
})