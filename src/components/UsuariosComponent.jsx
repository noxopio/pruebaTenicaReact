import React, { useEffect, useState } from "react";

export const UsuariosComponent = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    // Filtrar usuarios por nombre o ID
    const filtered = users.filter((user) => {
      const lowerCaseName = user.name.toLowerCase();
      const idString = user.id.toString();
      const lowerCaseSearchText = searchText.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchText) || idString.includes(lowerCaseSearchText);
    });
    setFilteredUsers(filtered);
  }, [searchText, users]);

  return (
    <>
      <h1 className="form-title">Lista de usuarios</h1>

      <div  className="filter">
        <input
        
          type="text"
          placeholder="Buscar por nombre o ID"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
      </div>

      {loading ? (
        <p className="form_title">Cargando usuarios...</p>
      ) : (
        <table className="table table-dark table-custom">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
