import React, { useState } from 'react';

type AppProp = {
    message: string
}
type User = {
    name: string,
    age: number
}

const Message = ({ message }: AppProp) => {   // returns type infered.
    const [state, setState] = useState(false);
    // 👆 `state` is inferred to be a boolean. `setState` only takes booleans


    const [user, setUser] = useState<User | null>(null);
    // later...
    // setUser(newUser);

    // 👇 You can also use type assertions if a state is initialized soon after setup and always has a value after:
    const [users, setUsers] = useState<User>({} as User);
    // later...
    // setUsers(newUsers);

    return (
        <div>{message}</div>
    )
}