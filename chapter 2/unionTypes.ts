type contactBirthday = Date | number | string;

interface Contacts {
    name: string;
    email: string;
    phone: number;
    birthday: contactBirthday;
}

function getBirthday(contact: Contacts) {
    if(typeof contact.birthday === 'string'){
        return Date.parse(contact.birthday);
    }else if(typeof contact.birthday === 'number'){
        return new Date(contact.birthday)
    }else {
        return contact.birthday;
    }
}


// keyof operator

type fieldOfContacts = keyof Contacts;

function getValue(contact: Contacts, keyname: fieldOfContacts) {
    return contact[keyname]
}

let user1: Contacts = {
    name: 'mahi',
    email: 'mahi@gmail.com',
    phone: 123456789,
    birthday: new Date(2000, 1, 1)
}

getValue(user1, 'email')