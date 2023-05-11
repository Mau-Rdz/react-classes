//@ts-nocheck
import React from "react";
import { User, UserDoc, addUsers} from "../resources/User.ts";
import useForm from "../hooks/useForm.tsx";
import { NavLink } from 'react-router-dom';


const emptyUser: UserDoc = {
  name: '',
  address: '',
  salary: '',
  role: '' 
}
function AddUserScreen() {
  const [data, handleChange] = useForm<User>(emptyUser);
  const { name, role, address, salary } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleUpdate = () => {
    addUsers(data);
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
            value={address}
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
        <NavLink to='/users' onClick={handleUpdate} className="btn btn-primary">Agregar</NavLink>
      </div>
    </div>
  );
}

export default AddUserScreen;