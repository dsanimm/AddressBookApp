class AddressContact {

    //Getters & Setters

    get fullName() {
        return this.fullName;
    }
    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(fullName)) {
            this.fullName = fullName;
        } else {
            throw 'Name is in Incorrect Format';
        }
    }
    get phoneNumber() {
        return this.phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('((^\\+?)(([0-9]{2,3})(\\s))?)' + '[0-9]{10}$');
        if (phoneRegex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw 'Phone Number is in Incorrect Format';
        }

    }
    get address() {
        return this.address;
    }
    set address(address) {
        let words = address.split(" ");
        let addressPattern = RegExp('([A-Z a-z 0-9]{3,})+');
        for (const word of words) {
            if (!addressPattern.test(word))
                throw 'Invalid Address !';
        }
        this._address = address;

    }


    get city() {
        return this.city;
    }
    set city(city) {
        this.city = city;
    }
    get state() {
        return this.state;
    }
    set state(state) {
        this.state = state;
    }
    get zip() {
        return this.zip;
    }
    set zip(zip) {
        this._zip = zip;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }


    toString() {
        return '[ FullName : ' + this.fullName + ' Address : ' +
            this.address + ' City : ' + this.city + ' State : ' + this.state + ' Zip : ' + this.zip +
            ' Phone Number : ' + this.phoneNumber + ' ]';
    }
}