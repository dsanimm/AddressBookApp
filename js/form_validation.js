let AddressContactData = {};

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
        createAndUpdateStorage(AddressContactData);
    } catch (e) {
        return;
    }
}

const CreateAddressContact = () => {
    AddressContactData._fullName = getInputValueById('#name');
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

function createAndUpdateStorage(addressData) {
    let AddressBookList = JSON.parse(localStorage.getItem("AddressBooklList"));
    if (AddressBookList) {
        let contactData = AddressBookList.find(addressData => addressData._id == AddressContactData._id);
        if (!contactData) {
            AddressBooklList.push(createAddressBookData());
        } else {
            const index = AddressBookList.map(addressData => addressData._id).indexOf(contactData._id);
            AddressBookList.splice(index, 1, createAddressBookData(contactData._id));
        }
    } else {
        AddressBookList = [createAddressBookData()];
    }
    localStorage.setItem("AddressBooklList", JSON.stringify(AddressBookList));

}

const createAddressBookData = (id) => {
    let AddressData = new AddressContact();
    if (!id) AddressData.id = createNewContactId();
    else AddressData.id = id;
    setAddressData(AddressData);
    return AddressData;
}

const setAddressData = (AddressData) => {
    try {
        AddressData.name = AddressContactData._name;
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    AddressData.name = AddressContactData._fullName;
    AddressData.phoneNumber = AddressContactData._phoneNumber;
    AddressData.address = AddressContactData._address;
    AddressData.state = AddressContactData._state;
    AddressData.city = AddressContactData._city;
    AddressData.zip = AddressContactData._zip;
    alert(AddressData.toString());
}

const createNewContactId = () => {
    let ContactID = localStorage.getItem("ContactID");
    ContactID = !ContactID ? 1 : (parseInt(ContactID) + 1).toString();
    localStorage.setItem("ContactID", ContactID);
    return ContactID;
}