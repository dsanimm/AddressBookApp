let AddressList;
window.addEventListener('DOMContentLoaded', (event) => {
    AddressList = getListFromLocalStorage();
    createInnerHtml();
});
const getListFromLocalStorage = () => {
    return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th>" +
        "<th>State</th><th>Zip Code</th><th>Phone Number</th>";
    if (AddressList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const addressData of AddressList) {
        innerHtml = `${innerHtml}
<tr>
    <td>${addressData._fullName}</td>
    <td>${addressData._address}</td>
    <td>${addressData._city}</td>
    <td>${addressData._state}</td>
    <td>${addressData._zip}</td>
    <td>${addressData._phoneNumber}</td>
    <td>
        <img src="../assets/delete-black-18dp.svg" alt="delete" id="${addressData._id}" onclick="remove(this)">
        <img src="../assets/create-black-18dp.svg" alt="edit" id="${addressData._id}" onclick="update(this)">
    </td>
</tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
const remove = (node) => {
    let addressData = AddressList.find(addressData => addressData._id == node.id);
    if (!addressData) return;
    const index = AddressList.map(addressData => addressData._id).indexOf(addressData._id);
    AddressList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(AddressList));
    createInnerHtml();
}

const update = (node) => {
    let addressData = AddressList.find(addressData => addressData._id == node.id);
    if (!addressData) return;
    localStorage.setItem('AddressBookEdit', JSON.stringify(addressData));
    window.location.replace(site_properties.add_address_contact_page);
}