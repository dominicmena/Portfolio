const $swiper = $('.swiper-slide')
$swiper.on('click', function () {
    $('.swiper-wrapper').show(500)
    $('.swiper-wrapper').on('click', function () {
        $('.swiper-wrapper').hide(500)
    })
})

const $swiper2 = $('.swiper-slide2')
$swiper.on('click', function () {
    $('.swiper-wrapper2').show(500)
    $('.swiper-wrapper2').on('click', function () {
        $('.swiper-wrapper2').hide(500)
    })
})

const $swiper3 = $('.swiper-slide3')
$swiper.on('click', function () {
    $('.swiper-wrapper3').show(500)
    $('.swiper-wrapper3').on('click', function () {
        $('.swiper-wrapper3').hide(500)
    })
})