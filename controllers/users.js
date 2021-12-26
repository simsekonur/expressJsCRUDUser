import { v4 as uuidv4} from 'uuid';
let users = [ ];

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    
    res.send(`User with name ${user.firstName} is created!`);
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUserById = (req, res) => {
    const { id } = req.params;

    // find method will return an object
    const user = users.find(user => user.id === id);
    // const user = await findById(id);
    
    // filter returns just an ARRAY even only one object exists
    // const user = users.filter(user => user.id === id);
    res.send(user);
}

export const deleteUserById = (req, res) => {
    const { id } = req.params;

    // Filter returns an ARRAY
    users = users.filter(user => user.id !== id);
    res.send(`Succesfully removed the user with the id ${id}!`);
}

export const updateUserById = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    const { firstName, lastName, age } = req.body;
    if (firstName) foundUser.firstName = firstName;
    if (lastName) foundUser.lastName = lastName;
    if (age) foundUser.age = age;

    res.send(`User with id ${id} is updated!`);
}