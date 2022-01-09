
const elPaymentRadio = document.querySelectorAll('[name="payment-period"]');
const elPriceValue = document.querySelectorAll('.card__price-value');

elPaymentRadio.forEach(function(el) {
    el.addEventListener('change', function () {

        const period = el.value;

        if (period === 'annual' ) {
            elPriceValue.forEach(function (elPrice) {
                elPrice.textContent = elPrice.closest('.card').dataset.annual;
            });
        } else {
            elPriceValue.forEach(function (elPrice) {
                elPrice.textContent = elPrice.closest('.card').dataset.monthly;
            })
        }
    })
})


