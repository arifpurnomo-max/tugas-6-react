import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAppStore from '../store/';

const Users = () => {
  const [search, setSearch] = useState('');
  // const version = useAppStore((state) => state.version); // Removed unused variable
  const users = useAppStore((state) => state.users);
  const setUsers = useAppStore((state) => state.setUsers);

  const deleteUser = (id) => {
    if (window.confirm('Apakah kamu yakin ingin menghapus user ini?')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/user/add">
          <button className="btn-add">Add User</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.id}`}>
                  <button className="btn-detail">Detail</button>
                </Link>
                <Link to={`/user/${user.id}/edit`}>
                  <button className="btn-edit">Edit</button>
                </Link>
                <button
                  className="btn-delete"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;