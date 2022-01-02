
const elToggleButton = document.querySelector('.header__switcher--checkbox');
const cardPrice = document.querySelector('.card__price--amount');


elToggleButton.addEventListener('click',function() {
    cardPrice.classList.add(' hidden') 
    cardPrice.classList.remove(' hidden') 
}
)