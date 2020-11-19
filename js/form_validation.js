window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return
        }
        try {
            (new AddressContact()).fullName = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    const phone = document.querySelector('#tel');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function() {
        if (name.value.length == 0) {
            phoneError.textContent = "";
            return
        }
        try {
            (new AddressContact()).phoneNumber = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        if (name.value.length == 0) {
            addressError.textContent = "";
            return
        }
        try {
            (new AddressContact()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });


});