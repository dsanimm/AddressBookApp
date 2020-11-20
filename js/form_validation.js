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
    checkForUpdate();


});

const checkForUpdate = () => {
    const AddressBookEdit = localStorage.getItem('AddressBookEdit');
    isUpdate = AddressBookEdit ? true : false;
    if (!isUpdate) return;
    AddressContactData = JSON.parse(AddressBookEdit);
    setForm();
}
const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        AddressContactData = CreateAddressContact();
        createAndUpdateStorage(AddressContactData);
        resetForm();
        window.location.replace(site_properties.home_page);
    } catch (e) {
        return;
    }
}

const CreateAddressContact = () => {
    AddressContactData._fullName = getInputValueById('#name');
    AddressContactData._address = getInputValueById('#address');
    AddressContactData._phoneNumber = getInputValueById('#tel');
    AddressContactData._city = getInputValueById('#city');
    AddressContactData._state = getInputValueById('#state');
    AddressContactData._zip = getInputValueById('#zipcode');
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
    let AddressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (AddressBookList) {
        let contactData = AddressBookList.find(addressData => addressData._id == AddressContactData._id);
        if (!contactData) {
            AddressBookList.push(createAddressBookData());
        } else {
            const index = AddressBookList.map(addressData => addressData._id).indexOf(contactData._id);
            AddressBookList.splice(index, 1, createAddressBookData(contactData._id));
        }
    } else {
        AddressBookList = [createAddressBookData()];
    }
    localStorage.setItem("AddressBookList", JSON.stringify(AddressBookList));

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
        AddressData.fullName = AddressContactData._fullName;
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    AddressData.fullName = AddressContactData._fullName;
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
const resetForm = () => {
    setValue('#name', '');
    setValue('#address', '');
    setValue('#tel', '');
    setValue('#city', '');
    setValue('#state', '');
    setValue('#zipcode', '');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setForm = () => {
    setValue('#name', AddressContactData._fullName);
    setValue('#address', AddressContactData._address);
    setValue('#tel', AddressContactData._phoneNumber);
    setValue('#city', AddressContactData._city);
    setValue('#state', AddressContactData._state);
    setValue('#zipcode', AddressContactData._zip);
}