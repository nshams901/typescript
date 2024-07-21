interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    access: true
}
const a : User = { name  : "John", email : 'John@example.com' };
const b : Admin = { name : "Bob", email : 'Bob@example.com', access : true };

// generic types <T>
function clone<T> (sources: T): T {
    return Object.apply({}, sources)
}


function cloned<T1, T2> (sources: T1, params: Admin ): T1 { 
    return Object.assign({}, sources)
}

const x = clone(a);
const y = cloned<User, Admin>(a, b);

