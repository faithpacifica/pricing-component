
// const elToggleButton = document.querySelector('.header__switcher--checkbox');
// const cardPrice = document.querySelector('.card__price--amount');


// elToggleButton.addEventListener('click',function() {
//     cardPrice.classList.add(' hidden') 
//     cardPrice.classList.remove(' hidden') 
// }
// )
   


    function myFunction() {
        const checkBox = document.getElementById("toggle");
        console.log(checkBox)

        const priceEl = document.querySelectorAll(".hidden");
        console.log(priceEl)

        const optionEl = document.querySelectorAll(".header__toggle--option");
        console.log(optionEl)

        
       if (checkBox.checked){
        priceEl.style.display = 'block'
        optionEl.classList.add(' active') 
    } else {
        priceEl.style.display = 'none'
        optionEl.classList.remove(' active') 
  }
}

