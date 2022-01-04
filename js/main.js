
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

        const optionEl = document.querySelector(".header__toggle--option");
        console.log(optionEl)

        const ElPriceOrigin = document.querySelectorAll(".price-origin");
        console.log(ElPriceOrigin)

        
       if (checkBox.checked){
        priceEl.forEach(el =>
            el.style.display = 'block' 
        )

        ElPriceOrigin.forEach(el =>
            el.style.display = 'none' 
        )

        optionEl.classList.add('active') 
    } 
    
    else {

        priceEl.forEach(el =>
            el.style.display = 'none' 
        )

        ElPriceOrigin.forEach(el =>
            el.style.display = 'block' 
        )

        optionEl.classList.remove(' active') 
  }
}

