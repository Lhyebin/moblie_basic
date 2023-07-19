/* <메인비주얼 : 이미지> */
const MainSlide = new Swiper('.main_slide', {
    loop: true,
});

/* <메인비주얼 : 화살표> */
const leftArrow = document.querySelector('#MainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev();
})
const rightArrow = document.querySelector('#MainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext();
})



/* <메인이벤트> */
const proSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },
    // <@반응형 540px>
    breackpoints: {
        540: {
            slidesPerView: 4,
        },
    },
});


// @반응형 540px : 모바일 메뉴버튼
const mobileBtn = document.querySelector('.mobile_btn');
const GNB = document.querySelector('#gnb');
const H1 = document.querySelector('h1');

{/* <버튼 클릭했을때 나오게 */ }
mobileBtn.addEventListener('click', function () {
    GNB.classList.toggle('on');
    H1.classList.toggle('on');
});

GNB.addEventListener('wheel', function (e) {
    if (GNB.classList.contains('on')) {
        e.preventDefault();
    }
})
