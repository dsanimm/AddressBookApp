window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th>" +
        "<th>State</th><th>Zip Code</th><th>Phone Number</th>";
    let AddressBookList = createAddressBookJSON();
    let innerHtml = `${headerHtml}`;
    for (const addressData of AddressBookList) {
        innerHtml = `${innerHtml}
<tr>
    <td>${addressData._fullName}</td>
    <td>${addressData._address}</td>
    <td>${addressData._city}</td>
    <td>${addressData._state}</td>
    <td>${addressData._zip}</td>
    <td>${addressData._phoneNumber}</td>
    <td>
        <img src="../assets/delete-black-18dp.svg" alt="delete" name="${addressData._id}" onclick="remove(this)">
        <img src="../assets/create-black-18dp.svg" alt="edit" name="${addressData._id}" onclick="update(this)">
    </td>
</tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createAddressBookJSON = () => {
    let addressListLocal = [{
            _fullName: 'Deepanshu',
            _address: 'Ghar',
            _city: 'Howrah',
            _state: 'Bihar',
            _zip: '201201',
            _phoneNumber: 9411677034,
        },
        {
            _fullName: 'Ram Kabir',
            _address: 'Bahar',
            _city: 'Howrah',
            _state: 'Bihar',
            _zip: '204201',
            _phoneNumber: 9411677056,
        }
    ];
    return addressListLocal;
}