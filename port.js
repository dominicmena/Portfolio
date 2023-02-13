const $swiper = $('.swiper-slide')
$swiper.on('click', function () {
    $('.swiper-wrapper').show(800)
    $('.swiper-wrapper').on('click', function () {
        $('.swiper-wrapper').hide(800)
    })
})

const $swiper2 = $('.swiper-slide2')
$swiper.on('click', function () {
    $('.swiper-wrapper2').show(800)
    $('.swiper-wrapper2').on('click', function () {
        $('.swiper-wrapper2').hide(800)
    })
})

const $swiper3 = $('.swiper-slide3')
$swiper.on('click', function () {
    $('.swiper-wrapper3').show(800)
    $('.swiper-wrapper3').on('click', function () {
        $('.swiper-wrapper3').hide(800)
    })
})

const $menuIcon = $('#menu-icon')
$menuIcon.on('click', function () { $('.navbar').toggle().css("display"); });

const $navBar = $('.navbar')
$navBar.on("click", function () { 
    $navBar.slideToggle(300)
    $menuIcon.css("position", "fixed").css("margin", "220px")
    if ($menuIcon.css("position", "fixed").css("margin", "220px")) {
        $menuIcon.on('click', function () {
            $('.navbar').css("position", "fixed");
        });
        
    }})
