import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppStore from "../store/";

export default function UserAdd() {
  const [name, setName] = useState ("");
  const [email, setEmail] = useState ("");
  const setUsers = useAppStore((state) => state.setUsers);
  const users = useAppStore((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      email,
    };
    setUsers([...users, newUser]);
    navigate("/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}