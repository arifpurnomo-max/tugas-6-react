import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAppStore from "../store/";

export default function UserEdit() {
  const { id } = useParams();
  const users = useAppStore((state) => state.users);
  const setUsers = useAppStore((state) => state.setUsers);
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((u) =>
      u.id === parseInt(id) ? { ...u, name, email } : u
    );
    setUsers(updatedUsers);
    navigate("/users");
  };

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
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
      <button type="submit">Save</button>
    </form>
  );
}