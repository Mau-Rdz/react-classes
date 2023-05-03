//@ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";
import { users, User } from "../resources/User.ts";
import useForm from "../hooks/useForm.tsx";

function UserScreen() {
  const { id } = useParams();
  const user = users.find((x) => x.id.toString() == id);
  const [data, handleChange] = useForm<User>(user);
  const { name, role, address, salary } = data;

  if (!user) {
    return (
      <div className="container">
        <h1>USER NOT FOUND</h1>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <form>
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
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </div>
    </div>
  );
}

export default UserScreen;