function User() {
    const users = [
        {id: 1, name: "Alice", firstname: "green", age: 25 },
        {id: 2, name: "Bob", firstname: "render", age: 30},
        {id: 3, name: "Charlie", firstname: "puth", age: 35}
    ];
return (
    <>
    <p>name : {users[0].name}</p>
    <p>firstname : {users[0].firstname}</p>
    <p>age : {users[0].age}</p>
    </>
);
}

export default User;