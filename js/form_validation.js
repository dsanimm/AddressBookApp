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
const save = (event) => {

    try {
        let AddressContactData = CreateAddressContact();
    } catch (e) {
        return;
    }
}

const CreateAddressContact = () => {
    let AddressContactData = new AddressContact();

    try {
        AddressContactData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    AddressContactData._address = getInputValueById('#address');
    AddressContactData._phoneNumber = getInputValueById('#tel');
    AddressContactData._city = getSelectedValues('#city');
    AddressContactData._state = getInputValueById('#state');
    AddressContactData._note = getInputValueById('#zipcode');
    alert(AddressContactData.toString());
    return AddressContactData;
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked) selectedItems.push(item.value);
    });
    return selectedItems;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}