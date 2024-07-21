enum ContactStatus {
    Active =  'active',
    Inactive = 'inactive',
    New = 'new',
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    email: string;
}

let primaryContact: Contact = {
    id: 1,
    name: "Hifzur Rahman",
    status: ContactStatus.Active,
    email: "hifzur@gmail.com",
}