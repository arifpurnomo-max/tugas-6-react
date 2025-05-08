export const createUsersSlice = (set) => ({
  users: [
    { id: 1,
      name: "John Doe",
      email: "john.doe@email.id",
      address: "123 React Street, JS City",
      birthdate: "1990-01-01",
      currentColleague: "Jane Smith",
      hobbies: ["Reading", "Coding", "Chess"],
      photo: "https://via.placeholder.com/150"
    },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@email.id' },
    { id: 3, name: 'Jim Doe', email: 'jim.doe@email.id' },
    { id: 4, name: 'Jack Doe', email: 'jack.doe@email.id' },
    { id: 5, name: 'Jill Doe', email: 'jill.doe@email.id' },
    { id: 6, name: 'Joe Doe', email: 'joe.doe@email.id' },
    { id: 7, name: 'Judy Doe', email: 'judy.doe@email.id' },
    { id: 8, name: 'Jake Doe', email: 'jake.doe@email.id' },
    { id: 9, name: 'Jessie Doe', email: 'jessie.doe@email.id' },
    { id: 10, name: 'Jordan Doe', email: 'jordan.doe@email.id' },
  ],
  setUsers: (users) => set({ users }),
})
