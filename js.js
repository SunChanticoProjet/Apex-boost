const burgerBtn = document.querySelector('.burger');
const navTest = document.querySelector('.nav-test');
const PopupItems = document.querySelector('.popup__items');
const body = document.body;
burgerBtn.onclick = () => {
    navTest.classList.toggle('active');
    burgerBtn.classList.toggle('active')
};
const popupBg = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');
const main_button = document.querySelector('.main_button');
const popupBlocks = document.querySelector('.popup__blocks');
main_button.onclick = () => {
    popup.classList.toggle('active')
    popupBlocks.classList.toggle('popup__blocks_active')
    
};
const closeBtn = document.querySelector('.close-btn');
closeBtn.onclick = () => {
    popup.classList.remove('active')
    popupBlocks.classList.remove('popup__blocks_active')
};

popupBg.onclick = () => {
     popup.classList.remove('active')
     PopupItems.classList.remove('popup__items_active')
     popupBlocks.classList.remove('popup__blocks_active')
};

main_button.addEventListener('click', (e) => {
    disableScroll();
});

let disableScroll = function () {
    document.body.classList.add('disable-scroll');
}

closeBtn.addEventListener('click', (e) => {
    enableScroll();
});

popupBg.addEventListener('click', (e) => {
    enableScroll();
});

let enableScroll = function () {
    document.body.classList.remove('disable-scroll');

}


$('.services__lower_blockss').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('.services__lower_blockss').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });