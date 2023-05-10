//@ts-nocheck
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getUser, User, UserDoc, updateUsers} from "../resources/User.ts";
import useForm from "../hooks/useForm.tsx";
import { NavLink } from 'react-router-dom';


const SetupUsers = async (setUser, id) => {
  const userDocs = await getUser(id)
  setUser(userDocs);
}

const emptyUser: UserDoc = {
  name: '',
  address: '',
  salary: '',
  role: '' 
}
function UserScreen() {
  const { id } = useParams();
  const [user, setUser] = useState<UserDoc>(emptyUser)
  useEffect(() => {
    SetupUsers(setUser, id)
  }, [])
  const [data, handleChange] = useForm<User>(emptyUser);
  const { name, role, address, salary } = data;
  if (!user) {
    return (
      <div className="container">
        <h1>USER NOT FOUND</h1>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleUpdate = () => {
    updateUsers(id, data);
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={role}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="5"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            id="salary"
            name="salary"
            value={salary}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="mb-3">
        {/* <NavLink to='/users' className="btn btn-primary">Guardar</NavLink> */}
        <button onClick={handleUpdate} className="btn btn-primary">Guardar</button>
      </div>
    </div>
  );
}

export default UserScreen;